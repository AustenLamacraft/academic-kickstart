---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Quantum Circuits 1"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2022-02-13T10:30:33Z
lastmod: 2022-02-13T10:30:33Z
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
# toc: true  # Show table of contents? true/false
---

Here's my first lecture on quantum circuits.  


# Outline of lectures

1. What is a circuit? 
2. Why consider circuits? 
3. Graphical notation
4. What quantities might we calculate?
   1. Correlation functions
   2. Entanglement
   3. OTOC
5. Methods to use
   1. Random unitaries
   2. Dual unitaries
   3. Clifford circuits
6. Frontiers
   1. Measurement induced transitions
   2. Computational issues
  

## What is a quantum circuit?



[Recent review](https://arxiv.org/abs/2111.08018)

<p align="center">
<img src="assets/Reversible_circuit_composition.svg.png" width="30%">
</p>

## Why consider circuits?

Google experiments. Locality as an important feature

### Notation

$X$, $Y$, $Z$ Paulis

### Examples of gates

Single qubit gates, two qubit gates

### Universal gate set

### Trotterization of time evolution


## Graphical notation

Some Python examples?

Use Pyodide to embed some circuit calculations

https://pamelafox.github.io/html-slides-for-programming/#/6

Code copy badge https://github.com/RickStrahl/highlightjs-badge

Quimb for contraction

https://quimb.readthedocs.io/en/latest/index.html#

Stepping through fragments with [reveal](https://revealjs.com/fragments/)

### Some comments on computational complexity

Difficulty of contraction. Matrix product states

Preview of quantum supremacy.

## Quantities of interest

### Expectation values

### Reduced density matrix

### Entanglement measures

Page bound

### Correlation functions

### OTOCs

### Operator spreading


## Some particular classes of circuits

### Random circuits

### Clifford circuits

### Dual unitary circuits


#### 2D circuits

## Frontiers

### The effect of measurements

### Quantum supremacy



