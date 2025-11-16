---
title: "Intro to Supervised Learning"
date: 2022-06-01
description: Exploring powerful supervised learning algorithms - decision trees and ensemble methods, linear and logistic regression, and support vector machines for optimal classification boundaries.
categories: ["Experimenting With Data Science"]
tags: ['machine-learning', 'datascience']
---

Welcome back to our machine learning series! In Part 1, we built the foundation with classical algorithms like Naive Bayes and KNN. Now we're ready to explore more sophisticated techniques that power many production systems today.

In this article, we'll dive into decision trees and their powerful ensemble variants, understand how to model relationships with regression, and discover how Support Vector Machines find optimal decision boundaries. These algorithms represent a significant leap in modeling capability while remaining interpretable and efficient.

## Decision Trees

**Decision trees** create tree-based models that route examples to leaf nodes based on feature properties. They're like playing a game of "Twenty Questions" to classify data.

### Tree Construction

**CART (Classification and Regression Trees)** algorithms construct approximately optimal decision trees for given datasets.

**Split points** consist of feature-value pairs determining how examples flow through tree nodes.

**Gini impurity** measures node impurity for classification trees, helping identify optimal split points based on classification error probability.

**Mean squared error** serves as the splitting criterion for regression trees.

```python
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Train decision tree
tree_model = DecisionTreeClassifier(max_depth=3, random_state=42)
tree_model.fit(X_train, y_train)

# Visualize tree
plt.figure(figsize=(15, 10))
plot_tree(tree_model, feature_names=feature_names, 
          class_names=class_names, filled=True)
plt.show()
```

### Understanding Splits

The algorithm asks: "Which feature and threshold best separate my data?" It evaluates every possible split using Gini impurity or information gain:

```
Gini Impurity = 1 - Σ(p_i)²
```

Where p_i is the probability of class i. A Gini of 0 means perfect purity (all samples belong to one class).

### Handling Missing Data

**Missing data** occurs when feature values are unavailable for some examples.

**Surrogate splits** provide backup split criteria for examples missing optimal split features. This is a clever technique: if the primary split uses "age" but age is missing, the tree can use a correlated feature like "years of experience" instead.

### Ensemble Methods

**Ensemble** techniques combine multiple models for improved performance. Think of it as consulting multiple experts instead of just one.

**Boosting** trains weak learners sequentially, with each learning from previous errors, typically reducing bias. It's like studying your mistakes to improve on the next test.

**Bagging (Bootstrap Aggregation)** trains models on data subsets, generally reducing variance. It's like taking multiple polls with different sample groups and averaging the results.

**Random Forest** combines many independent weak learners to reduce variance. Each tree sees a random subset of features and data.

**Weak learners** are typically shallow decision trees or other underfitting models.

```python
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

# Random Forest
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Gradient Boosting
gb_model = GradientBoostingClassifier(n_estimators=100, random_state=42)
gb_model.fit(X_train, y_train)

# Feature importance
feature_importance = rf_model.feature_importances_
for name, importance in zip(feature_names, feature_importance):
    print(f"{name}: {importance:.3f}")
```

**XGBoost** and **LightGBM** provide optimized gradient boosting frameworks with enhanced performance and efficiency. They're the go-to algorithms for winning Kaggle competitions!

### When to Use Decision Trees

**Pros:**
- Highly interpretable
- Handle non-linear relationships
- Require minimal data preprocessing
- Handle mixed data types naturally

**Cons:**
- Prone to overfitting (without ensembles)
- Unstable (small data changes → big tree changes)
- Can't extrapolate beyond training data range

## Linear Regression

**Linear regression** finds the **line of best fit** describing relationships between dependent and independent variables. It's one of the oldest and most fundamental techniques in statistics and ML.

### The Linear Model

The goal is finding the equation: `y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ`

Where:
- y is the dependent variable (target)
- x₁, x₂, ..., xₙ are independent variables (features)
- β₀ is the intercept (bias)
- β₁, β₂, ..., βₙ are coefficients (weights)

### Statistical Concepts

**Correlation** measures relationships between dependent and independent variables.

**R-squared (coefficient of determination)** indicates the percentage of variance explained by independent variables. An R² of 0.85 means 85% of variance in y is explained by x.

**Residuals** represent distances between actual data points and the fitted line.

**P-values** show the probability of obtaining results given a null hypothesis. Typically, p < 0.05 indicates statistical significance.

**Confidence intervals** provide ranges for unknown values with specified probability levels.

```python
import statsmodels.api as sm
import numpy as np

# Linear regression with statsmodels
X_with_intercept = sm.add_constant(X)  # Add intercept term
model = sm.OLS(y, X_with_intercept)
results = model.fit()

# Display detailed statistics
print(results.summary())

# Extract key metrics
r_squared = results.rsquared
p_values = results.pvalues
confidence_intervals = results.conf_int()
```

### Advanced Regression Concepts

**Independent variables** have variation independent from other variables.

**Dependent variables** have variation depending on other variables.

**One-hot encoding** represents categorical variables as binary vectors. For example, ["red", "blue", "green"] becomes three binary features.

**Multicollinearity** occurs when independent variables aren't actually independent. This is problematic because it makes coefficient interpretation unreliable.

**Variance Inflation Factor (VIF)** measures multicollinearity levels. VIF > 5 or 10 typically indicates problematic multicollinearity.

**Feature interactions** multiply features together to express relationships not captured by simple addition:
```python
# Create interaction term
X['age_income'] = X['age'] * X['income']
```

**Nonlinear regression** models non-linear relationships in independent variables through polynomial features:
```python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)
```

**Simpson's Paradox** describes patterns emerging in data segments that disappear when segments are combined. Always be careful when aggregating data!

## Logistic Regression

**Logistic regression** extends linear concepts to classification problems with limited outcome numbers. Despite the name, it's a classification algorithm!

### Core Components

**Sigmoid function** (logistic function) transforms any real number to a value between 0 and 1, perfect for probability estimation.

```python
import numpy as np
import matplotlib.pyplot as plt

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Plot sigmoid function
x = np.linspace(-10, 10, 100)
y = sigmoid(x)

plt.figure(figsize=(8, 6))
plt.plot(x, y)
plt.title('Sigmoid Function')
plt.xlabel('Input')
plt.ylabel('Output (Probability)')
plt.axhline(y=0.5, color='r', linestyle='--', label='Decision boundary')
plt.grid(True)
plt.legend()
plt.show()
```

The sigmoid squashes the linear output into [0, 1], allowing us to interpret it as probability.

**Cross-entropy loss** serves as the optimization objective for classification tasks, measuring differences between predicted and true label distributions:

```
Loss = -[y log(p) + (1-y) log(1-p)]
```

### Training Process

Unlike linear regression's **closed-form solution**, logistic regression requires iterative optimization.

**Gradient descent** optimizes parameters through iterative updates using loss function gradients.

**Learning rate** controls update step sizes during parameter optimization.

**Parameters** (weights/coefficients) are learned during training.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import log_loss

# Logistic regression implementation
log_reg = LogisticRegression(max_iter=1000)
log_reg.fit(X_train, y_train)

# Probability predictions
probabilities = log_reg.predict_proba(X_test)
predictions = log_reg.predict(X_test)

# Calculate cross-entropy loss
loss = log_loss(y_test, probabilities)
print(f"Cross-entropy loss: {loss:.4f}")
```

### Advanced Concepts

**Odds ratios** measure association degrees between events. Values of 1 indicate independence, greater than 1 indicate positive correlation, less than 1 indicate negative correlation.

**Multinomial logistic regression** extends binary classification to multiple classes.

**Softmax** generalizes sigmoid functions for multi-class scenarios:

```python
def softmax(x):
    exp_x = np.exp(x - np.max(x))  # Subtract max for numerical stability
    return exp_x / exp_x.sum(axis=0)
```

### Training Optimization

**Epochs** represent complete training cycles through all examples.

**Gradient descent variants**:
- **Batch**: Uses all examples per iteration (slow but stable)
- **Mini-batch**: Uses example subsets per iteration (good balance)
- **Stochastic**: Uses single examples per iteration (fast but noisy)

**Regularization** prevents overfitting by encouraging smaller parameter values:
- **L1 (Lasso)**: Encourages sparsity, some weights become exactly 0
- **L2 (Ridge)**: Encourages small weights, all weights shrink

**Early stopping** halts training before reaching optima to prevent overfitting.

### Class Imbalance Handling

**Downsampling** removes majority class examples.

**Upweighting** increases minority class impact on loss functions.

```python
# Handle imbalanced classes
log_reg = LogisticRegression(class_weight='balanced')
log_reg.fit(X_train, y_train)
```

**McFadden's Pseudo R-squared** provides an analog to linear regression's R-squared for logistic models.

### Model Types

**Generative models** approximate joint probability distributions of features and labels P(X,Y).

**Discriminative models** approximate conditional probability distributions of labels given features P(Y|X). Logistic regression is discriminative.

## Support Vector Machines

**Support Vector Machines (SVMs)** find optimal decision boundaries by maximizing margins between classes. They're geometric in nature and beautifully elegant.

### Core Concepts

**Support vectors** are the most difficult-to-separate points that influence decision boundary placement. Only these points matter—everything else could be removed without changing the boundary!

**Margins** represent spaces between hyperplanes and support vectors. SVMs maximize this margin.

**Hyperplanes** serve as decision boundaries in any dimension. In 2D it's a line, in 3D it's a plane, in higher dimensions it's a hyperplane.

**Norms** (specifically L2 norm) calculate vector magnitudes as square roots of squared element sums.

```python
from sklearn.svm import SVC
import numpy as np

# SVM implementation
svm_model = SVC(kernel='rbf', C=1.0, gamma='scale')
svm_model.fit(X_train, y_train)

# Get support vectors
support_vectors = svm_model.support_vectors_
n_support = svm_model.n_support_

print(f"Number of support vectors: {len(support_vectors)}")
print(f"Support vectors per class: {n_support}")
```

### Soft Margin SVMs

Real-world data isn't perfectly separable. Enter soft margins!

**Outliers** significantly vary from other features and can disrupt decision boundaries.

**Slack** allows relaxation of margin constraints, creating soft-margin SVMs. The C parameter controls the trade-off between margin width and classification errors.

**Hinge loss** functions are used by soft-margin SVMs for optimization:
```
Loss = max(0, 1 - y·f(x))
```

### Advanced Topics

**Sub-gradients** handle gradients of non-differentiable functions like hinge loss.

**Non-differentiable functions** have points where derivatives are undefined.

**Convex functions** have single optima, ensuring global optimization. SVMs benefit from convex optimization.

**Kernel trick** enables high-dimensional computations without explicit high-dimensional representations. This is magical—it lets us work in infinite dimensions without actually computing them!

**Radial Basis Function (RBF) kernels** are commonly used:
```python
# RBF kernel measures "similarity"
svm_rbf = SVC(kernel='rbf', gamma=0.1)

# Other kernels
svm_poly = SVC(kernel='poly', degree=3)
svm_linear = SVC(kernel='linear')
```

### When to Use SVMs

**Pros:**
- Effective in high dimensions
- Memory efficient (only stores support vectors)
- Versatile (different kernel functions)
- Works well with clear margin of separation

**Cons:**
- Slow for large datasets
- Sensitive to feature scaling
- Difficult to interpret
- Requires careful parameter tuning

---

## What's Next?

We've now explored supervised learning's power tools—decision trees that ask smart questions, linear models that find relationships, logistic regression that predicts probabilities, and SVMs that find optimal boundaries. These algorithms can tackle a vast array of classification and regression problems.

But what happens when we don't have labels? How do we discover hidden structures in data? How can we reduce hundreds of features down to just a few meaningful dimensions?

In the next article, **"Unsupervised Learning and Dimensionality Reduction"**, we'll explore K-means clustering for finding natural groupings, PCA and SVD for dimensionality reduction, and techniques for discovering structure in unlabeled data. This is where machine learning gets truly exploratory!

The journey into unsupervised territory awaits in Part 3!

