---
title: "Experimenting with ML"
author: ahampriyanshu
categories: [Experiments]
excerpt: Experimenting with ML
tags: [experiments, ml]
---

## Machine Learning Glossary

> This page is a quick reference for common machine-learning terms and ideas. Keep it handy and feel free to jump to the part you need.

### 1. Essentials
#### Data
- **Feature** – a measurable property (numeric, categorical, binary, …).
- **Label / Target** – the value we try to predict. Present only in supervised learning.
- **Example / Instance** – one row of data: a feature vector and, optionally, a label.
- **Dimension** – the number of features in an example.
- **Dataset split** – train / validation / test subsets.

#### Maths Shortlist
- **Probability \(P(A)\)** – chance that event \(A\) happens.
- **Bayes’ theorem**  
  \[P(C \mid x)=\frac{P(x \mid C)\,P(C)}{P(x)}\]
- **Derivative / Gradient** – rate of change; used for optimisation.
- **Mean Squared Error**  
  \[{\rm MSE} = \frac{1}{n}\sum_{i=1}^{n}(y_i-\hat{y}_i)^2\]

### 2. Learning Paradigms
#### Supervised Learning
Goal: map features to known labels.

**Typical tasks**
| Task | Label type | Example |
|------|------------|---------|
| Classification | discrete | spam vs ham |
| Regression | continuous | house price |
| Ranking | ordered list | search results |

#### Unsupervised Learning
Discover structure in unlabelled data (clustering, dimensionality reduction, association rules…).

#### Reinforcement Learning *(out of scope here)*
Learn by interacting with an environment and receiving rewards.

### 3. Algorithms at a Glance
#### Probabilistic
- **Naïve Bayes** – assumes independent features; fast baseline.

```python
from sklearn.naive_bayes import MultinomialNB
clf = MultinomialNB().fit(X_train, y_train)
```

#### Linear Models
- **Linear Regression** – fits a line/plane:  \(\hat{y} = \mathbf{w}^\top\mathbf{x} + b\)
- **Logistic Regression** – classification via the sigmoid  
  \[\sigma(z)=\frac{1}{1+e^{-z}}\]

```python
proba = 1/(1+np.exp(-(w @ x + b)))
```

#### Trees & Ensembles
- **Decision Tree** – recursive if-else splits (CART).
- **Random Forest** – bagging of many decision trees.
- **Gradient Boosting / XGBoost / LightGBM** – sequentially correct previous errors.

#### Distance-Based
- **k-Nearest Neighbours (kNN)** – majority vote of the closest points.
- **Support Vector Machine (SVM)** – maximise the margin between classes; kernel trick for non-linear data.

#### Clustering
- **k-Means / k-Means++** – assign points to the nearest centroid.
- **Agglomerative Clustering** – bottom-up hierarchical clustering.

#### Dimensionality Reduction
- **PCA / SVD** – project data to orthogonal axes of maximum variance.
- **t-SNE / UMAP** – non-linear visualisation of high-dimensional data.

### 4. Deep Learning Quick Tour
| Term | One-liner |
|------|-----------|
| Neuron | computes \(a = \sigma(w^\top x + b)\) |
| Forward pass | compute outputs layer by layer |
| Back-propagation | propagate gradients to update weights |
| Optimiser | SGD, Adam, RMSProp… \( \theta \leftarrow \theta - \eta \nabla J\) |
| CNN | handles images via convolutions & pooling |
| RNN / LSTM / GRU | handles sequences, keeps hidden state |
| GAN | generator vs discriminator in a minimax game |

> **Tip**: start with a small network and verify it can overfit a tiny subset to debug the pipeline.

### 5. Evaluation & Tuning
- **Accuracy** = (TP+TN) / total
- **Precision** = TP / (TP+FP)
- **Recall (Sensitivity)** = TP / (TP+FN)
- **F1 Score** = harmonic mean of precision & recall
- **ROC curve & AUC** – threshold-independent metric  
- **Confusion Matrix** – 2×2 table for binary classification
- **Cross-Validation** – robust estimate via repeated train/val splits
- **Hyperparameters** – values not learned (depth, learning-rate, k…); tune via grid/random/Bayesian search.
- **Regularisation** – L1/L2 penalties, dropout, early stopping; fights overfitting.

### 6. Recommender Systems & Ranking
- **Content-Based Filtering** – recommend items similar to what the user liked.
- **Collaborative Filtering** – leverage behaviour of similar users/items (matrix factorisation).
- **Learning-to-Rank** – train model to order a candidate list; metrics: NDCG, MAP, MRR.
- **Cold-Start** – new user/item, solved with side-features or hybrid methods.

### 7. Useful Code Patterns
```python
# Mini-batch gradient descent skeleton
for epoch in range(EPOCHS):
    for X_batch, y_batch in dl:
        y_pred = model(X_batch)
        loss = criterion(y_pred, y_batch)
        loss.backward()
        optim.step()
        optim.zero_grad()
```

```python
# Sklearn pipeline with scaling + model
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

clf = make_pipeline(StandardScaler(),
                    LogisticRegression(max_iter=1000))
clf.fit(X_train, y_train)
```

### 8. Further Reading
- “Hands-On ML with Scikit-Learn, Keras & TensorFlow” – Aurélien Géron  
- Andrew Ng’s ML & DL courses  
- scikit-learn, keras & pytorch documentation

