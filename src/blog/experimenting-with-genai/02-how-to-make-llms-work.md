---
title: "How to Make LLMs Work"
date: 2025-02-01
description: Battle-tested techniques for building reliable LLM applications - from structured outputs and constrained generation to RAG, fine-tuning, and robust error handling.
categories: ["Experimenting With LLMs And GenAI"]
tags: ['llm', 'genai']
---

LLMs are powerful but unpredictable. This article covers production-tested techniques for making them actually work: structured outputs, constrained generation, effective RAG, strategic fine-tuning, and robust error handling.

## Structured Outputs: Stop Parsing Disasters

Free-form text output is unreliable. Force structured formats.

### JSON Mode (OpenAI)

```python
from openai import OpenAI

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4-1106-preview",
    response_format={"type": "json_object"},
    messages=[{
        "role": "user",
        "content": """Extract person details from: "John Doe, 30 years old, 
        lives in NYC, works as engineer". Return JSON with fields: 
        name, age, city, occupation"""
    }]
)

import json
data = json.loads(response.choices[0].message.content)
# Guaranteed valid JSON
```

### Function Calling

```python
tools = [{
    "type": "function",
    "function": {
        "name": "extract_person",
        "description": "Extract person information",
        "parameters": {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "age": {"type": "integer"},
                "city": {"type": "string"},
                "occupation": {"type": "string"}
            },
            "required": ["name", "age"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "..."}],
    tools=tools,
    tool_choice={"type": "function", "function": {"name": "extract_person"}}
)

# Get structured output
tool_call = response.choices[0].message.tool_calls[0]
arguments = json.loads(tool_call.function.arguments)
```

### Instructor Library (Type-Safe)

```python
from pydantic import BaseModel
import instructor
from openai import OpenAI

class Person(BaseModel):
    name: str
    age: int
    city: str
    occupation: str

# Patch OpenAI client
client = instructor.patch(OpenAI())

# Get typed response
person = client.chat.completions.create(
    model="gpt-4",
    response_model=Person,
    messages=[{"role": "user", "content": "..."}]
)

# person is validated Pydantic model
assert isinstance(person, Person)
assert person.age > 0
```

### Outlines: Constrained Generation

```python
from outlines import models, generate

model = models.transformers("meta-llama/Llama-2-7b-hf")

# Regex constrained
phone_regex = r"\d{3}-\d{3}-\d{4}"
generator = generate.regex(model, phone_regex)
phone = generator("Extract phone number from: Call me at 555-123-4567")
# Output: "555-123-4567" (guaranteed format)

# JSON schema constrained
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int

generator = generate.json(model, User)
user = generator("Extract user: John is 30")
# Output: User(name="John", age=30)
```

## Prompting Techniques That Actually Work

### Few-Shot with Clear Separators

```python
def few_shot_classify(text, examples):
    prompt = "Classify sentiment as positive, negative, or neutral.\n\n"
    
    for ex in examples:
        prompt += f"Text: {ex['text']}\nSentiment: {ex['label']}\n\n"
    
    prompt += f"Text: {text}\nSentiment:"
    
    return llm.generate(prompt, max_tokens=10, stop=["\n"])

examples = [
    {"text": "I love this product!", "label": "positive"},
    {"text": "Terrible experience", "label": "negative"},
    {"text": "It's okay", "label": "neutral"}
]

result = few_shot_classify("This is amazing!", examples)
```

### Chain-of-Thought with Examples

```python
def cot_math(problem):
    prompt = f"""Solve step by step.

Problem: If 5 apples cost $10, how much do 8 apples cost?
Steps:
1. Cost per apple = $10 / 5 = $2
2. Cost of 8 apples = 8 × $2 = $16
Answer: $16

Problem: {problem}
Steps:"""
    
    return llm.generate(prompt, temperature=0)

result = cot_math("If 3 oranges cost $6, how much do 7 oranges cost?")
```

### Self-Consistency: Multiple Paths

```python
def self_consistent_answer(problem, n_samples=5):
    prompt = f"Solve step by step:\n{problem}"
    
    answers = []
    for _ in range(n_samples):
        response = llm.generate(prompt, temperature=0.7)
        answer = extract_final_answer(response)
        answers.append(answer)
    
    # Return most common answer
    from collections import Counter
    return Counter(answers).most_common(1)[0][0]

problem = "If John has 3 times as many apples as Mary, and Mary has 5 more than Tom who has 7, how many does John have?"
answer = self_consistent_answer(problem)
```

### ReAct: Reasoning + Acting

```python
class ReActAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = {tool.name: tool for tool in tools}
    
    def run(self, task, max_steps=10):
        trajectory = f"Task: {task}\n"
        
        for step in range(max_steps):
            # Think
            prompt = f"{trajectory}\nThought:"
            thought = self.llm.generate(prompt, stop=["\nAction:"])
            trajectory += f"\nThought: {thought}"
            
            # Act
            prompt = f"{trajectory}\nAction:"
            action_str = self.llm.generate(prompt, stop=["\nObservation:"])
            trajectory += f"\nAction: {action_str}"
            
            # Parse action
            action_name, action_input = self.parse_action(action_str)
            
            if action_name == "Finish":
                return action_input
            
            # Execute
            tool = self.tools[action_name]
            observation = tool(action_input)
            trajectory += f"\nObservation: {observation}\n"
        
        return "Max steps reached"
```

## RAG: Retrieval Done Right

### Chunking Strategy

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Token-aware chunking
splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,  # tokens, not chars
    chunk_overlap=50,
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=tiktoken_len  # Count tokens, not chars
)

def tiktoken_len(text):
    tokens = encoding.encode(text)
    return len(tokens)

chunks = splitter.split_text(document)
```

### Hybrid Search (BM25 + Semantic)

```python
from rank_bm25 import BM25Okapi
from sentence_transformers import SentenceTransformer
import numpy as np

class HybridRetriever:
    def __init__(self, documents):
        self.documents = documents
        
        # BM25 (keyword)
        tokenized = [doc.split() for doc in documents]
        self.bm25 = BM25Okapi(tokenized)
        
        # Dense (semantic)
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
        self.embeddings = self.encoder.encode(documents)
    
    def retrieve(self, query, k=5, alpha=0.5):
        # BM25 scores
        bm25_scores = self.bm25.get_scores(query.split())
        
        # Semantic scores
        query_emb = self.encoder.encode([query])[0]
        semantic_scores = np.dot(self.embeddings, query_emb)
        
        # Normalize and combine
        bm25_scores = (bm25_scores - bm25_scores.min()) / (bm25_scores.max() - bm25_scores.min() + 1e-6)
        semantic_scores = (semantic_scores - semantic_scores.min()) / (semantic_scores.max() - semantic_scores.min() + 1e-6)
        
        combined = alpha * bm25_scores + (1 - alpha) * semantic_scores
        
        # Top-k
        top_indices = np.argsort(combined)[-k:][::-1]
        return [self.documents[i] for i in top_indices]
```

### Reranking with Cross-Encoder

```python
from sentence_transformers import CrossEncoder

class RerankedRetriever:
    def __init__(self, base_retriever):
        self.retriever = base_retriever
        self.reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
    
    def retrieve(self, query, k=5, rerank_top_n=20):
        # Get candidates
        candidates = self.retriever.retrieve(query, k=rerank_top_n)
        
        # Rerank
        pairs = [[query, doc] for doc in candidates]
        scores = self.reranker.predict(pairs)
        
        # Sort by reranked scores
        ranked_indices = np.argsort(scores)[::-1][:k]
        return [candidates[i] for i in ranked_indices]
```

### Contextual Compression

```python
def compress_context(query, documents, llm):
    """Extract only relevant parts from each document"""
    compressed = []
    
    for doc in documents:
        prompt = f"""Extract sentences from the document that are relevant to answering the question. Only return relevant sentences.

Question: {query}

Document: {doc}

Relevant sentences:"""
        
        relevant = llm.generate(prompt, max_tokens=200)
        if relevant.strip():
            compressed.append(relevant)
    
    return compressed

# Usage
candidates = retriever.retrieve(query, k=10)
compressed = compress_context(query, candidates, llm)
context = "\n\n".join(compressed)
```

### Parent Document Retrieval

```python
class ParentDocumentRetriever:
    """Retrieve small chunks, but return parent documents"""
    
    def __init__(self, documents):
        self.parents = documents  # Large parent docs
        self.children = []        # Small child chunks
        self.child_to_parent = {}  # Mapping
        
        # Split into chunks
        for i, parent in enumerate(documents):
            chunks = split_document(parent)
            for chunk in chunks:
                self.child_to_parent[len(self.children)] = i
                self.children.append(chunk)
        
        # Embed children
        self.embeddings = embed(self.children)
    
    def retrieve(self, query, k=3):
        # Search children (small, relevant)
        query_emb = embed([query])[0]
        scores = cosine_similarity([query_emb], self.embeddings)[0]
        top_child_indices = np.argsort(scores)[-k:][::-1]
        
        # Return parents (full context)
        parent_indices = set(self.child_to_parent[i] for i in top_child_indices)
        return [self.parents[i] for i in parent_indices]
```

## Fine-Tuning: When and How

### When to Fine-Tune

✅ Specific output format/style  
✅ Domain-specific terminology  
✅ Consistent behavior needed  
✅ Have 1000+ quality examples  

❌ General knowledge  
❌ Frequently changing data  
❌ Few examples  

### LoRA Fine-Tuning

```python
from peft import LoraConfig, get_peft_model, TaskType

# LoRA config
lora_config = LoraConfig(
    r=16,  # Rank
    lora_alpha=32,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM
)

# Apply to model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
model = get_peft_model(model, lora_config)

# Train only LoRA params (1% of total)
model.print_trainable_parameters()
# trainable params: 4.2M || all params: 6.7B || trainable%: 0.06%
```

### Training Loop

```python
from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,  # Effective batch size = 16
    learning_rate=2e-4,
    logging_steps=10,
    save_strategy="epoch",
    fp16=True,  # Mixed precision
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    data_collator=data_collator,
)

trainer.train()
```

### Dataset Format

```python
def format_instruction(example):
    """Format for instruction tuning"""
    return f"""### Instruction:
{example['instruction']}

### Input:
{example['input']}

### Response:
{example['output']}"""

# Apply to dataset
dataset = dataset.map(lambda x: {
    "text": format_instruction(x)
})
```

## Error Handling and Retries

### Exponential Backoff

```python
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=60),
    retry=retry_if_exception_type(RateLimitError)
)
def call_llm_with_retry(prompt):
    return llm.generate(prompt)
```

### Fallback Chain

```python
class FallbackLLM:
    def __init__(self, primary, fallbacks):
        self.models = [primary] + fallbacks
    
    def generate(self, prompt, **kwargs):
        errors = []
        
        for model in self.models:
            try:
                return model.generate(prompt, **kwargs)
            except Exception as e:
                errors.append((model.name, str(e)))
                continue
        
        raise Exception(f"All models failed: {errors}")

# Usage
llm = FallbackLLM(
    primary=GPT4(),
    fallbacks=[GPT35Turbo(), Claude()]
)
```

### Validation

```python
def validate_and_regenerate(prompt, validator, max_attempts=3):
    for attempt in range(max_attempts):
        response = llm.generate(prompt)
        
        if validator(response):
            return response
        
        # Add validation error to prompt
        prompt += f"\n\nPrevious attempt failed validation. Try again."
    
    raise ValueError("Failed to generate valid response")

# Example validator
def is_valid_json(text):
    try:
        json.loads(text)
        return True
    except:
        return False

response = validate_and_regenerate(
    "Return user data as JSON",
    validator=is_valid_json
)
```

## Testing and Evaluation

### Unit Tests for Prompts

```python
import pytest

class TestSentimentClassifier:
    def test_positive(self):
        result = classify_sentiment("I love this!")
        assert result == "positive"
    
    def test_negative(self):
        result = classify_sentiment("Terrible experience")
        assert result == "negative"
    
    def test_edge_case_mixed(self):
        result = classify_sentiment("Good product but bad service")
        assert result in ["neutral", "mixed"]
    
    @pytest.mark.parametrize("text,expected", [
        ("Amazing!", "positive"),
        ("Awful", "negative"),
        ("It's okay", "neutral"),
    ])
    def test_multiple_cases(self, text, expected):
        assert classify_sentiment(text) == expected
```

### Eval Dataset

```python
class LLMEvaluator:
    def __init__(self, test_cases):
        self.test_cases = test_cases
    
    def evaluate(self, model):
        results = {
            "accuracy": 0,
            "avg_latency": 0,
            "failures": []
        }
        
        correct = 0
        total_time = 0
        
        for case in self.test_cases:
            start = time.time()
            
            try:
                prediction = model(case["input"])
                latency = time.time() - start
                
                if prediction == case["expected"]:
                    correct += 1
                else:
                    results["failures"].append({
                        "input": case["input"],
                        "expected": case["expected"],
                        "got": prediction
                    })
                
                total_time += latency
                
            except Exception as e:
                results["failures"].append({
                    "input": case["input"],
                    "error": str(e)
                })
        
        results["accuracy"] = correct / len(self.test_cases)
        results["avg_latency"] = total_time / len(self.test_cases)
        
        return results
```

### A/B Testing Prompts

```python
class PromptABTest:
    def __init__(self, prompt_a, prompt_b):
        self.prompts = {"A": prompt_a, "B": prompt_b}
        self.results = {"A": [], "B": []}
    
    def run_test(self, test_inputs, n_samples=100):
        for i, input_text in enumerate(test_inputs):
            variant = "A" if i % 2 == 0 else "B"
            prompt = self.prompts[variant]
            
            result = llm.generate(prompt.format(input=input_text))
            self.results[variant].append(result)
    
    def analyze(self, metric_fn):
        scores_a = [metric_fn(r) for r in self.results["A"]]
        scores_b = [metric_fn(r) for r in self.results["B"]]
        
        print(f"Prompt A: {np.mean(scores_a):.3f}")
        print(f"Prompt B: {np.mean(scores_b):.3f}")
        
        # Statistical significance
        from scipy import stats
        t_stat, p_value = stats.ttest_ind(scores_a, scores_b)
        print(f"P-value: {p_value:.4f}")
```

## What's Next?

You now have production techniques: structured outputs prevent parsing errors, effective RAG grounds responses in truth, strategic fine-tuning customizes behavior, and robust error handling prevents failures.

But production LLMs have a cost problem. In **"Cost Tracking and Analytics in GenAI Applications"**, we'll cover:
- Real-time cost tracking per user/request
- Token usage analytics and optimization
- Model selection strategies for cost/quality trade-offs
- Caching architectures that actually save money
- Budget alerts and cost attribution

The cost management playbook awaits in Part 3.


LLM costs can spiral out of control fast. $0.03 per 1K tokens seems cheap until you're processing millions of requests daily. This article shows you how to track, analyze, and optimize costs in production GenAI applications.

## Real-Time Cost Tracking

### Per-Request Cost Calculation

```python
import tiktoken
from datetime import datetime
from dataclasses import dataclass
from typing import Optional

@dataclass
class CostMetrics:
    request_id: str
    timestamp: datetime
    model: str
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int
    prompt_cost: float
    completion_cost: float
    total_cost: float
    user_id: Optional[str] = None
    endpoint: Optional[str] = None

class CostTracker:
    # Pricing as of Jan 2024 (per 1M tokens)
    PRICING = {
        "gpt-4-turbo-preview": {"input": 10.00, "output": 30.00},
        "gpt-4": {"input": 30.00, "output": 60.00},
        "gpt-3.5-turbo": {"input": 0.50, "output": 1.50},
        "claude-3-opus": {"input": 15.00, "output": 75.00},
        "claude-3-sonnet": {"input": 3.00, "output": 15.00},
    }
    
    def __init__(self):
        self.encodings = {
            model: tiktoken.encoding_for_model(model)
            for model in ["gpt-4", "gpt-3.5-turbo"]
        }
    
    def count_tokens(self, text: str, model: str) -> int:
        if model in self.encodings:
            return len(self.encodings[model].encode(text))
        # Fallback approximation
        return len(text) // 4
    
    def calculate_cost(
        self,
        prompt: str,
        completion: str,
        model: str,
        request_id: str,
        user_id: Optional[str] = None
    ) -> CostMetrics:
        prompt_tokens = self.count_tokens(prompt, model)
        completion_tokens = self.count_tokens(completion, model)
        
        pricing = self.PRICING.get(model, {"input": 0, "output": 0})
        
        # Cost in dollars
        prompt_cost = (prompt_tokens / 1_000_000) * pricing["input"]
        completion_cost = (completion_tokens / 1_000_000) * pricing["output"]
        
        return CostMetrics(
            request_id=request_id,
            timestamp=datetime.now(),
            model=model,
            prompt_tokens=prompt_tokens,
            completion_tokens=completion_tokens,
            total_tokens=prompt_tokens + completion_tokens,
            prompt_cost=prompt_cost,
            completion_cost=completion_cost,
            total_cost=prompt_cost + completion_cost,
            user_id=user_id
        )

# Usage
tracker = CostTracker()
metrics = tracker.calculate_cost(
    prompt="What is machine learning?",
    completion="Machine learning is...",
    model="gpt-4",
    request_id="req_123",
    user_id="user_456"
)

print(f"Cost: ${metrics.total_cost:.6f}")
print(f"Tokens: {metrics.total_tokens}")
```

### Instrumented LLM Wrapper

```python
import logging
from functools import wraps
import time

class InstrumentedLLM:
    def __init__(self, client, cost_tracker, db):
        self.client = client
        self.tracker = cost_tracker
        self.db = db
        self.logger = logging.getLogger(__name__)
    
    def generate(self, prompt, model="gpt-3.5-turbo", user_id=None, **kwargs):
        request_id = generate_request_id()
        start_time = time.time()
        
        try:
            # Call LLM
            response = self.client.chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}],
                **kwargs
            )
            
            latency = time.time() - start_time
            completion = response.choices[0].message.content
            
            # Track costs
            metrics = self.tracker.calculate_cost(
                prompt=prompt,
                completion=completion,
                model=model,
                request_id=request_id,
                user_id=user_id
            )
            
            # Log to database
            self.db.insert_metrics({
                **metrics.__dict__,
                "latency_ms": latency * 1000,
                "status": "success"
            })
            
            # Log to monitoring
            self.logger.info({
                "request_id": request_id,
                "user_id": user_id,
                "model": model,
                "tokens": metrics.total_tokens,
                "cost": metrics.total_cost,
                "latency_ms": latency * 1000
            })
            
            return completion, metrics
            
        except Exception as e:
            self.logger.error({
                "request_id": request_id,
                "error": str(e),
                "model": model
            })
            raise

# Usage
llm = InstrumentedLLM(openai_client, tracker, database)
response, metrics = llm.generate(
    prompt="Explain quantum computing",
    model="gpt-4",
    user_id="user_123"
)
```

## Cost Analytics

### Database Schema

```sql
CREATE TABLE llm_requests (
    request_id VARCHAR(50) PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    user_id VARCHAR(50),
    endpoint VARCHAR(100),
    model VARCHAR(50) NOT NULL,
    prompt_tokens INTEGER NOT NULL,
    completion_tokens INTEGER NOT NULL,
    total_tokens INTEGER NOT NULL,
    prompt_cost DECIMAL(10, 6) NOT NULL,
    completion_cost DECIMAL(10, 6) NOT NULL,
    total_cost DECIMAL(10, 6) NOT NULL,
    latency_ms INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_id ON llm_requests(user_id);
CREATE INDEX idx_timestamp ON llm_requests(timestamp);
CREATE INDEX idx_model ON llm_requests(model);
```

### Cost Queries

```python
class CostAnalytics:
    def __init__(self, db):
        self.db = db
    
    def total_cost_by_period(self, start_date, end_date):
        return self.db.query("""
            SELECT 
                DATE(timestamp) as date,
                model,
                COUNT(*) as requests,
                SUM(total_tokens) as tokens,
                SUM(total_cost) as cost,
                AVG(latency_ms) as avg_latency
            FROM llm_requests
            WHERE timestamp BETWEEN %s AND %s
            GROUP BY DATE(timestamp), model
            ORDER BY date DESC, cost DESC
        """, (start_date, end_date))
    
    def cost_by_user(self, start_date, end_date, limit=100):
        return self.db.query("""
            SELECT 
                user_id,
                COUNT(*) as requests,
                SUM(total_tokens) as tokens,
                SUM(total_cost) as cost,
                AVG(latency_ms) as avg_latency,
                MAX(total_cost) as max_single_cost
            FROM llm_requests
            WHERE timestamp BETWEEN %s AND %s
                AND user_id IS NOT NULL
            GROUP BY user_id
            ORDER BY cost DESC
            LIMIT %s
        """, (start_date, end_date, limit))
    
    def cost_by_endpoint(self, start_date, end_date):
        return self.db.query("""
            SELECT 
                endpoint,
                model,
                COUNT(*) as requests,
                SUM(total_cost) as cost,
                AVG(total_cost) as avg_cost_per_request,
                PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY total_cost) as p95_cost
            FROM llm_requests
            WHERE timestamp BETWEEN %s AND %s
            GROUP BY endpoint, model
            ORDER BY cost DESC
        """, (start_date, end_date))
    
    def expensive_requests(self, threshold=1.0, limit=100):
        return self.db.query("""
            SELECT 
                request_id,
                timestamp,
                user_id,
                endpoint,
                model,
                total_tokens,
                total_cost,
                latency_ms
            FROM llm_requests
            WHERE total_cost > %s
            ORDER BY total_cost DESC
            LIMIT %s
        """, (threshold, limit))
```

### Real-Time Dashboards

```python
from prometheus_client import Counter, Histogram, Gauge

# Metrics
llm_requests_total = Counter('llm_requests_total', 'Total LLM requests', ['model', 'status'])
llm_cost_total = Counter('llm_cost_total', 'Total LLM cost in dollars', ['model'])
llm_tokens_total = Counter('llm_tokens_total', 'Total tokens used', ['model', 'type'])
llm_latency = Histogram('llm_latency_seconds', 'Request latency', ['model'])
llm_cost_by_user = Gauge('llm_cost_by_user', 'Current cost by user', ['user_id'])

class MetricsCollector:
    def record_request(self, metrics: CostMetrics, latency: float, status: str):
        # Increment counters
        llm_requests_total.labels(model=metrics.model, status=status).inc()
        llm_cost_total.labels(model=metrics.model).inc(metrics.total_cost)
        llm_tokens_total.labels(model=metrics.model, type='prompt').inc(metrics.prompt_tokens)
        llm_tokens_total.labels(model=metrics.model, type='completion').inc(metrics.completion_tokens)
        
        # Record latency
        llm_latency.labels(model=metrics.model).observe(latency)
        
        # Update user gauge
        if metrics.user_id:
            current_cost = self.get_user_cost_today(metrics.user_id)
            llm_cost_by_user.labels(user_id=metrics.user_id).set(current_cost)
```

## Optimization Strategies

### Smart Caching

```python
import hashlib
import redis
import json

class SemanticCache:
    def __init__(self, redis_client, similarity_threshold=0.95):
        self.redis = redis_client
        self.threshold = similarity_threshold
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
    
    def _get_embedding(self, text):
        return self.encoder.encode(text)
    
    def _similarity(self, emb1, emb2):
        return np.dot(emb1, emb2) / (np.linalg.norm(emb1) * np.linalg.norm(emb2))
    
    def get(self, prompt, model):
        # Get prompt embedding
        prompt_emb = self._get_embedding(prompt)
        
        # Search cache
        cache_keys = self.redis.keys(f"cache:{model}:*")
        
        for key in cache_keys:
            cached = json.loads(self.redis.get(key))
            cached_emb = np.array(cached["embedding"])
            
            similarity = self._similarity(prompt_emb, cached_emb)
            
            if similarity >= self.threshold:
                return cached["response"], cached["cost"]
        
        return None, None
    
    def set(self, prompt, model, response, cost):
        prompt_emb = self._get_embedding(prompt)
        key = f"cache:{model}:{hashlib.md5(prompt.encode()).hexdigest()}"
        
        value = {
            "prompt": prompt,
            "response": response,
            "cost": cost,
            "embedding": prompt_emb.tolist()
        }
        
        self.redis.setex(key, 86400, json.dumps(value))  # 24h TTL

class CachedLLM:
    def __init__(self, llm, cache):
        self.llm = llm
        self.cache = cache
        self.cache_hits = 0
        self.cache_misses = 0
    
    def generate(self, prompt, model="gpt-3.5-turbo", **kwargs):
        # Check cache
        cached_response, cached_cost = self.cache.get(prompt, model)
        
        if cached_response:
            self.cache_hits += 1
            return cached_response, {
                "cached": True,
                "cost_saved": cached_cost
            }
        
        # Cache miss - call LLM
        self.cache_misses += 1
        response, metrics = self.llm.generate(prompt, model=model, **kwargs)
        
        # Cache result
        self.cache.set(prompt, model, response, metrics.total_cost)
        
        return response, metrics
    
    def cache_hit_rate(self):
        total = self.cache_hits + self.cache_misses
        return self.cache_hits / total if total > 0 else 0
```

### Model Selection Strategy

```python
class AdaptiveModelSelector:
    """Choose cheapest model that meets quality requirements"""
    
    def __init__(self):
        self.models = [
            {"name": "gpt-3.5-turbo", "cost_per_1k": 0.0015, "quality": 0.7},
            {"name": "gpt-4-turbo", "cost_per_1k": 0.01, "quality": 0.9},
            {"name": "gpt-4", "cost_per_1k": 0.03, "quality": 0.95},
        ]
    
    def estimate_complexity(self, prompt):
        """Heuristic for task complexity"""
        factors = [
            len(prompt) > 1000,  # Long prompt
            "analyze" in prompt.lower(),
            "explain" in prompt.lower(),
            "complex" in prompt.lower(),
            prompt.count("?") > 2,  # Multiple questions
        ]
        return sum(factors) / len(factors)
    
    def select_model(self, prompt, min_quality=0.8):
        complexity = self.estimate_complexity(prompt)
        
        # Adjust quality requirement based on complexity
        required_quality = min_quality + (complexity * 0.1)
        
        # Find cheapest model that meets quality requirement
        for model in sorted(self.models, key=lambda x: x["cost_per_1k"]):
            if model["quality"] >= required_quality:
                return model["name"]
        
        # Fallback to best model
        return self.models[-1]["name"]

# Usage
selector = AdaptiveModelSelector()

simple_prompt = "What is 2+2?"
complex_prompt = "Analyze the economic implications of AI on global labor markets"

print(selector.select_model(simple_prompt))  # gpt-3.5-turbo
print(selector.select_model(complex_prompt))  # gpt-4
```

### Prompt Compression

```python
class PromptCompressor:
    def __init__(self, llm, target_ratio=0.5):
        self.llm = llm
        self.target_ratio = target_ratio
    
    def compress(self, prompt, preserve_instructions=True):
        # Extract instructions
        lines = prompt.split("\n")
        instructions = []
        content = []
        
        for line in lines:
            if line.startswith("###") or line.startswith("Instruction"):
                instructions.append(line)
            else:
                content.append(line)
        
        content_text = "\n".join(content)
        
        # Compress content only
        compression_prompt = f"""Compress the following text to {int(self.target_ratio * 100)}% of its length while preserving key information:

{content_text}

Compressed version:"""
        
        compressed_content = self.llm.generate(
            compression_prompt,
            model="gpt-3.5-turbo",
            max_tokens=int(len(content_text.split()) * self.target_ratio)
        )
        
        # Reconstruct
        if preserve_instructions:
            return "\n".join(instructions + [compressed_content])
        return compressed_content

# Usage
compressor = PromptCompressor(llm, target_ratio=0.6)
compressed = compressor.compress(long_prompt)
print(f"Original: {len(long_prompt)} chars")
print(f"Compressed: {len(compressed)} chars")
print(f"Ratio: {len(compressed)/len(long_prompt):.1%}")
```

### Batch Processing

```python
class BatchProcessor:
    def __init__(self, llm, batch_size=10):
        self.llm = llm
        self.batch_size = batch_size
    
    def process_batch(self, prompts):
        """Process multiple prompts in single request"""
        
        # Combine prompts
        batch_prompt = "\n---\n".join([
            f"Task {i+1}:\n{prompt}"
            for i, prompt in enumerate(prompts)
        ])
        
        # Single LLM call
        response = self.llm.generate(
            f"Process the following {len(prompts)} tasks:\n\n{batch_prompt}",
            model="gpt-3.5-turbo"
        )
        
        # Split responses
        responses = response.split("---")
        
        return responses[:len(prompts)]

# Savings example
single_cost = 0.002 * 10  # 10 separate calls
batch_cost = 0.002 * 1    # 1 batched call
savings = single_cost - batch_cost
print(f"Savings: ${savings:.6f} ({savings/single_cost:.1%})")
```

## Budget Management

### User-Level Rate Limiting

```python
from datetime import datetime, timedelta

class BudgetManager:
    def __init__(self, db, redis_client):
        self.db = db
        self.redis = redis_client
    
    def set_user_budget(self, user_id, daily_budget, monthly_budget):
        self.db.execute("""
            INSERT INTO user_budgets (user_id, daily_budget, monthly_budget)
            VALUES (%s, %s, %s)
            ON CONFLICT (user_id) 
            DO UPDATE SET daily_budget = %s, monthly_budget = %s
        """, (user_id, daily_budget, monthly_budget, daily_budget, monthly_budget))
    
    def check_budget(self, user_id):
        # Get budgets
        budgets = self.db.query("""
            SELECT daily_budget, monthly_budget
            FROM user_budgets
            WHERE user_id = %s
        """, (user_id,))[0]
        
        # Get current spend
        today = datetime.now().date()
        month_start = today.replace(day=1)
        
        daily_spend = self.db.query("""
            SELECT COALESCE(SUM(total_cost), 0) as spend
            FROM llm_requests
            WHERE user_id = %s AND DATE(timestamp) = %s
        """, (user_id, today))[0]["spend"]
        
        monthly_spend = self.db.query("""
            SELECT COALESCE(SUM(total_cost), 0) as spend
            FROM llm_requests
            WHERE user_id = %s AND timestamp >= %s
        """, (user_id, month_start))[0]["spend"]
        
        return {
            "daily": {
                "budget": budgets["daily_budget"],
                "spent": daily_spend,
                "remaining": budgets["daily_budget"] - daily_spend,
                "exceeded": daily_spend >= budgets["daily_budget"]
            },
            "monthly": {
                "budget": budgets["monthly_budget"],
                "spent": monthly_spend,
                "remaining": budgets["monthly_budget"] - monthly_spend,
                "exceeded": monthly_spend >= budgets["monthly_budget"]
            }
        }
    
    def can_make_request(self, user_id, estimated_cost):
        budget_status = self.check_budget(user_id)
        
        if budget_status["daily"]["exceeded"]:
            return False, "Daily budget exceeded"
        
        if budget_status["monthly"]["exceeded"]:
            return False, "Monthly budget exceeded"
        
        if budget_status["daily"]["remaining"] < estimated_cost:
            return False, "Insufficient daily budget"
        
        return True, "OK"

# Usage in LLM wrapper
class BudgetAwareLLM:
    def __init__(self, llm, budget_manager, cost_tracker):
        self.llm = llm
        self.budget = budget_manager
        self.tracker = cost_tracker
    
    def generate(self, prompt, user_id, **kwargs):
        # Estimate cost
        estimated_cost = self.tracker.estimate_cost(prompt, kwargs.get("model"))
        
        # Check budget
        can_proceed, message = self.budget.can_make_request(user_id, estimated_cost)
        
        if not can_proceed:
            raise BudgetExceededError(message)
        
        # Proceed with request
        return self.llm.generate(prompt, user_id=user_id, **kwargs)
```

### Alerts

```python
class CostAlertManager:
    def __init__(self, db, notification_service):
        self.db = db
        self.notifier = notification_service
    
    def check_alerts(self):
        # Daily budget alerts
        daily_alerts = self.db.query("""
            SELECT 
                u.user_id,
                u.email,
                ub.daily_budget,
                COALESCE(SUM(r.total_cost), 0) as daily_spend
            FROM user_budgets ub
            JOIN users u ON ub.user_id = u.user_id
            LEFT JOIN llm_requests r ON u.user_id = r.user_id 
                AND DATE(r.timestamp) = CURRENT_DATE
            GROUP BY u.user_id, u.email, ub.daily_budget
            HAVING COALESCE(SUM(r.total_cost), 0) >= ub.daily_budget * 0.8
        """)
        
        for alert in daily_alerts:
            self.notifier.send_email(
                to=alert["email"],
                subject="LLM Cost Alert - Daily Budget",
                body=f"""You've used {alert['daily_spend']:.2f} of your {alert['daily_budget']:.2f} daily budget."""
            )
    
    def monitor_anomalies(self):
        # Detect unusual spending patterns
        anomalies = self.db.query("""
            WITH hourly_costs AS (
                SELECT 
                    user_id,
                    DATE_TRUNC('hour', timestamp) as hour,
                    SUM(total_cost) as cost
                FROM llm_requests
                WHERE timestamp >= NOW() - INTERVAL '24 hours'
                GROUP BY user_id, DATE_TRUNC('hour', timestamp)
            ),
            user_baselines AS (
                SELECT 
                    user_id,
                    AVG(cost) as avg_hourly_cost,
                    STDDEV(cost) as stddev_cost
                FROM hourly_costs
                GROUP BY user_id
            )
            SELECT 
                hc.user_id,
                hc.hour,
                hc.cost,
                ub.avg_hourly_cost,
                (hc.cost - ub.avg_hourly_cost) / ub.stddev_cost as z_score
            FROM hourly_costs hc
            JOIN user_baselines ub ON hc.user_id = ub.user_id
            WHERE (hc.cost - ub.avg_hourly_cost) / ub.stddev_cost > 3
        """)
        
        for anomaly in anomalies:
            self.notifier.send_alert(
                severity="warning",
                message=f"Unusual spending detected for user {anomaly['user_id']}"
            )
```

## What's Next?

You can now track costs at every level, optimize spending through caching and smart model selection, and prevent budget overruns with proactive monitoring.

But cost control is only part of production readiness. LLMs are non-deterministic by nature—same prompt can yield different outputs. In **"Deploying Deterministic GenAI Applications"**, we'll tackle:
- Making LLM outputs reproducible
- Structured generation constraints
- Testing strategies for non-deterministic systems
- Version control for prompts and models
- Deployment patterns for reliability


You've now completed the full journey: understanding how LLMs work internally, making them work reliably in practice, tracking and optimizing costs, and deploying deterministic systems in production.

**Key Takeaways:**

1. **Determinism is a spectrum** - Use temperature=0, constrained generation, and validation
2. **Test properties, not outputs** - Semantic similarity beats exact matching
3. **Version everything** - Prompts, models, configs
4. **Deploy cautiously** - Blue-green, canary, shadow patterns
5. **Monitor relentlessly** - Costs, errors, latency, quality
6. **Plan for failure** - Circuit breakers, fallbacks, incident response

LLMs will continue evolving rapidly. The techniques here provide a foundation for building production systems that work reliably despite the underlying technology's inherent unpredictability.

Now go build reliable AI systems that your users can trust.

