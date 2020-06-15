---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "VAEs and Importance Sampling"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2019-12-12T11:00:12Z
lastmod: 2019-12-12T11:00:12Z
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

$$
\DeclareMathOperator{\E}{\mathbb{E}}
$$

## Importance Sampling

We have a function $\phi(X)$ of a random variable $X$ and want to evaluate the expectation
$$
\E_{x\sim p}\left[\phi(x)\right].
$$

We can always trade the distribution $p$ for another distribution $q$ and write
$$
\E_{x\sim p}\left[\phi(x)\right] = \E_{x\sim q}\left[\frac{p(x)}{q(x)}\phi(x)\right].
$$

Why would we do this?

1. It may be that the function $\phi$ doesn’t lend itself to being averaged, perhaps because it has support on the tails of the distribution. In this case we could chose to sample from a distribution centred on the support of $\phi$.
2. Alternatively, it may be hard to draw samples from $p$, so we replace it with a distribution that is easy to sample from.

Having replaced the distribution, we can then approximate the expectation using a Monte Carlo estimator by drawing $N$ iid samples
$$
\begin{equation}\label{eq:mc}
\E_{x\sim p}\left[\phi(x)\right]\approx \frac{1}{k}\sum_{i=1}^k \frac{p(x_j)}{q(x_j)}\phi(x_j).
\end{equation}
$$
This is basic idea behind __importance sampling__.

How well can we do? Suppose that we could find (and draw samples from) a distribution which has the form
$$
q(x) = \mathcal{Z}^{-1}p(x)\phi(x)
$$
where $\mathcal{Z}$ is a normalizing constant. In this case 
$$
\frac{p(x)}{q(x)}\phi(x)=\mathcal{Z}.
$$
The $x$ dependence has vanished from the expectation, and a single sample suffices! Of course, this is a bit silly, because the normalization constant is just the quantity we are looking for
$$
\mathcal{Z}=\int p(x)\phi(x)\,dx =\E_{x\sim p}\left[\phi(x)\right].
$$
This does illustrate the point, however, that there is a notion of _optimality_ to importance sampling. To see how well we are doing, we could look at minimizing the variance of the estimator $\eqref{eq:mc}$. Alternatively, we could take another convex function like the negative logarithm. Thus
$$
-\frac{1}{k}\sum_{i=1}^k \log\left[\frac{p(x_j)}{q(x_j)}\phi(x_j)\right]
$$
achieves its minimum at optimality.

## Marginalizing over latent variables

We'll be interested in applying these ideas to a latent variable model in which the joint distribution of latent variables $z$ and observed variables $x$ has the form
$$
p(x,z)=p(z)p(x|z).
$$
To obtain the observed probability $p(x)$ we must marginalize over the latent variables
$$
p(x)=\E_{x\sim p}\left[p(x|z)\right].
$$
Applying importance sampling involves introducing a distribution $q(z|x)$. Since the expectation depends on $x$, so does $q(z|x)$:
$$
p(x) = \E_{z\sim q(\cdot|x)}\left[\frac{p(z)p(x|z)}{q(z|x)}\right].
$$
What does optimal importance sampling correspond to in this case? If $q(z|x)=p(z|x)$, the true posterior distribution, then Bayes' theorem tells us
$$
\frac{p(z)p(x|z)}{p(z|x)}=p(x),
$$
independent of $z$. To quantify optimality, we can consider the bound
$$
\log p(x) \geq \E_{z\sim q(\cdot|x)}\left[\log\left(\frac{p(z)p(x|z)}{q(z|x)}\right)\right],
$$
which is saturated when $q(z|x)$ is the true posterior. The right hand side is the __evidence lower bound (ELBO)__, which is used at the objective function in the __variational autoencoder (VAE)__. Optimizing the ELBO with respect to $q(\cdot|x)$ — or rather the ELBO averaged over the data — causes the distribution to approach the true posterior.

If a VAE is used for density estimation the ELBO is usually the figure quoted in place of the log likelihood. Being a lower bound, however, it is a biased estimator. To get an unbiased estimator we can use importance sampling with the learnt $q(z|x)$:
$$
p(x) \approx \frac{1}{k}\sum_{i=1}^k\frac{p(z_i)p(x_i|z_i)}{q(z_i|x_i)}.
$$
By learning the distribution we expect to get a lower variance. We can even use this Monte Carlo estimate under the logarithm to get an improved objective
$$
\log p(x)\geq \E_{z\sim q(\cdot|x)}\left[\frac{1}{k}\sum_{i=1}^k\frac{p(z_i)p(x_i|z_i)}{q(z_i|x_i)}.\right].
$$
This is the __importance weighted autoencoder (IWAE)__.

> Note: it hasn't been important anywhere that the original latent variable model was directed. We could have equally considered a general $p(x,z)$.

[IWAE paper has Markov structure]

## Models with Markov chain structure

