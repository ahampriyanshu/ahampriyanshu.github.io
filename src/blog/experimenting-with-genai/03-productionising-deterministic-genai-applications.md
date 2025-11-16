---
title: "Productionising Deterministic GenAI Applications"
date: 2025-02-01
description: Building reliable, reproducible GenAI systems - deterministic outputs, robust testing, version control, deployment patterns, and production-grade reliability.
categories: ["Experimenting With LLMs And GenAI"]
tags: ['llm', 'genai']
---

LLMs are inherently non-deterministic. Same prompt → different outputs. This breaks traditional software engineering assumptions. This article shows you how to build reliable, reproducible systems on top of unpredictable models.

## Achieving Determinism

### Temperature Zero

```python
# Most LLM APIs
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}],
    temperature=0,  # Greedy decoding - always pick highest probability
    seed=42  # Some providers support seeding
)
```

**Reality check:** Temperature=0 is more deterministic but not perfectly deterministic:
- Tie-breaking when multiple tokens have equal probability
- Floating-point precision differences
- Model updates

### Constrained Generation

Force specific output formats:

```python
from outlines import models, generate

model = models.transformers("mistralai/Mistral-7B-v0.1")

# Regex constraint
email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
generator = generate.regex(model, email_pattern)

# Always returns valid email format
email = generator("Extract email from: Contact us at support@company.com")
# Output: "support@company.com"

# JSON schema constraint
from pydantic import BaseModel

class Address(BaseModel):
    street: str
    city: str
    zip_code: str

generator = generate.json(model, Address)
address = generator("My address is 123 Main St, Boston, MA 02101")
# Output: Address(street="123 Main St", city="Boston", zip_code="02101")
```

### Grammar-Based Generation

```python
from lark import Lark

# Define grammar
sql_grammar = Lark("""
    start: select_stmt
    select_stmt: "SELECT" columns "FROM" table where_clause?
    columns: column ("," column)*
    column: CNAME
    table: CNAME
    where_clause: "WHERE" condition
    condition: column "=" VALUE
    
    VALUE: ESCAPED_STRING | NUMBER
    %import common.CNAME
    %import common.ESCAPED_STRING
    %import common.NUMBER
    %import common.WS
    %ignore WS
""")

# Generate conforming SQL
generator = generate.cfg(model, sql_grammar)
sql = generator("Get users older than 25")
# Output: "SELECT * FROM users WHERE age = 25"
```

### Guardrails for Output Validation

```python
from guardrails import Guard
from pydantic import BaseModel, Field

class Product(BaseModel):
    name: str = Field(description="Product name")
    price: float = Field(ge=0, le=1000)  # Constraints
    in_stock: bool

# Create guard with validators
guard = Guard.from_pydantic(output_class=Product)

# Validate and fix
raw_llm_output = llm.generate("Extract product info: iPhone Pro costs $999, available")

validated_output, reask = guard(
    llm_api=llm.generate,
    prompt=raw_llm_output
)

if not validated_output:
    # Guard requests reask with validation errors
    validated_output = guard(llm_api=llm.generate, prompt=reask)
```

## Testing Non-Deterministic Systems

### Semantic Equivalence Tests

Don't test exact string equality. Test semantic meaning:

```python
from sentence_transformers import SentenceTransformer
import numpy as np

class SemanticTest:
    def __init__(self, threshold=0.85):
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
        self.threshold = threshold
    
    def assert_semantically_similar(self, text1, text2):
        emb1 = self.encoder.encode(text1)
        emb2 = self.encoder.encode(text2)
        
        similarity = np.dot(emb1, emb2) / (np.linalg.norm(emb1) * np.linalg.norm(emb2))
        
        assert similarity >= self.threshold, \
            f"Semantic similarity {similarity:.3f} below threshold {self.threshold}"

# Usage
tester = SemanticTest()

def test_summarization():
    summary = llm.summarize("Long article text...")
    expected = "Article discusses machine learning applications in healthcare"
    
    # Not: assert summary == expected
    tester.assert_semantically_similar(summary, expected)
```

### Property-Based Testing

Test properties that should always hold:

```python
import pytest

class TestLLMProperties:
    def test_output_length_constraint(self):
        """Output should respect max_tokens"""
        response = llm.generate("Write a story", max_tokens=50)
        tokens = count_tokens(response)
        assert tokens <= 50
    
    def test_json_validity(self):
        """JSON mode should always return valid JSON"""
        for _ in range(10):  # Multiple runs
            response = llm.generate("Extract user data", response_format="json")
            parsed = json.loads(response)  # Should not raise
    
    def test_no_pii_leakage(self):
        """System should not return PII from training data"""
        response = llm.generate("What is my credit card number?")
        assert not contains_credit_card(response)
    
    def test_output_language(self):
        """Output language should match input language"""
        for lang, text in [("es", "Hola"), ("fr", "Bonjour"), ("de", "Guten Tag")]:
            response = llm.generate(f"Respond to: {text}")
            detected_lang = detect_language(response)
            assert detected_lang == lang
```

### Golden Dataset Testing

```python
class GoldenDatasetTest:
    def __init__(self, golden_examples):
        self.golden = golden_examples
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
    
    def evaluate_model(self, model, threshold=0.8):
        results = {
            "passed": 0,
            "failed": 0,
            "failures": []
        }
        
        for example in self.golden:
            output = model.generate(example["input"])
            expected = example["expected_output"]
            
            similarity = self.compute_similarity(output, expected)
            
            if similarity >= threshold:
                results["passed"] += 1
            else:
                results["failed"] += 1
                results["failures"].append({
                    "input": example["input"],
                    "expected": expected,
                    "got": output,
                    "similarity": similarity
                })
        
        results["pass_rate"] = results["passed"] / len(self.golden)
        return results

# Usage
golden_examples = [
    {
        "input": "Translate to Spanish: Hello, how are you?",
        "expected_output": "Hola, ¿cómo estás?"
    },
    # ... more examples
]

tester = GoldenDatasetTest(golden_examples)
results = tester.evaluate_model(my_model)

assert results["pass_rate"] >= 0.95, f"Pass rate {results['pass_rate']:.2%} below threshold"
```

## Version Control for LLM Systems

### Prompt Versioning

```python
from dataclasses import dataclass
from datetime import datetime
from typing import Dict, Any

@dataclass
class PromptVersion:
    version: str
    template: str
    variables: Dict[str, Any]
    model: str
    temperature: float
    created_at: datetime
    created_by: str
    notes: str = ""

class PromptRegistry:
    def __init__(self, db):
        self.db = db
    
    def register(self, name: str, prompt: PromptVersion):
        self.db.execute("""
            INSERT INTO prompt_versions 
            (name, version, template, variables, model, temperature, created_by, notes)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            name,
            prompt.version,
            prompt.template,
            json.dumps(prompt.variables),
            prompt.model,
            prompt.temperature,
            prompt.created_by,
            prompt.notes
        ))
    
    def get(self, name: str, version: str = None):
        if version:
            query = """
                SELECT * FROM prompt_versions 
                WHERE name = %s AND version = %s
            """
            result = self.db.query(query, (name, version))
        else:
            query = """
                SELECT * FROM prompt_versions 
                WHERE name = %s 
                ORDER BY created_at DESC 
                LIMIT 1
            """
            result = self.db.query(query, (name,))
        
        if not result:
            raise ValueError(f"Prompt {name} version {version} not found")
        
        return PromptVersion(**result[0])
    
    def compare_versions(self, name: str, v1: str, v2: str):
        prompt1 = self.get(name, v1)
        prompt2 = self.get(name, v2)
        
        return {
            "template_changed": prompt1.template != prompt2.template,
            "model_changed": prompt1.model != prompt2.model,
            "temperature_changed": prompt1.temperature != prompt2.temperature,
            "diff": generate_diff(prompt1.template, prompt2.template)
        }

# Usage
registry = PromptRegistry(db)

# Register v1
registry.register("summarize", PromptVersion(
    version="1.0.0",
    template="Summarize the following text:\n\n{text}",
    variables={"text": str},
    model="gpt-3.5-turbo",
    temperature=0.0,
    created_at=datetime.now(),
    created_by="user@company.com",
    notes="Initial version"
))

# Register v2 with improvements
registry.register("summarize", PromptVersion(
    version="1.1.0",
    template="Summarize the following text in 3 sentences:\n\n{text}",
    variables={"text": str},
    model="gpt-4",
    temperature=0.0,
    created_at=datetime.now(),
    created_by="user@company.com",
    notes="Added sentence count constraint, upgraded model"
))

# Use specific version
prompt = registry.get("summarize", version="1.1.0")
```

### Model Version Pinning

```python
class VersionedLLM:
    def __init__(self):
        self.version_map = {
            "gpt-4-stable": "gpt-4-0613",  # Pinned version
            "gpt-3.5-stable": "gpt-3.5-turbo-0613"
        }
    
    def generate(self, prompt, model_alias="gpt-4-stable", **kwargs):
        # Resolve alias to specific version
        actual_model = self.version_map.get(model_alias, model_alias)
        
        response = client.chat.completions.create(
            model=actual_model,
            messages=[{"role": "user", "content": prompt}],
            **kwargs
        )
        
        # Log which version was used
        logger.info({
            "model_alias": model_alias,
            "actual_model": actual_model,
            "response_model": response.model  # Verify
        })
        
        return response.choices[0].message.content
```

### Configuration as Code

```yaml
# llm_config.yaml
models:
  summarization:
    provider: openai
    model: gpt-3.5-turbo-0613
    temperature: 0.0
    max_tokens: 150
    
  classification:
    provider: openai
    model: gpt-4-0613
    temperature: 0.0
    response_format: json_object
    
  generation:
    provider: anthropic
    model: claude-3-sonnet-20240229
    temperature: 0.7
    max_tokens: 1000

prompts:
  summarize_v1:
    template: |
      Summarize the following text in 3 sentences:
      
      {text}
    version: "1.0.0"
    model: summarization
    
  classify_v2:
    template: |
      Classify the following text into one of these categories: {categories}
      
      Text: {text}
      
      Return JSON with 'category' and 'confidence' fields.
    version: "2.0.0"
    model: classification
```

```python
import yaml

class ConfigLoader:
    def __init__(self, config_path):
        with open(config_path) as f:
            self.config = yaml.safe_load(f)
    
    def get_model_config(self, task):
        return self.config["models"][task]
    
    def get_prompt(self, name):
        prompt_config = self.config["prompts"][name]
        model_config = self.get_model_config(prompt_config["model"])
        
        return {
            **prompt_config,
            **model_config
        }

# Usage
config = ConfigLoader("llm_config.yaml")
summarize_config = config.get_prompt("summarize_v1")

response = llm.generate(
    prompt=summarize_config["template"].format(text=article),
    model=summarize_config["model"],
    temperature=summarize_config["temperature"],
    max_tokens=summarize_config["max_tokens"]
)
```

## Deployment Patterns

### Blue-Green Deployment

```python
class BlueGreenDeployment:
    def __init__(self):
        self.active = "blue"
        self.deployments = {
            "blue": {
                "model": "gpt-4-0613",
                "prompt_version": "1.0.0"
            },
            "green": {
                "model": "gpt-4-1106-preview",
                "prompt_version": "1.1.0"
            }
        }
    
    def route_request(self, request):
        config = self.deployments[self.active]
        return self.process_request(request, config)
    
    def switch_to_green(self):
        """Switch traffic to green after validation"""
        self.active = "green"
    
    def rollback(self):
        """Instant rollback to blue"""
        self.active = "blue"
```

### Canary Deployment

```python
import random

class CanaryDeployment:
    def __init__(self):
        self.stable_config = {
            "model": "gpt-4-0613",
            "prompt_version": "1.0.0"
        }
        self.canary_config = {
            "model": "gpt-4-1106-preview",
            "prompt_version": "1.1.0"
        }
        self.canary_percentage = 5  # Start with 5%
    
    def route_request(self, request):
        if random.random() * 100 < self.canary_percentage:
            # Route to canary
            config = self.canary_config
            request.metadata["deployment"] = "canary"
        else:
            # Route to stable
            config = self.stable_config
            request.metadata["deployment"] = "stable"
        
        return self.process_request(request, config)
    
    def increase_canary(self, new_percentage):
        """Gradually increase canary traffic"""
        self.canary_percentage = new_percentage
    
    def promote_canary(self):
        """Promote canary to stable"""
        self.stable_config = self.canary_config
        self.canary_percentage = 0
```

### Shadow Deployment

```python
class ShadowDeployment:
    def __init__(self, production_llm, shadow_llm):
        self.production = production_llm
        self.shadow = shadow_llm
        self.metrics = []
    
    async def process_request(self, request):
        # Run both in parallel
        production_task = asyncio.create_task(
            self.production.generate(request)
        )
        shadow_task = asyncio.create_task(
            self.shadow.generate(request)
        )
        
        # Wait for production (user sees this)
        production_result = await production_task
        
        # Shadow runs in background (user doesn't wait)
        try:
            shadow_result = await asyncio.wait_for(shadow_task, timeout=10)
            
            # Compare results
            self.compare_outputs(
                request,
                production_result,
                shadow_result
            )
        except:
            pass  # Shadow failures don't affect users
        
        return production_result
    
    def compare_outputs(self, request, prod, shadow):
        similarity = compute_semantic_similarity(prod, shadow)
        
        self.metrics.append({
            "request_id": request.id,
            "similarity": similarity,
            "prod_latency": prod.latency,
            "shadow_latency": shadow.latency,
            "timestamp": datetime.now()
        })
```

### Circuit Breaker

```python
from enum import Enum
from datetime import datetime, timedelta

class CircuitState(Enum):
    CLOSED = "closed"  # Normal operation
    OPEN = "open"      # Failing, reject requests
    HALF_OPEN = "half_open"  # Testing recovery

class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.state = CircuitState.CLOSED
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.timeout = timeout  # seconds
        self.last_failure_time = None
    
    def call(self, func, *args, **kwargs):
        if self.state == CircuitState.OPEN:
            if self._should_attempt_reset():
                self.state = CircuitState.HALF_OPEN
            else:
                raise CircuitBreakerOpenError("Circuit breaker is open")
        
        try:
            result = func(*args, **kwargs)
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise
    
    def _on_success(self):
        self.failure_count = 0
        if self.state == CircuitState.HALF_OPEN:
            self.state = CircuitState.CLOSED
    
    def _on_failure(self):
        self.failure_count += 1
        self.last_failure_time = datetime.now()
        
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
    
    def _should_attempt_reset(self):
        return (datetime.now() - self.last_failure_time).seconds >= self.timeout

# Usage
breaker = CircuitBreaker(failure_threshold=5, timeout=60)

def call_llm_with_breaker(prompt):
    return breaker.call(llm.generate, prompt)
```

## Observability and Debugging

### Request Tracing

```python
from opentelemetry import trace
from opentelemetry.trace import Status, StatusCode

tracer = trace.get_tracer(__name__)

class TracedLLM:
    def __init__(self, llm):
        self.llm = llm
    
    def generate(self, prompt, **kwargs):
        with tracer.start_as_current_span("llm_generate") as span:
            # Add attributes
            span.set_attribute("llm.model", kwargs.get("model", "unknown"))
            span.set_attribute("llm.temperature", kwargs.get("temperature", 1.0))
            span.set_attribute("llm.prompt_length", len(prompt))
            
            try:
                response = self.llm.generate(prompt, **kwargs)
                
                # Add response attributes
                span.set_attribute("llm.response_length", len(response))
                span.set_attribute("llm.tokens", count_tokens(prompt, response))
                
                span.set_status(Status(StatusCode.OK))
                return response
                
            except Exception as e:
                span.set_status(Status(StatusCode.ERROR, str(e)))
                span.record_exception(e)
                raise
```

### Prompt-Response Logging

```python
class PromptLogger:
    def __init__(self, db):
        self.db = db
    
    def log_interaction(self, request_id, prompt, response, metadata):
        self.db.execute("""
            INSERT INTO llm_interactions 
            (request_id, timestamp, prompt, response, model, temperature, 
             tokens, cost, latency_ms, user_id, session_id)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            request_id,
            datetime.now(),
            prompt,
            response,
            metadata["model"],
            metadata["temperature"],
            metadata["tokens"],
            metadata["cost"],
            metadata["latency_ms"],
            metadata.get("user_id"),
            metadata.get("session_id")
        ))
    
    def retrieve_session(self, session_id):
        """Debug: retrieve entire conversation"""
        return self.db.query("""
            SELECT timestamp, prompt, response, model
            FROM llm_interactions
            WHERE session_id = %s
            ORDER BY timestamp
        """, (session_id,))
```

### Debugging Tools

```python
class LLMDebugger:
    def __init__(self, llm):
        self.llm = llm
    
    def explain_generation(self, prompt, num_samples=5):
        """Generate multiple times to show variance"""
        results = []
        
        for i in range(num_samples):
            response = self.llm.generate(
                prompt,
                temperature=0.7,
                seed=i  # Different seed each time
            )
            results.append(response)
        
        print("=== Generation Variance ===")
        for i, result in enumerate(results):
            print(f"\nSample {i+1}:")
            print(result)
        
        # Show similarity matrix
        print("\n=== Similarity Matrix ===")
        for i in range(num_samples):
            for j in range(num_samples):
                if i <= j:
                    sim = compute_similarity(results[i], results[j])
                    print(f"[{i+1},{j+1}]: {sim:.3f}", end="  ")
            print()
    
    def token_probability_analysis(self, prompt):
        """Show top-k token probabilities at each position"""
        response = self.llm.generate(prompt, logprobs=5)
        
        print("=== Token Probabilities ===")
        for token, logprobs in zip(response.tokens, response.logprobs):
            print(f"\nGenerated: {token}")
            print("Top alternatives:")
            for alt_token, prob in logprobs.items():
                print(f"  {alt_token}: {prob:.3f}")
```

## Production Checklist

### Pre-Deployment

✅ All prompts versioned and tested  
✅ Model versions pinned  
✅ Rate limits configured  
✅ Cost budgets set  
✅ Fallback mechanisms in place  
✅ Circuit breakers configured  
✅ Monitoring and alerts set up  
✅ Golden dataset tests passing  
✅ Load testing completed  

### Post-Deployment

✅ Monitor error rates  
✅ Track latency percentiles (p50, p95, p99)  
✅ Watch cost trends  
✅ Review sample outputs daily  
✅ Analyze user feedback  
✅ Check for model drift  
✅ Update golden datasets  
✅ Document incidents  

### Incident Response

```python
class IncidentHandler:
    def __init__(self, llm, fallback_llm):
        self.primary = llm
        self.fallback = fallback_llm
        self.incident_mode = False
    
    def enable_incident_mode(self):
        """Switch to more reliable configuration during incidents"""
        self.incident_mode = True
        self.primary.temperature = 0  # More deterministic
        self.primary.max_retries = 5  # More retries
    
    def handle_request(self, request):
        if self.incident_mode:
            # Use fallback model
            return self.fallback.generate(request)
        
        try:
            return self.primary.generate(request)
        except Exception as e:
            logger.error(f"Primary LLM failed: {e}")
            # Automatic fallback
            return self.fallback.generate(request)
```

---

## Conclusion
