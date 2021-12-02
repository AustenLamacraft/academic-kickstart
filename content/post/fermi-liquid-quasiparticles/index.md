---
title: "Quasiparticles and the Fermi Liquid"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []

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
markdown: pandoc
---

In a vacuum a particle has a well defined momentum and energy. In many-body physics, we are typically concerned with a very different situation: a finite density of particles in which one particle can never escape the influence of the others. The interaction between particles means that each is constantly exchanging energy and momentum with the others. 


{{% callout note %}}
From now on, I'm going to stop saying 'energy and momentum' every time and just say 'energy'. We'll come back to momentum later.
{{% /callout %}}

In classical physics it is certainly meaningful to talk about the energy of a particle at each instant of time. In a finite temperature system where everything is in constant motion this energy will be fluctuating as the particle interacts with its neighbours. If we give a particle some excess energy at one instant we expect that it will be shared with the other particles on a timescale determined by the strength of the interactions. If the system contains an infinite number of particles, that process will be _irreversible_. With a finite number of particles the particle can regain an energy arbitrarily close to its initial energy, an event known as a [(Poincaré) recurrence](https://en.wikipedia.org/wiki/Poincar%C3%A9_recurrence_theorem). However, the recurrence time quickly becomes astronomical for relatively small numbers of particles and the loss of energy is essentially irreversibile even in this case.

In quantum mechanics the same basic phenomenology holds. In a non-interacting system the energy of each particle is a good quantum number, and their sum gives the total energy. When we introduce an interaction Hamiltonian, it will have matrix elements between the eigenstates of the unperturbed problem. A particle that starts with an excess single-particle energy (e.g. the kinetic energy in the absence of a potential) will lose its energy irreversibly to the others.

In the next section we'll look at the simplest quantum mechanical model that captures this idea. Then we'll use this model to see what is special about the case of a Fermi system at low energies.


## The Fano–Anderson Model

We'll study the Hamiltonian acting on $N+1$ states

$$
H = \epsilon_0\ket{0}\bra{0}+\sum_{j=1}^N \left[\epsilon_j \ket{j}\bra{j} + t_j\ket{0}\bra{j}+t_j^*\ket{j}\bra{0}\right].
\label{FA}
$$

In matrix form this is

$$
H = \begin{pmatrix}
\epsilon_0 & t_1 & t_2 & \cdots & t_N \\\\
t_1^* & \epsilon_1 & 0 & \cdots & 0\\\\
t_2^* & 0 & \epsilon_2  & \cdots & 0 \\\\
\cdots & \cdots & \cdots & \cdots & 0 \\\\
t_N^* & 0 & 0 & 0 & \epsilon_N
\end{pmatrix}
$$

At first glance it may not be clear what this has to do with the discussion of the previous section. The idea is that $\ket{0}$ represents an eigenstate of energy $\epsilon_0$ when $t_j=0$. For $t_j\neq 0$ this state is coupled to many others. We have not introduced couplings between these states to keep things simple. The Hamiltonian $\eqref{FA}$ is sometimes called the Fano–Anderson model, after two of the people who studied (versions of) it in different settings. The name seems to come from [Mahan's book](https://www.google.co.uk/books/edition/Many_Particle_Physics/0PPjBwAAQBAJ?hl=en&gbpv=0) on many-body physics.

Writing the time-independent Schrödinger equation $H\ket{\Psi}=E\ket{\Psi}$ for a state $\ket{\Psi}=\sum_{j=0}^N a_j\ket{j}$ gives the equations

$$
\begin{align}
\epsilon_0 a_0 + \sum_{j=1}^N t_j a_j = E a_0\\\\\nonumber
\epsilon_j a_j + t^*_j a_0 = E a_j,
\end{align}
$$

which can be solved to give an equation that must be satisfied by the energy $E$

$$
\epsilon_0 +  \sum_{j=1}^N \frac{|t_j|^2}{E-\epsilon_j} = E.
$$

We're more interested in the time dependent problem, though. What happens if we 

It is often the case, however, that the energy eigenstates or the dynamics of a many-body system can be understood in terms of _quasiparticle_ like excitations

## The Fermi Liquid