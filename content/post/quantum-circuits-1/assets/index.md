---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "ICTS lectures on Quantum Circuits"
subtitle: ""
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

Here's my first lecture on quantum circuits.  

[Recent review](https://arxiv.org/abs/2111.08018)

Even more recent [Random Quantum Circuits
](https://www.annualreviews.org/doi/abs/10.1146/annurev-conmatphys-031720-030658)

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

## What is a quantum circuit?

<p align="center">
<img src="assets/Reversible_circuit_composition.svg.png" width="30%">
</p>

### Why consider circuits?

Google experiments. Locality as an important feature

The other important point I’d like to make is that the rules, being local, give rise to a notion of causality in the dynamics. That is, there is a maximal speed at which influences can propagate, corresponding to 45 degree lines in our pictures. With only a small abuse of terminology, we’ll often speak of a “light cone” in these systems.

Trotterization. Floquet systems. Example of kicked Ising

This will be an important example and we will return to it repeatedly.

### Notation

$X$, $Y$, $Z$ Paulis

Graphical notation. Simple examples of contraction

## Quantum circuits

In general, a quantum circuit is a map on the quantum state of a system composed of many identical subsystems. Usually these subsystems are *qubits* (spin-1/2 systems with Hilbert space $\mathbb{C}^2$) in analogy to the two states of an elementary cellular automaton. The two states 0 and 1 become two quantum states $\ket{0}$ and $\ket{1}$ that define the **computational basis**.

<figure align="center">
<img src="assets/Reversible_circuit_composition.svg.png" width="20%">
<figcaption>Schematic of a quantum circuit. Reading from left to right, $f$ acts on top five qubits, then $g$ acts on lower seven.</figcaption>
</figure>

The bijections that apply to each block in a block CA are replaced with unitary operators (other kinds of operations – measurements, for example – are possible). Quantum circuits are an important model of universal quantum computation, but we will mostly be interested in exploring them as systems with discrete time, many body quantum dynamics. We'll frequently borrow terminology from quantum computing, however: the unitary operators appearing in our circuits are called **gates**. The most concrete way to think about a $n$-qubit unitary is in terms of its matrix elements $U_{x_1\ldots x_n,x'_1,\ldots, x'_n}$ in the computational basis. The condition of unitarity then has the form

$$
\sum\_{x_1'\ldots x_N'}U_{x_1\ldots x_n,x'_1,\ldots, x'_n} U^\dagger\_{x'_1\ldots x'_n,x''_1,\ldots, x''_n}=\delta\_{x_1,x_1''}\ldots \delta\_{x_N,x_N''},
$$

but we'll shortly introduce a graphical notation to avoid such awful looking expressions.

### Everything is a tensor

A general state of $N$ qubits expressed in product basis as
  
$$
\ket{\Psi} = \sum_{x_{1:N}\in \{0,1\}^N} \Psi_{x_1\ldots x_N}\ket{x_1}_1\ket{x_2}_2\cdots \ket{x_N}_N
$$

where we write $\ket{x_1}\_1\ket{x_2}\_2\cdots \ket{x_N}\_N =\ket{x_1\cdots x_N}=\ket{x_{1:N}}$ for brevity. An operator on $N$ qubits has matrix elements

$$
\mathcal{O}\_{x_{1:N},x'_{1:N}} = \bra{x\_{1:N}}\mathcal{O}\ket{x'\_{1:N}}.
$$

To avoid writing multi-index expressions we'll often use [Penrose graphical notation](https://en.wikipedia.org/wiki/Penrose_graphical_notation), in which a quantity with $n$ indices – it's almost always called a "tensor", in the sense of algebra and not geometry – is represented by some kind of blob with $n$ legs. Note that the legs are distinguishable in general (unless the tensor is symmetric). The contraction of indices is indicated by joining legs appropriately. Some examples are shown below.

<figure align="center">
<img src="assets/tensors.png" width="70%">
<figcaption>See <a href="https://github.com/ey3lock3r/MPS-Tutorial">Pan Zhang's tutorial</a> </figcaption>
</figure>


### Some gates

Let's look at some examples of two qubit gates. We'll work in the basis $\ket{00}$, $\ket{01}$, $\ket{10}$, $\ket{11}$. We've already met the simplest example, the [SWAP gate](https://en.wikipedia.org/wiki/Quantum_logic_gate#Swap_gate)

$$
\operatorname{SWAP}=\begin{pmatrix}
1 & 0 & 0 & 0 \\\
0 & 0 & 1 & 0 \\\
0 & 1 & 0 & 0 \\\
0 & 0 & 0 & 1
\end{pmatrix}
$$.

$\operatorname{SWAP}$ switches the occupancies of the two sites:

$$
\operatorname{SWAP}\ket{10} = \ket{01}.
$$

Note that it takes product states to product states. A slightly more complicated example is the square root of SWAP

$$
\sqrt{\operatorname{SWAP}}=\begin{pmatrix}
1 & 0 & 0 & 0 \\\
0 & \frac{1}{2}(1+i) & \frac{1}{2}(1-i) & 0 \\\
0 & \frac{1}{2}(1-i) & \frac{1}{2}(1+i) & 0 \\\
0 & 0 & 0 & 1
\end{pmatrix}.
$$

Unlike $\operatorname{SWAP}$ this generates _entanglement_. That is, it takes a product state to a non-product state.

$$
\sqrt{\operatorname{SWAP}}\ket{10} = \frac{1}{2}\left[(1+i)\ket{10}+(1-i)\ket{01}\right].
$$

$\sqrt{\operatorname{SWAP}}$ conserves number of 1s and 0s. In fact, it is fully rotationally invariant. $\sqrt{\operatorname{SWAP}}$ together with arbitrary single qubit unitary operators form __universal gate set__ that allows for universal quantum computation.

### Gate notation

One of the additional complexities of quantum circuits relative to CAs is that we have to consider both unitaries and their conjugates (when we evolve an operator in the Heisenberg picture, for example). For this reason it's convenient to introduce a color-coded notation 

<figure align="center">
<img src="assets/matrix_elements.svg" width="70%">
<figcaption> Notation for gates and their conjugates </figcaption>
</figure>

Putting all these notational elements together, it's possible to express the condition of unitarity of a two qubit gate in purely graphical form:

<figure align="center">
<img src="assets/diag_unitarity.png" width="70%">
<figcaption> Unitarity of a two qubit gate expressed in graphical notation </figcaption>
</figure>

Much better!

### Locality 

In analogy with block CAs, we are going to be concerned with *brickwork unitary circuits*, in which a sequence of two qubit gates is applied in an alternating fashion. Just like their classical counterparts, we'll see that these systems come with an inbuilt notion of causality.

Aside from the intrinsic interest of exploring the analogy to CAs, there is a very good reason to explore circuits in which unitaries act locally, rather than between abitrarily separated qubits. Namely, locality is often a feature of real quantum computing architectures, such as [Google's Sycamore processor](https://en.wikipedia.org/wiki/Sycamore_processor), where qubits are arranged in a square lattice with coupling between nearest neighbors. 

<figure align="center">
<img src="assets/google-sycamore-schematic.png" width="400"/>
<img src="assets/google-sycamore-photo.png" width="400"/>
<figcaption> (top) a schematic view of the Google Sycamore processor and (bottom) the real thing.</figcaption>
</figure>

The propagation of causal influences characteristic of local quantum circuits is therefore very much a feature of real quantum computing platforms, as we'll see in more detail later.

### Computational complexity

One big difference between a quantum circuit and a CA is the difficulty of simulating each on a (classical) computer. The state of a CA consists of a single bitstring giving the value of each cell, and the state at the next instant is obtained by applying a series of deterministic maps, which could easily be parallelised if necessary. On the other hand, the state of the qubits at an instant is a vector in $2^N$ dimensional space, which will become difficult to store when $N$ is not too large. Updating the state involves acting on this vector with a unitary matrix. Naive matrix-vector multiplication takes a number of operations $O(\operatorname{dim}^2)=2^{2N}$. Since our gates amount to *sparse* matrices, it is possible to instead accomplish this in $O(\operatorname{dim})=2^{N}$, but this is _still exponentially hard in the number of qubits_. The difficulty of performing such calculations on a classical computer is the basis of ["quantum supremacy"](https://en.wikipedia.org/wiki/Quantum_supremacy) demonstrations based on sampling the output of quantum circuits. Roughly, the idea is to measure (approximately) the distribution of bitstrings output by a quantum circuit from a fixed initial state, in a regime where a classical simulation of the same circuit is intractable.

The total number of (time) steps $T$ taken is often referred to as the *depth* of the circuit. For low depth $T<N$ it pays to move  _horizontally_ instead (i.e. in the spatial direction). Note that the problem of finding the best way to contract a general tensor network is NP-hard.


### Trotterization of time evolution


### Some comments on computational complexity

Difficulty of contraction. Matrix product states

Preview of quantum supremacy.



## Quantities of interest

2. What quantities might we calculate?
   1. Correlation functions Causality. Extension to Lorentz symmetry? Correlation functions. Surprising that some (parts of) the correlation functions are not intractable. 
   2. Entanglement. Membrane picture
   3. OTOC. Operator spreading. Operator entanglement
   4. [Maximal entanglement velocity implies dual unitarity](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.L201104)


We now turn to some of the features of dynamics in quantum circuits, beginning with the simplest question: computing the expectation value of a (local) operator

### Expectation values

Here the goal is to evaluate $\bra{\Psi}\mathcal{O}\ket{\Psi}=\bra{\Psi_0}\mathcal{U}^\dagger\mathcal{O}\mathcal{U}\ket{\Psi_0}$ for a local operator $\mathcal{O}$, where $\mathcal{U}$ is the *overall* unitary operator describing the whole circuit. The simplest example of such an operator is a Pauli operator $X$, $Y$, or $Z$ for one of the qubits. 

This calculation has the diagrammatic representation
 
<div align="center"> 
<object data="assets/expectation.svg" type="image/svg+xml" width='600'></object>
</div>

where we leave the initial state unspecified at the moment. 

Since every $U$ is accompanied by a $U^\dagger$, it's extremely convenient to introduce a notation that includes them both in a single unit, by "folding" one on top of the other

<figure align="center">
<img src="assets/diag_folded.png" width="60%">
<figcaption> The folded picture. The purple box represents both $U$ and $U^\dagger$ for a gate.</figcaption>
</figure>

In this folded representation, lines correspond to two indices, and therefore $2^2=4$ dimensions. The unitarity condition takes the form:

<figure align="center">
<img src="assets/folded-unitarity.png" width="60%">
<figcaption> Unitarity condition in the folded representation. A circle denotes contraction a Kronecker delta $\delta_{aa'}$.</figcaption>
</figure>

In the folded picture the expectation value $\bra{\Psi}\mathcal{O}\ket{\Psi}$ looks like this

TODO Add the operator!!

<object data="assets/folded-expectation.svg" type="image/svg+xml"></object>

If you click on the picture you can toggle the effect of applying the unitarity condition. After unitarity has been used to eliminate as many gates as possible, a "light cone" emerges, reflecting the region of the circuit that affects the expectation value.

### Reduced density matrix

Any expectation value of an operator in a region $A$ can be computed in terms of the *reduced density matrix* $\rho_A$ for region $A$, defined by

$$
\rho_A = \operatorname{tr}\_{\bar A}\left[\ket{\Psi}\bra{\Psi}\right]=\operatorname{tr}_{\bar A}\left[\mathcal{U}\ket{\Psi_0}\bra{\Psi_0}\mathcal{U}^\dagger\right]
$$

$\rho_A$ has the diagrammatic representation (where $A$ consists of the four central sites):

<object data="assets/reduced-density-matrix.svg" type="image/svg+xml"></object>

Again, you can toggle the effect of using unitarity to remove gates.

TODO emphasize that even if you start from a complicated state, you only have to deal with the reduced density matrix of that state at the bottom

### Entanglement entropy

The reduced density matrix $\rho_A$ is also very useful for quantifying the degree of entanglement between subsystem $A$ and its complement. If the state $\ket{\Psi}$ has the form of a product state

$$
\ket{\Psi} = \ket{\psi}\_A \otimes \ket{\phi}\_{\bar A}
$$

then it's not hard to see that $\rho_A = \ket{\psi}_A\bra{\psi}_A$: a pure state. Any deviation from a product state will lead to a mixed reduced density matrix. The degree of entanglement can then be quantified by the von Neumann entropy of $\rho_A$ – called the **entanglement entropy** – defined by

$$
S_A \equiv -\operatorname{tr}\left[\rho_A\log \rho_A\right].
$$

$S_A$ vanishes for a product state, and is otherwise positive.


### Toy model

We can get some intuition for the growth of entanglement from a toy model. We consider a circuit that consists of the repeated application of SWAP gates. The initial state of the system, now corresponding to a quantum state of the qubits, is a product state over pairs $(x_0, x_1)$, $(x_2, x_3)$, and so on, with each pair in the [Bell state](https://en.wikipedia.org/wiki/Bell_state)

$$
\ket{\Phi^+}\_{2n, 2n+1} = \frac{1}{\sqrt{2}}\left[\ket{0}\_{2n}\ket{0}\_{2n+1}+ \ket{1}\_{2n}\ket{1}\_{2n+1}\right]
$$

The reduced density matrix for one member of a Bell pair is

$$
\operatorname{tr}\_{2}\left[\ket{\Phi^+}\_{12}\bra{\Phi^+}\_{12}\right] = \frac{1}{2}\mathbb{1}_1
$$

with an entanglement entropy of one bit. 

Now consider a Bell pair in our toy model where the two consituent qubits end up at sites $m$ and $n$:

- If $n\in A$, $m\in\bar A$, $\rho_A$ has factor $\mathbb{1}_n$. 

- If both qubits $m$, $n$, of pair are $m, n\in A$ they contribute a factor $\ket{\Phi^+}\_{nm}\bra{\Phi^+}\_{nm}$ (pure)

In our toy model the reduced density matrix $\rho_A$ has a factor $\mathbb{1}_n$ for each site $n\in A$ whose "partner" qubit is in $\bar A$. If both qubits of a Bell pair are at sites  $n,m\in A$ they contribute a factor $\ket{\Phi^+}\_{nm}\bra{\Phi^+}\_{nm}$, which is a pure state. The entanglement entropy has contributions from the former case only, and we get

$$
 S_A = \min(4\lfloor t/2\rfloor, |A|) \text{ bits},
$$

exactly as for the mutual information in the classical case. After time $\sim |A|/2$ the subsystem has thermalized. 

### Expectation values

### Reduced density matrix

### Entanglement measures

Page bound

### Correlation functions

### OTOCs

### Operator spreading

vs Operator entanglement

## Some particular classes of circuits

### Random circuits

Map some things to Markov process

Why does Markov work? Include Kasia observation.

Connection to FA model

### Clifford circuits

### Dual unitary circuits

Discussion of some classes. General parameterization
Dual unitaries that are also Cliffords

#### 2D circuits

Recent paper

## Frontiers

### The effect of measurements

### Quantum supremacy



### Dual unitary gates

The toy model is illustrative but of course rather special. It turns out that we find **exactly the same behavior of the reduced density matrix** (starting from certain special initial states) for a much larger class of unitary circuits built out of **dual unitary** gates. These obey an additional condition, corresponding to unitarity in the spatial direction 

<figure align="center">
<img src="assets/folded-dual-unitarity.png" width="60%">
<figcaption> Dual unitarity condition in the folded representation.</figcaption>
</figure>

The proof is actually a relatively simple matter of writing down the circuit and carefully applying the unitarity and dual unitarity conditions, but I won't reproduce it here. The converse – that maximal growth of entanglement in a circuit implies that the gates are dual unitary – was recently proved by [Zhou and Harrow (2022)](https://arxiv.org/abs/2204.10341).

Despite being subject to additional conditions, the family of dual unitary gates is quite large. $4\times 4$ unitaries are 16-dimensional, while the family of dual unitaries is 14-dimensional. The dual unitaries encompass some previously studied models, including the kicked Ising model at particular values of the couplings. From a methodological viewpoint dual unitary circuits are interesting in that they have enough structure to allow many calculations to be made, without being "integrable" in the usual sense.

## Operator spreading

How does a local operator "look" as it evolves in the Heisenberg picture? Up until recently it seems people hadn't thought about this question too much. A local spin operator  $Z_n(t)=\mathcal{U}^\dagger(t)Z_n \mathcal{U}(t)$ may be used to calculate a correlation function such as $\langle Z_n(t)Z_m(0) \rangle$, but this is only one "component" of $Z_n(t)$. 

Let's be more explicit. Since the Pauli operators $X$, $Y$, $Z$, and the identity form a basis of hermitian operators at a site, any observable such as $Z_n(t)$ can be expressed as an expansion in products of these operators

$$
Z_n(t)= \sum_{\mu_{1:N}=\\{0,1,2,3\\}^N} \mathcal{C}\_{\mu_{1:N}}(t) \sigma_1^{\mu_1}\otimes\cdots \sigma_N^{\mu_N},\qquad \sigma^\mu = (\mathbb{1},X,Y,Z)
$$

As time progresses two things (tend to) increase:

  1.  The number of non-identity sites (known as __operator spreading__)
  2.  The number of different contributions  (or __operator entanglement__)

Operator spreading is closely analogous to the spreading of chaotic fronts that we saw in CAs. The resemblance becomes clearer if we introduce an ensemble of unitary circuits, where the gate parameters are chosen iid from a certain distribution (a popular choice is the uniform distribution over the unitary matrices). The coefficients $\mathcal{C}\_{\mu_{1:N}}$ that appear in the expansion of $Z_n(t)$ then inherit this randomness. In particular, their signs can fluctuate, meaning that a correlation function such as $\langle Z_n(t)Z_m(0) \rangle$ will tend to average to zero. This is akin to the way that averaging over different rules led to a completely random state of a CA. 

One can still see some interesting dynamics, however, if one considers a quantity that is insensitive to these sign fluctuations.

### Out of time order correlator

The simplest such quantity is known (long-windedly) as the **out of time order correlator** (OTOC) and is defined as

$$
\operatorname{OTOC}_{jk}(t) \equiv \langle Z_j(t)Z_k(0)Z_j(t)Z_k(0)\rangle.
$$

This is not particular illuminating, though it explains the name. Things become a bit clearer when the OTOC is expressed in terms of the operator expansion:

$$
\operatorname{OTOC}\_{jk}(t)\propto \sum_{\mu_{1:N}}\mathcal{C}\_{\mu_{1:N}}^2(t)\left[\delta_{\mu_k,0}+\delta_{\mu_k,3}-\delta_{\mu_k,1}-\delta_{\mu_k,2}\right].
$$

We see that $\operatorname{OTOC}\_{jk}(t)\neq 1$ when operator $Z_j(t)$ spreads from site $j$ to site $k$ (the characteristic speed of propagation of the OTOC is known as the "butterfly velocity" $v_\text{B}$, after the [butterfly effect](https://en.wikipedia.org/wiki/Butterfly_effect)). Additionally, the OTOC depends on the *square* of the coefficients, so survives averaging over random circuits. 

The OTOC is a natural quantum analog of the bitstring differences $z_t=x_t\oplus y_t$ that we considered for CAs. In the same way, it can be understood in terms of the evolution of two identical copies of the system.

### Google's OTOC experiment

The OTOC was measured last year in a [groundbreaking experiment](https://www.science.org/doi/full/10.1126/science.abg5029?casa_token=TkmMj95XIYoAAAAA:NP67A_aYhL8lSDWtuG99i8oFfx1c79-Lz-UGKYsW1-bee3hQ7weJSxLLQwpPzfSEPvEqt6SPbB4UYA) from the Google Quantum team. The two qubit gates were either all $i\operatorname{SWAP}$ gates or all $\sqrt{i\operatorname{SWAP}}$. After averaging over single qubit gates very different behaviors were obtained for these two cases.

<figure align="center">
<img src="assets/google-otoc.png" width="1000">
<figcaption> The measured OTOC for $i\operatorname{SWAP}$ gates (top) and $\sqrt{i\operatorname{SWAP}}$ (bottom) after averaging over single qubit gates.</figcaption>
</figure>

For $i\operatorname{SWAP}$ gates the OTOC has a front that moves at the maximal speed and remains sharp, whereas for $\sqrt{i\operatorname{SWAP}}$ the front moves more slowly and broadens with time. The former behavior is typical of dual unitary circuits ([Claeys and Lamacraft (2020)](https://link.aps.org/doi/10.1103/PhysRevResearch.2.033032)), while the latter is generic for unitary circuits.

The averaged OTOC can be expressed in terms of a Markov process, similarly to our discussion of chaotic fronts in CAs, and can therefore be efficiently calculated using Monte Carlo simulations, for example.

### Quantum advantage?

This all seems very classical. Aren't quantum computers supposed to do things that classical computers find hard? The key to efficient classical algorithms is the strategy we've been using throughout to arrive at a simple theoretical picture of these system, whether quantum or classical: *averaging*. If one asks about the OTOC in a *given* circuit, there is no simple probabilistic interpretation. As shown in the Appendix of the Google paper, formulating the dynamics of the average OTOC fluctuations leads to model with negative matrix elements, so that Monte Carlo simulations would be afflicted with the [sign problem](https://en.wikipedia.org/wiki/Numerical_sign_problem). In fact, the same issue arises for the average OTOC in models with number conservation ([Rowlands and Lamacraft (2018)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.195125)).


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


