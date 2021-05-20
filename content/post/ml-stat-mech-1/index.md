---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Machine Learning and Statistical Physics"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-05-19T16:50:40+01:00
lastmod: 2021-05-19T16:50:40+01:00
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

## Introduction

Emphasis on probabilistic machine learning. Contrast

1. Typical physics situation: known probabilistic model
2. Typical ML situation: data assumed to arise from probabilistic model (generating process). Refer to Alemi here?

Contrast modeling with classification

Mention possibility of *synthetic data*.

## Lecture 1: Fundamentals



### Some mathematical background

Divergences, KL divergences. Properties. Forward and reverse KL and the meaning

Gibbs inequality. ELBO

### Entropy and Information

### What should we optimize?

log likelihood. Why is optimizing the correct thing?
Optimizing forward or reverse KL

### Variational inference

aka mean field theory. Compare the physics situation with ML situation

Introduce idea of latent variables here with Ising example. Ising spins are the latent variables

Other stuff. Message passing

### A zoo of models

Latent variables models. What does it mean?

Graphical models, Markov models, autoregressive models

Hidden Markov models

Examples from applications

### Formalising the problem

See Alemi paper "the world we want" 



## Lecture 2: Models

### Variational autoencoder

Continuous *vs.* discrete variables.

Bits back encoding

### Normalizing flows

Relation to VAEs

### Diffusion models

### Optimal Importance Sampling

Jarzynski inequality. Annealed importance sampling

### Schrodinger bridge

Turning a model into an autoregressive model