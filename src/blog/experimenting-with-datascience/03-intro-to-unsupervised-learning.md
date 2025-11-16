---
title: "Intro to Unsupervised Learning"
date: 2022-06-01
description: Exploring unsupervised learning techniques - from K-means clustering to find natural groupings, to PCA and SVD for dimensionality reduction and feature extraction.
categories: ["Experimenting With Data Science"]
tags: ['machine-learning', 'datascience']
---

Welcome to Part 3 of our machine learning journey! So far, we've explored supervised learning where our algorithms learn from labeled data. But what happens when we don't have labels? How do we discover hidden structures, find natural groupings, or simplify complex data?

This is the realm of **unsupervised learning**—where algorithms find patterns without explicit guidance. In this article, we'll explore clustering algorithms that discover natural groupings and dimensionality reduction techniques that extract the essence from high-dimensional data. Let's dive in!

## K-Means Clustering

**K-means clustering** partitions data into k clusters by minimizing within-cluster distances. It's like organizing a messy room by grouping similar items together—without anyone telling you what the groups should be!

### Algorithm Components

**Centroids** represent cluster centers in n-dimensional space. Think of them as the "average" point for each cluster.

**Inertia** measures total distances between points and their assigned centroids. Lower inertia means tighter, more compact clusters.

### The K-Means Algorithm

The algorithm follows a simple iterative process:

1. **Initialize**: Randomly place k centroids
2. **Assign**: Assign each point to its nearest centroid
3. **Update**: Move each centroid to the mean of its assigned points
4. **Repeat**: Continue steps 2-3 until convergence

```python
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# K-means implementation
kmeans = KMeans(n_clusters=3, random_state=42)
cluster_labels = kmeans.fit_predict(X)
centroids = kmeans.cluster_centers_

# Visualize clusters (for 2D data)
plt.figure(figsize=(10, 8))
scatter = plt.scatter(X[:, 0], X[:, 1], c=cluster_labels, cmap='viridis')
plt.scatter(centroids[:, 0], centroids[:, 1], 
           marker='x', s=300, c='red', linewidth=3, label='Centroids')
plt.title('K-Means Clustering')
plt.colorbar(scatter)
plt.legend()
plt.show()
```

### Optimization Challenges

**Local optima** represent suboptimal solutions in non-convex optimization landscapes. K-means can get stuck in local optima depending on initial centroid placement.

**Non-convex functions** have multiple zero-slope instances, making global optimization challenging.

This is why running K-means multiple times with different initializations is common practice:

```python
# Run multiple times to avoid local optima
kmeans = KMeans(n_clusters=3, n_init=10, random_state=42)
```

### Choosing Optimal K

How many clusters should you use? This is often the trickiest question!

**Elbow method** identifies optimal k values by finding plot elbows in k vs inertia graphs. Look for the "elbow" where adding more clusters doesn't significantly reduce inertia.

**Silhouette method** considers inter-cluster and intra-cluster distance ratios for k selection. Silhouette scores range from -1 to 1:
- Near +1: Point is well matched to its cluster
- Near 0: Point is on the border between clusters  
- Near -1: Point might be in the wrong cluster

```python
from sklearn.metrics import silhouette_score

# Elbow method
inertias = []
silhouette_scores = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    cluster_labels = kmeans.fit_predict(X)
    inertias.append(kmeans.inertia_)
    silhouette_scores.append(silhouette_score(X, cluster_labels))

# Plot results
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 5))

ax1.plot(k_range, inertias, 'bo-')
ax1.set_title('Elbow Method')
ax1.set_xlabel('Number of Clusters (k)')
ax1.set_ylabel('Inertia')
ax1.axvline(x=3, color='r', linestyle='--', label='Optimal k')

ax2.plot(k_range, silhouette_scores, 'ro-')
ax2.set_title('Silhouette Method')
ax2.set_xlabel('Number of Clusters (k)')
ax2.set_ylabel('Silhouette Score')
ax2.axvline(x=3, color='r', linestyle='--', label='Optimal k')

plt.tight_layout()
plt.show()
```

### Advanced Clustering Techniques

**K-means++** uses weighted probability distributions for better initial centroid placement. This dramatically improves convergence and final cluster quality.

```python
# K-means++ initialization (default in sklearn)
kmeans = KMeans(n_clusters=3, init='k-means++')
```

**Agglomerative clustering** builds cluster hierarchies from bottom-up, gradually grouping subclusters. It creates a dendrogram showing the merging process:

```python
from scipy.cluster.hierarchy import dendrogram, linkage

# Hierarchical clustering
linkage_matrix = linkage(X, method='ward')

plt.figure(figsize=(12, 8))
dendrogram(linkage_matrix)
plt.title('Hierarchical Clustering Dendrogram')
plt.xlabel('Sample Index')
plt.ylabel('Distance')
plt.show()
```

**DBSCAN** (Density-Based Spatial Clustering) finds clusters of arbitrary shape and can identify outliers:

```python
from sklearn.cluster import DBSCAN

# DBSCAN doesn't require specifying k!
dbscan = DBSCAN(eps=0.5, min_samples=5)
cluster_labels = dbscan.fit_predict(X)
```

### Real-World Applications

- **Customer Segmentation**: Group customers by purchasing behavior
- **Image Compression**: Reduce colors by clustering similar pixels
- **Anomaly Detection**: Identify outliers as points far from any cluster
- **Document Organization**: Group similar documents together
- **Genomics**: Cluster genes with similar expression patterns

## Dimensionality Reduction

High-dimensional data is everywhere—images with millions of pixels, genomic data with thousands of genes, text with vast vocabularies. But curse of dimensionality is real! Let's tackle it with dimensionality reduction.

### Why Reduce Dimensions?

1. **Visualization**: Can't visualize 1000 dimensions, but can visualize 2 or 3
2. **Speed**: Fewer features mean faster training
3. **Storage**: Less data to store
4. **Noise Reduction**: Remove less informative features
5. **Avoid Overfitting**: Fewer features reduce model complexity

### Singular Value Decomposition

**Singular Value Decomposition (SVD)** decomposes matrices into rotation and scaling components, generalizing eigendecomposition.

The key idea: any matrix M can be decomposed as:
```
M = U × Σ × V^T
```

Where:
- U and V are rotation matrices
- Σ is a diagonal matrix of singular values

**Rank r approximation** uses up to the rth terms in SVD to approximate original matrices. This is the mathematical foundation of compression!

**Dimensionality reduction** decreases feature numbers to speed up training and enable broader algorithm applicability.

```python
from sklearn.decomposition import PCA, TruncatedSVD
import numpy as np

# SVD for dimensionality reduction
svd = TruncatedSVD(n_components=2, random_state=42)
X_reduced = svd.fit_transform(X)

# Explained variance ratio
explained_variance = svd.explained_variance_ratio_
print(f"Explained variance: {explained_variance}")
print(f"Total explained variance: {np.sum(explained_variance):.3f}")

# Visualize reduced data
plt.figure(figsize=(10, 8))
plt.scatter(X_reduced[:, 0], X_reduced[:, 1], alpha=0.5)
plt.title('Data Reduced to 2D via SVD')
plt.xlabel('First Component')
plt.ylabel('Second Component')
plt.show()
```

### Principal Component Analysis

**Eigendecomposition** factors square matrices into eigenvalues and eigenvectors. For a matrix A:
```
A × v = λ × v
```

Where v is an eigenvector and λ is its eigenvalue.

**Principal Component Analysis (PCA)** performs eigendecomposition on data covariance matrices. Eigenvectors describe principal components while eigenvalues indicate variance explained by each component.

**Orthogonal** components are perpendicular in n-dimensional space, meaning they capture independent sources of variance.

The beauty of PCA is that it finds the directions of maximum variance:

1. **First PC**: Direction of maximum variance
2. **Second PC**: Direction of maximum remaining variance (perpendicular to first)
3. **Third PC**: Direction of maximum remaining variance (perpendicular to first two)
4. And so on...

```python
# PCA implementation
pca = PCA(n_components=0.95)  # Keep 95% of variance
X_pca = pca.fit_transform(X)

# Analyze components
components = pca.components_
explained_variance_ratio = pca.explained_variance_ratio_

print(f"Original dimensions: {X.shape[1]}")
print(f"Reduced dimensions: {X_pca.shape[1]}")
print(f"Explained variance per component: {explained_variance_ratio}")

# Plot explained variance
plt.figure(figsize=(10, 6))
plt.bar(range(1, len(explained_variance_ratio) + 1), explained_variance_ratio)
plt.xlabel('Principal Component')
plt.ylabel('Explained Variance Ratio')
plt.title('Variance Explained by Each Principal Component')
plt.show()
```

### Understanding PCA Visually

Imagine you're photographing a pencil. If you photo from the side, you see its length (maximum variance). If you photo from the tip, you see just a dot (minimum variance). PCA finds these optimal "viewing angles" for your data!

### Feature Scaling for PCA

PCA is sensitive to feature scales. Always standardize first:

```python
from sklearn.preprocessing import StandardScaler

# Standardize before PCA
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Then apply PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
```

### Other Dimensionality Reduction Techniques

**t-SNE** (t-Distributed Stochastic Neighbor Embedding) excels at visualization but is slow and not deterministic:

```python
from sklearn.manifold import TSNE

# t-SNE for visualization
tsne = TSNE(n_components=2, random_state=42)
X_tsne = tsne.fit_transform(X)

plt.figure(figsize=(10, 8))
plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y, cmap='viridis')
plt.title('t-SNE Visualization')
plt.colorbar()
plt.show()
```

**UMAP** (Uniform Manifold Approximation and Projection) is faster than t-SNE and preserves global structure better:

```python
import umap

# UMAP for visualization
reducer = umap.UMAP(n_components=2, random_state=42)
X_umap = reducer.fit_transform(X)
```

**Autoencoders** use neural networks for non-linear dimensionality reduction. We'll cover these in the next article on deep learning!

### Practical Tips

1. **Always visualize**: Plot explained variance to choose number of components
2. **Standardize features**: Especially important for PCA
3. **Use domain knowledge**: Sometimes manual feature selection beats automated reduction
4. **Test impact**: Measure how dimensionality reduction affects downstream task performance
5. **Consider interpretability**: PCA components are linear combinations—can you interpret them?

---

## What's Next?

We've explored the fascinating world of unsupervised learning—using K-means to discover natural clusters, applying PCA to extract essential features, and understanding how to work with high-dimensional data without labels guiding us.

But we're about to enter the most exciting territory: **deep learning**. How do neural networks actually work? What makes CNNs so good at image recognition? How do RNNs handle sequential data? And what's the deal with GANs generating realistic images?

In the next article, **"Deep Learning: Neural Networks and Beyond"**, we'll build neural networks from scratch, explore convolutional architectures for computer vision, discover recurrent networks for sequences, and peek into the generative world of GANs. This is where machine learning becomes truly powerful and creative!

The deep learning revolution awaits in Part 4!

