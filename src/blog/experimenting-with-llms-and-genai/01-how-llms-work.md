---
title: "How LLMs Work"
date: 2025-02-01
description: Deep technical dive into how Large Language Models actually work - tokenization, transformer architecture, attention mechanisms, training, and inference at scale.
categories: ["Experimenting With LLMs And GenAI"]
tags: ['llm', 'genai']
pin: true
---

Large Language Models are production systems processing billions of tokens daily. Understanding their internals isn't academic—it's essential for debugging, optimization, and building reliable applications. This article dissects how LLMs actually work, from tokenization to inference.

## Tokenization: The Real Starting Point

Text doesn't go into models directly. **Tokenization** converts text into integer sequences that transformers process.

### BPE (Byte Pair Encoding)

Most LLMs use BPE or variants (WordPiece, SentencePiece). BPE learns subword units from training data.

```python
import tiktoken

# GPT models use tiktoken
encoding = tiktoken.encoding_for_model("gpt-4")

text = "Tokenization is fascinating!"
tokens = encoding.encode(text)
print(f"Text: {text}")
print(f"Tokens: {tokens}")
print(f"Token count: {len(tokens)}")

# Decode back
decoded = encoding.decode(tokens)
print(f"Decoded: {decoded}")

# See individual tokens
for token in tokens:
    print(f"{token}: '{encoding.decode([token])}'")
```

**Output:**
```
Text: Tokenization is fascinating!
Tokens: [3404, 2065, 374, 27387, 0]
Token count: 5
Token 3404: 'Token'
Token 2065: 'ization'
Token 374: ' is'
Token 27387: ' fascinating'
Token 0: '!'
```

### Why Subword Tokenization?

**Word-level**: Vocabulary explosion, can't handle rare words  
**Character-level**: Sequences too long, loses semantic meaning  
**Subword**: Balance between vocabulary size and sequence length

```python
# Compare tokenization
texts = [
    "run running runner",
    "antiestablishmentarianism",
    "😀 🎉 🚀"
]

for text in texts:
    tokens = encoding.encode(text)
    print(f"\nText: {text}")
    print(f"Tokens ({len(tokens)}): {[encoding.decode([t]) for t in tokens]}")
```

### Token Limits Are Real

Context windows are measured in tokens, not characters. This matters:

```python
def estimate_tokens(text, model="gpt-4"):
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

# Example: code is token-heavy
code = """
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
"""

prose = "A simple recursive function to calculate Fibonacci numbers."

print(f"Code tokens: {estimate_tokens(code)}")      # ~40 tokens
print(f"Prose tokens: {estimate_tokens(prose)}")    # ~10 tokens
```

Code, JSON, and special characters consume more tokens than natural language.

## Transformer Architecture: The Engine

The transformer is the computational graph that processes token sequences.

### Input Representation

```python
import torch
import torch.nn as nn

class InputEmbedding(nn.Module):
    def __init__(self, vocab_size, d_model):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.scale = d_model ** 0.5
    
    def forward(self, x):
        # Scale embeddings by sqrt(d_model) as per paper
        return self.embedding(x) * self.scale

# Example
vocab_size = 50257  # GPT-2 vocab
d_model = 768       # Hidden dimension
embedding = InputEmbedding(vocab_size, d_model)

tokens = torch.tensor([[15496, 995]])  # "Hello world"
embedded = embedding(tokens)
print(f"Shape: {embedded.shape}")  # [batch_size, seq_len, d_model]
```

### Positional Encoding

Transformers have no inherent position awareness. We inject it:

```python
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        
        # Create constant PE matrix
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1).float()
        
        # Compute div_term for sinusoidal encoding
        div_term = torch.exp(
            torch.arange(0, d_model, 2).float() * 
            (-torch.log(torch.tensor(10000.0)) / d_model)
        )
        
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        
        self.register_buffer('pe', pe.unsqueeze(0))
    
    def forward(self, x):
        # x: [batch_size, seq_len, d_model]
        return x + self.pe[:, :x.size(1)]
```

Modern models often use **learned positional embeddings**:

```python
class LearnedPositionalEmbedding(nn.Module):
    def __init__(self, max_len, d_model):
        super().__init__()
        self.pos_embedding = nn.Embedding(max_len, d_model)
    
    def forward(self, x):
        batch_size, seq_len = x.shape[:2]
        positions = torch.arange(seq_len, device=x.device)
        return x + self.pos_embedding(positions)
```

### Multi-Head Self-Attention: The Core Innovation

Self-attention computes relationships between all positions in a sequence.

```python
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0
        
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        # Q, K, V projections
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        
        # Output projection
        self.W_o = nn.Linear(d_model, d_model)
        
        self.dropout = nn.Dropout(dropout)
    
    def split_heads(self, x):
        batch_size, seq_len, d_model = x.shape
        # [batch, seq_len, d_model] -> [batch, num_heads, seq_len, d_k]
        return x.view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)
    
    def forward(self, x, mask=None):
        batch_size, seq_len, _ = x.shape
        
        # Project and split heads
        Q = self.split_heads(self.W_q(x))
        K = self.split_heads(self.W_k(x))
        V = self.split_heads(self.W_v(x))
        
        # Scaled dot-product attention
        scores = torch.matmul(Q, K.transpose(-2, -1)) / (self.d_k ** 0.5)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        
        attention_weights = torch.softmax(scores, dim=-1)
        attention_weights = self.dropout(attention_weights)
        
        # Apply attention to values
        attention_output = torch.matmul(attention_weights, V)
        
        # Concatenate heads
        attention_output = attention_output.transpose(1, 2).contiguous()
        attention_output = attention_output.view(batch_size, seq_len, self.d_model)
        
        # Final projection
        return self.W_o(attention_output), attention_weights
```

**Why multiple heads?** Each head learns different relationships:
- Syntactic dependencies (subject-verb)
- Semantic relationships (synonyms, antonyms)
- Positional patterns (previous word, next word)
- Long-range dependencies (pronouns to antecedents)

### Feed-Forward Networks

After attention, each position goes through a position-wise FFN:

```python
class FeedForward(nn.Module):
    def __init__(self, d_model, d_ff, dropout=0.1):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.linear2 = nn.Linear(d_ff, d_model)
        self.dropout = nn.Dropout(dropout)
        self.activation = nn.GELU()  # Modern models use GELU
    
    def forward(self, x):
        # FFN(x) = Linear2(GELU(Linear1(x)))
        return self.linear2(self.dropout(self.activation(self.linear1(x))))
```

**Typical dimensions:**
- `d_model = 768` (GPT-2 small)
- `d_ff = 3072` (4x expansion)
- `d_model = 12288` (GPT-4, estimated)

### Layer Normalization and Residuals

Critical for training deep networks:

```python
class TransformerBlock(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        
        self.attention = MultiHeadAttention(d_model, num_heads, dropout)
        self.feed_forward = FeedForward(d_model, d_ff, dropout)
        
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)
    
    def forward(self, x, mask=None):
        # Pre-norm architecture (modern approach)
        # Attention with residual
        normed = self.norm1(x)
        attention_output, _ = self.attention(normed, mask)
        x = x + self.dropout1(attention_output)
        
        # FFN with residual
        normed = self.norm2(x)
        ffn_output = self.feed_forward(normed)
        x = x + self.dropout2(ffn_output)
        
        return x
```

**Pre-norm vs Post-norm:**
- Post-norm: `LayerNorm(x + Sublayer(x))` (original paper)
- Pre-norm: `x + Sublayer(LayerNorm(x))` (modern, more stable)

### Complete GPT-Style Model

```python
class GPTModel(nn.Module):
    def __init__(self, vocab_size, d_model, num_heads, d_ff, num_layers, max_len, dropout=0.1):
        super().__init__()
        
        self.token_embedding = InputEmbedding(vocab_size, d_model)
        self.pos_embedding = LearnedPositionalEmbedding(max_len, d_model)
        
        self.blocks = nn.ModuleList([
            TransformerBlock(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])
        
        self.ln_f = nn.LayerNorm(d_model)
        self.lm_head = nn.Linear(d_model, vocab_size, bias=False)
        
        # Tie weights (embedding and output share weights)
        self.lm_head.weight = self.token_embedding.embedding.weight
        
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, tokens, mask=None):
        # Embed tokens and add positions
        x = self.token_embedding(tokens)
        x = self.pos_embedding(x)
        x = self.dropout(x)
        
        # Apply transformer blocks
        for block in self.blocks:
            x = block(x, mask)
        
        # Final layer norm
        x = self.ln_f(x)
        
        # Project to vocabulary
        logits = self.lm_head(x)
        
        return logits

# Example: GPT-2 Small dimensions
model = GPTModel(
    vocab_size=50257,
    d_model=768,
    num_heads=12,
    d_ff=3072,
    num_layers=12,
    max_len=1024,
    dropout=0.1
)

print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")
# Output: ~117M parameters
```

## Training: Next Token Prediction

LLMs are trained to predict the next token given all previous tokens.

```python
def train_step(model, batch, optimizer):
    # batch: [batch_size, seq_len]
    input_tokens = batch[:, :-1]   # All except last
    target_tokens = batch[:, 1:]   # All except first
    
    # Forward pass
    logits = model(input_tokens)
    
    # Compute loss
    loss = F.cross_entropy(
        logits.reshape(-1, logits.size(-1)),
        target_tokens.reshape(-1),
        ignore_index=-100  # Ignore padding
    )
    
    # Backward pass
    optimizer.zero_grad()
    loss.backward()
    
    # Gradient clipping (prevents exploding gradients)
    torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
    
    optimizer.step()
    
    return loss.item()
```

### Loss Function Explained

Cross-entropy loss for language modeling:

```python
# Manual cross-entropy calculation
def manual_cross_entropy(logits, targets):
    # logits: [batch*seq_len, vocab_size]
    # targets: [batch*seq_len]
    
    # Get probabilities
    probs = F.softmax(logits, dim=-1)
    
    # Get target probabilities
    target_probs = probs[range(len(targets)), targets]
    
    # Negative log likelihood
    loss = -torch.log(target_probs).mean()
    
    return loss
```

The model learns to assign high probability to the actual next token.

## Inference: Text Generation

### Autoregressive Generation

```python
@torch.no_grad()
def generate(model, prompt_tokens, max_new_tokens=50, temperature=1.0):
    model.eval()
    tokens = prompt_tokens.clone()
    
    for _ in range(max_new_tokens):
        # Get predictions for last position
        logits = model(tokens)
        next_token_logits = logits[:, -1, :] / temperature
        
        # Sample next token
        probs = F.softmax(next_token_logits, dim=-1)
        next_token = torch.multinomial(probs, num_samples=1)
        
        # Append to sequence
        tokens = torch.cat([tokens, next_token], dim=1)
        
        # Check for EOS token
        if next_token.item() == EOS_TOKEN_ID:
            break
        
        # Truncate if exceeds max context
        if tokens.size(1) > MAX_CONTEXT_LENGTH:
            tokens = tokens[:, -MAX_CONTEXT_LENGTH:]
    
    return tokens
```

### Sampling Strategies

**Temperature sampling:**
```python
def temperature_sample(logits, temperature=1.0):
    if temperature == 0:
        return torch.argmax(logits, dim=-1)
    
    logits = logits / temperature
    probs = F.softmax(logits, dim=-1)
    return torch.multinomial(probs, num_samples=1)
```

**Top-k sampling:**
```python
def top_k_sample(logits, k=50, temperature=1.0):
    logits = logits / temperature
    top_k_logits, top_k_indices = torch.topk(logits, k)
    probs = F.softmax(top_k_logits, dim=-1)
    sampled = torch.multinomial(probs, num_samples=1)
    return top_k_indices.gather(-1, sampled)
```

**Top-p (nucleus) sampling:**
```python
def top_p_sample(logits, p=0.9, temperature=1.0):
    logits = logits / temperature
    probs = F.softmax(logits, dim=-1)
    
    # Sort probabilities
    sorted_probs, sorted_indices = torch.sort(probs, descending=True)
    cumulative_probs = torch.cumsum(sorted_probs, dim=-1)
    
    # Remove tokens with cumulative probability above threshold
    sorted_indices_to_remove = cumulative_probs > p
    sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
    sorted_indices_to_remove[..., 0] = 0
    
    indices_to_remove = sorted_indices_to_remove.scatter(
        -1, sorted_indices, sorted_indices_to_remove
    )
    logits[indices_to_remove] = -float('inf')
    
    probs = F.softmax(logits, dim=-1)
    return torch.multinomial(probs, num_samples=1)
```

### KV-Cache Optimization

Naive generation recomputes attention for all previous tokens every step. **KV-caching** stores past keys and values:

```python
class GPTWithCache(nn.Module):
    def forward(self, tokens, past_kv_cache=None):
        if past_kv_cache is None:
            # First forward pass - compute everything
            x = self.embed(tokens)
            kv_cache = []
            
            for block in self.blocks:
                x, kv = block(x, use_cache=True)
                kv_cache.append(kv)
            
            return x, kv_cache
        else:
            # Use cached K,V for previous tokens
            # Only compute for new token
            x = self.embed(tokens[:, -1:])
            new_kv_cache = []
            
            for block, past_kv in zip(self.blocks, past_kv_cache):
                x, kv = block(x, past_kv=past_kv, use_cache=True)
                new_kv_cache.append(kv)
            
            return x, new_kv_cache

# Generation with cache
def generate_with_cache(model, prompt_tokens, max_new_tokens=50):
    tokens = prompt_tokens
    past_kv = None
    
    for _ in range(max_new_tokens):
        logits, past_kv = model(tokens, past_kv_cache=past_kv)
        next_token = sample(logits[:, -1, :])
        tokens = torch.cat([tokens, next_token], dim=1)
    
    return tokens
```

**Speedup:** O(n²) → O(n) for generation of n tokens

## Scaling Laws

Model performance scales predictably with three factors:

**Chinchilla scaling laws:**
```
Loss ∝ (Compute)^(-α)

Optimal: N_params ≈ 20 × N_tokens

For 1T tokens: ~50B parameters
For 10T tokens: ~500B parameters
```

**GPT-4 implications:**
- Estimated 1.7T parameters
- Trained on ~13T tokens (rumored)
- Cost: ~$100M in compute

## What's Next?

You now understand the technical foundation: tokenization converts text to integers, transformers process sequences through attention and feed-forward layers, training optimizes next-token prediction, and inference generates text autoregressively with various sampling strategies.

But knowing how LLMs work doesn't mean you can make them work reliably. In **"How to Make LLMs Work"**, we'll cover:
- Prompt engineering that actually works
- When to fine-tune vs use RAG
- Building reliable chains and agents
- Handling failures and fallbacks
- Testing and evaluation strategies

The practical implementation guide awaits in Part 2.

