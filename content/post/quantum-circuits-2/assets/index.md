---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Quantum Circuits II"
subtitle: "ICTS lectures on Quantum Circuits"
summary: ""
authors: []
tags: []
categories: []
date: 2023-05-21T10:00:33Z
featured: false
draft: true
type: book
sidebar: false


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
toc: true  # Show table of contents? true/false
---

Here's my second lecture on quantum circuits.  

[Recent review](https://arxiv.org/abs/2111.08018)

Even more recent [Random Quantum Circuits
](https://www.annualreviews.org/doi/abs/10.1146/annurev-conmatphys-031720-030658)

Lots of other perspectives on circuits e.g. as quantum algorithms incl. variational quantum algos etc.

# Outline of lectures


5. Approaches
   1. Influence matrix / process tensor. Temporal entanglement
   2. Quantum channel view of correlations
6. Methods to use
   1. Random unitaries. Simplest result here?
   2. Dual unitaries. Result on maximal entanglement growth (Harrow)
   3. Clifford circuits. No operator entanglment. Relation to cellular automata
   4. Free fermions / matchgates (see Josza paper)

7. Dual unitaries
   1. Entanglement results
   2. Correlation functions. 
   3. What can be said about _generic dynamics_? [Growth of entanglement of generic states under dual-unitary dynamics](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.174311)
8. Connection to experiment
   1. Quantum supremacy paper
   2. Google OTOC experiment
   3. Quantinuum paper [Holographic dynamics simulations with a trapped-ion quantum computer](https://www.nature.com/articles/s41567-022-01689-7)

9. Frontiers
   1. Measurement induced transitions
   2. Computational issues. [Computational power of one- and two-dimensional dual-unitary quantum circuits](https://quantum-journal.org/papers/q-2022-01-24-631/)
   3. Connections to cellular automata
   4. Codes. Code length (Sommers)



# Some particular classes of circuits

## Random circuits

Map some things to Markov process

Why does Markov work? Include Kasia observation.

Connection to FA model

## Clifford circuits

## Dual unitary circuits

Discussion of some classes. General parameterization
Dual unitaries that are also Cliffords

### Entanglement dynamics

The toy model is illustrative but of course rather special. It turns out that we find **exactly the same behavior of the reduced density matrix** (starting from certain special initial states) for a much larger class of unitary circuits built out of **dual unitary** gates. These obey an additional condition, corresponding to unitarity in the spatial direction 

<figure align="center">
<img src="assets/folded-dual-unitarity.png" width="60%">
<figcaption> Dual unitarity condition in the folded representation.</figcaption>
</figure>

The proof is actually a relatively simple matter of writing down the circuit and carefully applying the unitarity and dual unitarity conditions

TODO Add details of proof 

### Maximal entanglement velocity implies dual unitarity


The property of dual unitarity is equivalent
to maximal operator entanglement

Recently proved by [Zhou and Harrow (2022)](https://arxiv.org/abs/2204.10341).

Despite being subject to additional conditions, the family of dual unitary gates is quite large. $4\times 4$ unitaries are 16-dimensional, while the family of dual unitaries is 14-dimensional. The dual unitaries encompass some previously studied models, including the kicked Ising model at particular values of the couplings. From a methodological viewpoint dual unitary circuits are interesting in that they have enough structure to allow many calculations to be made, without being "integrable" in the usual sense.


## Frontiers

### The effect of measurements

### Quantum supremacy


## Frontier: measurements

Up to now we've been exclusively concerned with quantum circuits made up of unitary gates. We all know that unitary evolution is not all there is to quantum mechanics, however: there's also the issue of *measurement*. How are the phenomena we've discussed so far – growth of entanglement, operator spreading, and so on – affected by measuring the system? For an extensive system probed over a long period of time, it's natural to imagine local measurements happening with a certain rate and a certain density in space. This problem has become incredibly popular with theorists since 2018, when two groups of authors ([Y Li, X Chen, MPA Fisher (2019)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.134306), [B Skinner, J Ruhman, A Nahum (2019)](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.9.031009)) suggested that a circuit could undergo a phase transition in terms of the behavior of the above quantities as a function of measurement rate.

<figure align="center">
<img src="assets/measurement-circuit.png" width="70%"/>
<figcaption>
A unitary circuit interspersed with local projective measurements of the Pauli $Z$ operator (Source: Y Li, X Chen, MPA Fisher (2019))
</figcaption>
</figure>

While it's natural that measuring a system will reduce its quantum entanglement, perhaps the more surprising prediction was that extensive entanglement survives at a *finite* measurement rate, instead of being degraded to zero by repeated measurements. Roughly, this is because entanglement is continuously generated by the unitary dynamics of the circuit between measurements.

An alternative viewpoint appeared in [MJ Gullans and DA Huse (2020)](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.041020). If the initial state of the system is mixed, it will be *purified* by (strong enough) measurements

<figure align="center">
<img src="assets/gullans-huse.png" width="70%"/>
<figcaption>
Phase diagram including the purification transition. Source: MJ Gullans and DA Huse (2020).
</figcaption>
</figure>

Note that all states of finite systems purify, but below the transition (low enough measurement rate) this will be on a timescale that is exponentially long in the system size.

Does that sound familiar? We encountered a very similar phenomenology in the dynamics of chaotic fronts in PCAs where there was some probability of non-injective rules. It seems to me that the merging of distinct trajectories in these classical systems is closely analogous to the purification transition in quantum systems. The same point of view was advanced recently in [Wilsher *et al.* (2022)](https://arxiv.org/abs/2203.11303). Whether there is more to this remains to be seen.


