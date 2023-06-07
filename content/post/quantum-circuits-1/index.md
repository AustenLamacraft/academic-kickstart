---
# Documentation: https://wowchemy.com/docs/managing-content/
title: "Quantum Circuits I"
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

Here's my first lecture on quantum circuits.  

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

The bijections that apply to each block in a block CA are replaced with unitary operators (other kinds of operations – measurements, for example – are possible). Quantum circuits are an important model of universal quantum computation, but we will mostly be interested in exploring them as systems with discrete time, many body quantum dynamics. We'll frequently borrow terminology from quantum computing, however: the unitary operators appearing in our circuits are called **gates**. The most concrete way to think about a $n$-qubit unitary is in terms of its matrix elements $U_{x_1\ldots x_n,x'_1,\ldots, x'_n}$ in the computational basis. 

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

TODO Use Figures from Glen Evenbly's site

### Some gates

#### Unitary gates: one qubit

- Multiplication by a Pauli matrix: $X$, $Y$, or $Z$.

- General case $U = a_0\mathbb{1} + \vectorbold{a}\cdot(X,Y,Z)$ with $|a_0|^2+|\vectorbold{a}|^2=1$

- Other special cases used in quantum information e.g. [Hadamard gate](https://en.wikipedia.org/wiki/Quantum_logic_gate#Hadamard_gate)

$$
H = \frac{1}{\sqrt{2}}\begin{pmatrix}
1 & 1 \\\\
1 & -1
\end{pmatrix}
$$

#### Two qubits

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

TODO Conservation laws


#### General two qubit unitary

- Any two-qubit unitary $U\in \mathcal{U(4)}$ can be written

\begin{equation}
U = e^{i \phi} (u_+ \otimes u_-) V[J_x, J_y, J_z] (v_- \otimes v_+),
\end{equation} 

- $u_{\pm}, v_{\pm} \in SU(2)$

\begin{align}
 V[J_x, J_y, J_z] &= \exp \left[-i\left(J_x \sigma^x \otimes \sigma^x + J_y \sigma^y \otimes \sigma^y+ J_z \sigma^z \otimes \sigma^z\right)\right]\\
 &= \begin{bmatrix}
e^{-i J_z} \cos(J_-) & 0 & 0 & -i e^{-i J_z \sin(J_-)} \\\\
0 & e^{iJ_z} \cos(J_+) & -ie^{i J_z} \sin(J_+) & 0 \\\\
0 & -ie^{i J_z} \sin(J_+) & e^{iJ_z} \cos(J_+) & 0 \\\\
-i e^{-i J_z \sin(J_-)} & 0 & 0 & e^{-i J_z} \cos(J_-) \\\\
\end{bmatrix}
\end{align}

- 16 parameters!

### Time evolution

#### Single qubit gates

- Time evolution operator $U=\exp(-iHt)$

- If $H=\sum_j h_j$ a sum of single qubit terms

$$
U = \exp(-iHt) = \prod_j \exp(-ih_j) = \prod_j U_j
$$
$$
U_j=\mathbb{1}\otimes \ldots \otimes\mathbb{1} \otimes \overbrace{u_j}^{j\text{th factor}} \ldots \otimes\mathbb{1}
$$

#### Two qubit gates

- Simplest example of two qubit interaction is __exchange Hamiltonian__

$$
\begin{align}
h_{12} &= J\left[X\otimes X+Y\otimes Y+Z\otimes Z\right] =J\left[X_1X_2+Y_1Y_2 + Z_1Z_2\right]\\\
&=2\operatorname{SWAP} - 1
\end{align}
$$
$$
U(J) = \exp(-ih_{12}) = e^{iJ}\left[\cos (2J) \mathbb{1} - i\sin (2J) \operatorname{SWAP}\right]
$$

- Special cases 

$$
U(\pi/4)=\operatorname{SWAP}
$$
$$
U(\pi/8)=\sqrt{\operatorname{SWAP}}
$$

- $H=\sum_{i,j} h_{i,j}$ a sum of two qubit terms with $[h_{i,j},h_{j,k}]\neq 0$

- $U\neq \prod_{i,j} \exp(-ih_{i,j})$. More complicated!

- __Suzuki–Trotter__ expansion: decompose $H=H_A + H_B$

$$
U = \exp(-iH) = \left[\exp\left(-\frac{iH}{n}\right)\right]^n \sim \left[e^{-iH_A/n} e^{-iH_B/n}\right]^n 
$$

$$
H = \sum_j h_{j,j+1}
$$
$$
H_A = \sum_j h_{2j, 2j+1}\qquad H_B = \sum_j h_{2j-1, 2j}
$$
$$
e^{-iH_A/n}=\prod_j U_{2j,2j+1}\qquad e^{-iH_B/n} = \prod_j U_{2j-1,2j}
$$
<p align="center">
<img src="assets/brickwall.png" width="450"/>
</p>

### Floquet theory: kicked Ising model

- Time dependent Hamiltonian with kicks at $t=0,1,2,\ldots$.

$$
\begin{aligned}
H_{\text{KIM}}(t) = H_\text{I}[\mathbf{h}] + \sum_{m}\delta(t-n)H_\text{K}\\
H_\text{I}[\mathbf{h}]=\sum_{j=1}^L\left[J Z_j Z_{j+1} + h_j Z_j\right],\qquad H_\text{K} &= b\sum_{j=1}^L X_j,
\end{aligned}
$$

- "Stroboscopic" form of $U(t)=\mathcal{T}\exp\left[-i\int^t H_{\text{KIM}}(t') dt'\right]$

$$
\begin{aligned}
  U(n_+) &= \left[U(1_+)\right]^n,\qquad U(1_-) = K I_\mathbf{h}\\\
  I_\mathbf{h} &= e^{-iH_\text{I}[\mathbf{h}]}, \qquad K = e^{-iH_\text{K}}
\end{aligned}
$$

### KIM as a circuit

<p align="center">
<img src="assets/kim-circuit.png" width="200"/>
</p>

$$
\begin{aligned}
  \mathcal{K} &= \exp\left[-i b X\right]\\\
  \mathcal{I} &= \exp\left[-iJ Z_1 Z_2 -i \left(h_1 Z_1 + h_2 Z_2\right)/2\right].
\end{aligned}
$$

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

TODO More stuff about supremacy and other methods...

e.g. [Pan and Zhang](https://arxiv.org/abs/2103.03074)

[Napp et al](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.12.021021 )


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

#### Unitarity in graphical notation

One of the additional complexities in graphically representing thiese calculations is that we have to consider both unitaries and their conjugates. For this reason it's convenient to introduce a color-coded notation 

<figure align="center">
<img src="assets/matrix_elements.svg" width="70%">
<figcaption> Notation for gates and their conjugates </figcaption>
</figure>

The condition of unitarity has the form

$$
\sum\_{x_1'\ldots x_N'}U_{x_1\ldots x_n,x'_1,\ldots, x'_n} U^\dagger\_{x'_1\ldots x'_n,x''_1,\ldots, x''_n}=\delta\_{x_1,x_1''}\ldots \delta\_{x_N,x_N''},
$$

but we'll shortly introduce a graphical notation to avoid such awful looking expressions.

Putting all these notational elements together, it's possible to express the condition of unitarity of a two qubit gate in purely graphical form:

<figure align="center">
<img src="assets/diag_unitarity.png" width="70%">
<figcaption> Unitarity of a two qubit gate expressed in graphical notation </figcaption>
</figure>

Much better! (than what we had above)

#### Using unitarity

This calculation has the diagrammatic representation
 
<div align="center"> 
<object data="assets/expectation.svg" type="image/svg+xml" width='600'></object>
</div>

where we leave the initial state $\ket{\Psi}$ unspecified at the moment. 

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

<object data="assets/contracted-density-matrix .svg" type="image/svg+xml"></object>

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



#### [Schmidt decomposition](https://en.wikipedia.org/wiki/Schmidt_decomposition)

In $\mathcal{H}=\mathcal{H}\_A\otimes\mathcal{H}\_B$ any state $\Psi_{AB}$ can be written

$$
\ket{\Psi\_{AB}} = \sum\_{\alpha=1}^{\min(\operatorname{dim} \mathcal{H}\_A, \operatorname{dim} \mathcal{H}\_B)} \lambda\_\alpha \ket{u\_\alpha}\_A\otimes\ket{v\_\alpha}\_B
$$

- $\ket{u_\alpha}$ and $\ket{v_\alpha}$ orthonormal; $\lambda_\alpha\geq 0$

- $\lambda_\alpha$ quantify _entanglement_ between A and B

Apply to reduced density matrix

$$
\begin{align}
\rho_A &= \operatorname{tr}\_B\left[\ket{\Psi}\bra{\Psi}\right] \\
&= \sum\_\alpha \lambda_\alpha^2 \ket{u\_\alpha}\bra{u\_\alpha}
\end{align}
$$

- $p_\alpha\equiv \lambda_\alpha^2$ are the eigenvalues of $\rho_A$

Schmidt rank

$\operatorname{rank}=\min(\operatorname{dim} \mathcal{H}_A, \operatorname{dim} \mathcal{H}_B)=2^{\min(2t-2, N_A)}$

Here $t=4$, $N_A=4$
<object data="assets/contracted-density-matrix.svg" type="image/svg+xml"></object>

#### Entanglement entropy

- von Neumann entropy of $\rho_A$

$$
\begin{align}
S_A &= -\operatorname{tr}\left[\rho_A\log \rho_A\right]\\\
&=-\sum_\alpha p_\alpha \log p_\alpha
\end{align}
$$

- Maximum value for equal probabilities $p_\alpha = \frac{1}{2^{\min(2t-2, N_A)}}$

$$
S_A \leq \min(2t-2, N_A)\log 2
$$

The reduced density matrix $\rho_A$ is also very useful for quantifying the degree of entanglement between subsystem $A$ and its complement. If the state $\ket{\Psi}$ has the form of a product state

$$
\ket{\Psi} = \ket{\psi}\_A \otimes \ket{\phi}\_{\bar A}
$$

then it's not hard to see that $\rho_A = \ket{\psi}_A\bra{\psi}_A$: a pure state. Any deviation from a product state will lead to a mixed reduced density matrix. The degree of entanglement can then be quantified by the von Neumann entropy of $\rho_A$ – called the **entanglement entropy** – defined by

$$
S_A \equiv -\operatorname{tr}\left[\rho_A\log \rho_A\right].
$$

$S_A$ vanishes for a product state, and is otherwise positive.


#### Toy model

We can get some intuition for the growth of entanglement from a toy model. We consider a circuit that consists of the repeated application of SWAP gates. 

<figure align="center">
<img src="assets/bell-swap.png" width="100%"/>
<figcaption>Initially neighboring correlated pairs subject to a block CA consisting of SWAP operations. </figcaption>
</figure>

The initial state of the system, now corresponding to a quantum state of the qubits, is a product state over pairs $(x_0, x_1)$, $(x_2, x_3)$, and so on, with each pair in the [Bell state](https://en.wikipedia.org/wiki/Bell_state)

$$
\ket{\Phi^+}\_{2n, 2n+1} = \frac{1}{\sqrt{2}}\left[\ket{0}\_{2n}\ket{0}\_{2n+1}+ \ket{1}\_{2n}\ket{1}\_{2n+1}\right]
$$

The reduced density matrix for one member of a Bell pair is

$$
\operatorname{tr}\_{2}\left[\ket{\Phi^+}\_{12}\bra{\Phi^+}\_{12}\right] = \frac{1}{2}\mathbb{1}_1
$$

with an entanglement entropy of one bit. 

Now consider a Bell pair in our toy model where the two constituent qubits end up at sites $m$ and $n$:

- If $n\in A$, $m\in\bar A$, $\rho_A$ has factor $\mathbb{1}_n$. 

- If both qubits $m$, $n$, of pair are $m, n\in A$ they contribute a factor $\ket{\Phi^+}\_{nm}\bra{\Phi^+}\_{nm}$ (pure)

In our toy model the reduced density matrix $\rho_A$ has a factor $\mathbb{1}_n$ for each site $n\in A$ whose "partner" qubit is in $\bar A$. If both qubits of a Bell pair are at sites  $n,m\in A$ they contribute a factor $\ket{\Phi^+}\_{nm}\bra{\Phi^+}\_{nm}$, which is a pure state. The entanglement entropy has contributions from the former case only, and we get

$$
 S_A = \min(4\lfloor t/2\rfloor, |A|) \text{ bits},
$$

exactly as for the mutual information in the classical case. After time $\sim |A|/2$ the subsystem has thermalized. 

TODO look ahead to dual unitaries

TODO Page bound / Page curve

### Correlation functions

In terms of quantum channel 

Somewhat surprising 

Use pictures from maximal velocity paper / Bertini

Need to introduce notion of 

#### (Infinite temperature) Correlations 

$$
c_{\alpha \beta}(x,t) = \langle \sigma_{\alpha}(x,t) \sigma_{\beta}(0,0) \rangle,\qquad \sigma_\alpha(x,t)=U^\dagger(t)\sigma_\alpha(x)U(t)
$$

- Vanishes when $|x|>t$ (outside light cone)
<p align="center">
<img src="assets/correlator.png" width="800">
</p>



#### On the light cone

- Using unitarity (only)

<p align="center">
<img src="assets/diag_corr_2.png" width="400">
</p>


<p align="center">
<img src="assets/diag_corr_channel.png" width="600">
</p>


#### Quantum channel

TODO Need to define quantum channel

$$
\begin{align}\label{eq:CorrChannels}
\langle \sigma\_{\alpha}(t,t) \sigma\_{\beta}(0,0) \rangle &= \tr \left[\sigma\_{\beta}\mathcal{M}\_{-}^t(\sigma\_{\alpha})\right] / q \\\
&=  \tr \left[ \sigma\_{\alpha}\mathcal{M}\_{+}^{t}(\sigma\_{\beta})\right] / q
\end{align}
$$
- Calculating correlator involves repeated application of 

<p align="center">
<img src="assets/diag_M_plus.png" width="500">
<img src="assets/diag_M_min.png" width="500">
</p>

#### Typical behaviour of correlations

<p align="center">
<img src="assets/corr.png" width="600">
</p>

- Surprising that correlations can be found at arbitrary distances!

TODO Not restricted to light cone. Can step inside, but at additional cost. Figures from maximal velocity paper.

TODO Add stuff from our superdiffusion paper?

### Operator spreading

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

### Operator entanglement

### Quantum advantage?

This all seems very classical. Aren't quantum computers supposed to do things that classical computers find hard? The key to efficient classical algorithms is the strategy we've been using throughout to arrive at a simple theoretical picture of these system, whether quantum or classical: *averaging*. If one asks about the OTOC in a *given* circuit, there is no simple probabilistic interpretation. As shown in the Appendix of the Google paper, formulating the dynamics of the average OTOC fluctuations leads to model with negative matrix elements, so that Monte Carlo simulations would be afflicted with the [sign problem](https://en.wikipedia.org/wiki/Numerical_sign_problem). In fact, the same issue arises for the average OTOC in models with number conservation ([Rowlands and Lamacraft (2018)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.195125)).

TODO Does this represent the start of lecture 2?

