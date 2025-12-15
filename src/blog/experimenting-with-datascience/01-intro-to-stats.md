---
title: "Intro to Basics"
date: 2022-06-01
description: A comprehensive introduction to machine learning fundamentals - from understanding features and labels to implementing Naive Bayes and K-Nearest Neighbors with performance evaluation techniques.
categories: ["Experimenting With Data Science"]
tags: ['machine-learning', 'datascience']

---

Machine learning has transformed from an academic curiosity into the driving force behind modern technology. Over the past several weeks, I've been diving deep into this fascinating field, exploring everything from basic classification algorithms to sophisticated neural networks. This four-part series chronicles my learning journey and serves as a comprehensive reference for machine learning fundamentals.

In this first part, we'll build the foundation—understanding what machine learning really is, exploring the mathematical concepts that underpin it, and implementing our first classical algorithms. Let's start from the ground up!

## Machine Learning Fundamentals

### Understanding Machine Learning Paradigms

**Machine Learning** encompasses various approaches to building systems that learn patterns from data. At its core, it's about creating **models** - mathematical approximations of relationships between inputs and outputs.

#### Supervised Learning

**Supervised learning** focuses on optimizing models using previously observed features paired with known labels. The primary goal is predicting the most likely label for new, unseen features.

```python
# Basic supervised learning workflow
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Split data into features (X) and labels (y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
```

#### Unsupervised Learning

**Unsupervised learning** takes a different approach, working with unlabeled data to discover hidden patterns and structures. The goal is uncovering previously unknown insights from the data itself.

#### Deep Learning

**Deep learning** represents a specialized branch focusing on neural networks with multiple hidden layers. These systems can perform both supervised and unsupervised learning tasks with remarkable effectiveness.

### Core ML Concepts

#### Features and Labels

**Features** represent measurable properties or characteristics describing observations. They come in various forms:
- **Binary**: "day" vs "night"
- **Categorical**: "morning", "afternoon", "evening"  
- **Continuous**: numerical values like 3.141
- **Ordinal**: ordered categories like "threatened", "endangered", "extinct"

**Labels** are typically paired with features in supervised learning and can be either discrete (categories) or continuous (numerical values).

**Examples** consist of feature-label pairs used for training and evaluation.

#### Mathematical Foundations

**Vectors** represent feature collections as lists of values describing particular examples.

**Matrices** organize data as arrays with multiple rows and columns, while **matrix transpose** operations flip matrices over their diagonals.

**Dimensions** refer to the number of features associated with each example.

```python
import numpy as np

# Example feature vector
feature_vector = np.array([1.2, 0.8, 2.1, 0.5])

# Matrix representation
data_matrix = np.array([
    [1.2, 0.8, 2.1, 0.5],  # Example 1
    [0.9, 1.1, 1.8, 0.7],  # Example 2
    [1.5, 0.6, 2.3, 0.4]   # Example 3
])

# Matrix transpose
transposed = data_matrix.T
print(f"Original shape: {data_matrix.shape}")
print(f"Transposed shape: {transposed.shape}")
```

#### Probability and Statistics

**Probability** quantifies how likely events are to occur, whether independent (like dice rolls) or conditional (like drawing cards without replacement).

**Probability distributions** are functions that map outcomes to their occurrence probabilities.

**Gaussian (Normal) distributions** fit many real-world observations and appear frequently in machine learning applications.

**Uniform distributions** assign equal probability to all possible outcomes.

## Naive Bayes Classification

**Naive Bayes** algorithms provide probabilistic classification based on Bayes' theorem. Despite their "naive" assumption of feature independence, they often perform surprisingly well in practice.

### Core Components

**Prior probability** represents the likelihood of a particular class regardless of feature values.

**Likelihood** calculates the probability of observing certain features given a specific class.

**Posterior probability** combines prior and likelihood to determine the probability of a class given observed features.

**Evidence** serves as the normalizing denominator in Bayes' theorem.

The beauty of Bayes' theorem lies in its simplicity:

```
P(Class|Features) = P(Features|Class) × P(Class) / P(Features)
```

```python
# Naive Bayes implementation example
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

# Text classification example
texts = ["I love this movie", "This film is terrible", "Great acting here"]
labels = ["positive", "negative", "positive"]

# Vectorize text
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

# Train Naive Bayes
nb_model = MultinomialNB()
nb_model.fit(X, labels)

# Predict new text
new_text = ["This movie is amazing"]
new_X = vectorizer.transform(new_text)
prediction = nb_model.predict(new_X)
```

### Text Processing Techniques

**Tokenization** splits raw text into individual words or elements.

**Featurization** transforms raw inputs into formats suitable for model training and prediction.

**Vectorizers** convert tokenized text into numerical representations. Binary vectorizers create vectors indicating vocabulary word presence.

**Stop words** are commonly removed words that add little predictive value.

**Stemming** removes word endings to find root forms, while **lemmatization** provides a more sophisticated approach ensuring proper root words result.

**Bernoulli distribution** models binary outcomes, useful in text classification where words are either present or absent.

**Laplace smoothing** prevents zero probability issues by adding small values to all counts.

### Advanced Text Features

**TF-IDF (Term Frequency-Inverse Document Frequency)** transforms word counts into importance scores across document collections. It answers the question: "How important is this word to this document compared to all documents?"

```python
from sklearn.feature_extraction.text import TfidfVectorizer

# TF-IDF example
tfidf = TfidfVectorizer(max_features=100)
X_tfidf = tfidf.fit_transform(documents)
```

**N-grams** capture sequences of adjacent words of length n, preserving word order information.

**Feature hashing** represents text as hash results modded by predetermined values, enabling efficient storage.

## Performance Evaluation

### Classification Metrics

Understanding model performance requires sophisticated evaluation techniques beyond simple accuracy.

**Accuracy** measures the ratio of correct predictions to total predictions:
```
Accuracy = (True Positives + True Negatives) / Total Examples
```

**Confusion matrices** provide detailed breakdowns of prediction performance in 2x2 grids showing true positives, true negatives, false positives, and false negatives.

```python
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns
import matplotlib.pyplot as plt

# Create confusion matrix
cm = confusion_matrix(y_test, predictions)

# Visualize confusion matrix
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')
plt.ylabel('Actual')
plt.xlabel('Predicted')
plt.show()

# Detailed classification report
print(classification_report(y_test, predictions))
```

**Sensitivity (Recall)** measures the proportion of actual positives correctly identified.

**Specificity** calculates the proportion of actual negatives correctly identified.

**Precision** determines the accuracy of positive predictions:
```
Precision = True Positives / (True Positives + False Positives)
```

**F1 Score** provides the harmonic mean of precision and recall, offering a balanced metric.

### Advanced Evaluation

**ROC (Receiver Operating Characteristic) curves** plot sensitivity vs specificity across different decision thresholds.

**AUC (Area Under Curve)** represents the probability that a randomly chosen positive example scores higher than a randomly chosen negative example.

**Decision points** (thresholds) determine classification cutoffs - values above predict one class, below predict another.

### Model Validation

**Validation** involves holding out data portions for testing separate from training sets.

**Generalization** measures a model's ability to perform well on unseen data beyond the test set.

**Unbalanced classes** occur when one class appears much more frequently than others, requiring special handling techniques like:
- Oversampling minority class
- Undersampling majority class
- Using class weights
- Synthetic data generation (SMOTE)

## K-Nearest Neighbors

**K-Nearest Neighbors (KNN)** classifies examples based on the majority class among the k closest training examples. It's beautifully simple: "You are the average of your k closest neighbors."

### Distance Metrics

Different distance measures suit different data types:

**Euclidean distance** calculates straight-line distances between points in feature space.

**Manhattan distance** sums absolute differences across all features.

**Jaccard distance** handles binary features by comparing matching values while excluding matching zeros.

**Simple matching distance** considers all matching binary values including zeros.

**Hamming distance** counts non-matching categorical feature values.

```python
import numpy as np
from scipy.spatial.distance import euclidean, manhattan, hamming

# Example distance calculations
point1 = np.array([1, 2, 3])
point2 = np.array([4, 5, 6])

euclidean_dist = euclidean(point1, point2)
manhattan_dist = manhattan(point1, point2)

print(f"Euclidean distance: {euclidean_dist:.2f}")
print(f"Manhattan distance: {manhattan_dist:.2f}")
```

### Feature Scaling

**Feature normalization** scales values between 0 and 1, ensuring all features contribute equally.

**Feature standardization** centers features around their mean and scales by standard deviation.

```python
from sklearn.preprocessing import MinMaxScaler, StandardScaler

# Normalization (0-1 scaling)
normalizer = MinMaxScaler()
X_normalized = normalizer.fit_transform(X)

# Standardization (mean=0, std=1)
standardizer = StandardScaler()
X_standardized = standardizer.fit_transform(X)
```

### Choosing K

The choice of k significantly impacts model performance:
- **Small k (k=1)**: High variance, low bias, sensitive to noise
- **Large k**: Low variance, high bias, smoother decision boundaries
- **Rule of thumb**: k = √n where n is the number of training samples

---

## What's Next?

We've built a solid foundation—understanding ML paradigms, implementing Naive Bayes for probabilistic classification, exploring KNN for instance-based learning, and mastering performance evaluation metrics. These classical algorithms may seem simple, but they're powerful tools that remain relevant in modern ML pipelines.

But what about more sophisticated approaches? How do we handle non-linear decision boundaries? When should we use ensemble methods? How do we model continuous relationships between variables?

In the next article, **"Tree-Based and Linear Methods"**, we'll explore decision trees and their powerful ensemble variants (Random Forests, Gradient Boosting), dive into linear and logistic regression for modeling relationships, and discover Support Vector Machines for finding optimal decision boundaries. These algorithms form the backbone of many production ML systems.

The journey into more advanced techniques continues in Part 2!

