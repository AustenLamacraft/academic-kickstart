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


It may be that the function $\phi$ doesn’t lend itself to being averaged, perhaps because it has support on the tails of the distribution. Alternatively, it may be hard to draw samples from $p$.