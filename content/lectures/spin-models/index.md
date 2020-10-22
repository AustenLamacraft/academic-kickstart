---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# Spin Models

- Up to now our degrees of freedom have been __particles__

- In this lecture: systems of interacting __spins__

$$
\nonumber
\newcommand{\cN}{\mathcal{N}}
\newcommand{\br}{\mathbf{r}}
\newcommand{\bp}{\mathbf{p}}
\newcommand{\bk}{\mathbf{k}}
\newcommand{\bq}{\mathbf{q}}
\newcommand{\bv}{\mathbf{v}}
\newcommand{\pop}{\psi^{\vphantom{\dagger}}}
\newcommand{\pdop}{\psi^\dagger}
\newcommand{\Pop}{\Psi^{\vphantom{\dagger}}}
\newcommand{\Pdop}{\Psi^\dagger}
\newcommand{\Phop}{\Phi^{\vphantom{\dagger}}}
\newcommand{\Phdop}{\Phi^\dagger}
\newcommand{\phop}{\phi^{\vphantom{\dagger}}}
\newcommand{\phdop}{\phi^\dagger}
\newcommand{\aop}{a^{\vphantom{\dagger}}}
\newcommand{\adop}{a^\dagger}
\newcommand{\bop}{b^{\vphantom{\dagger}}}
\newcommand{\bdop}{b^\dagger}
\newcommand{\cop}{c^{\vphantom{\dagger}}}
\newcommand{\cdop}{c^\dagger}
\newcommand{\bra}[1]{\langle{#1}\rvert}
\newcommand{\ket}[1]{\lvert{#1}\rangle}
\newcommand{\inner}[2]{\langle{#1}\rvert #2 \rangle}
\newcommand{\braket}[3]{\langle{#1}\rvert #2 \lvert #3 \rangle}
\newcommand{\sgn}{\mathrm{sgn}}
\newcommand{\brN}{\br_1, \ldots, \br_N}
\newcommand{\xN}{x_1, \ldots, x_N}
\newcommand{\zN}{z_1, \ldots, z_N}
$$

---

## Ising Model

$$
H = J\sum_{\langle j\,k\rangle} \sigma_j \sigma_k,
\label{spin_ising}
$$

- 'spin' variables $\sigma_j=\pm 1$ 

-  ${\langle j\,k\rangle}$ indicates sum over nearest neighbour pairs

- $J<0$ favours aligned spins, leading to __ferromagnetism__

__But__... not really a quantum model


---

## $N$ spin-1/2: states and operators

- 1 spin-1/2: $\psi_{\pm}$ in $s^z$ basis (say). $N$-spins: $\Psi_{\sigma_1,\ldots \sigma_N}$ has $2^N$ components

- Product states $\ket{\sigma_1}\ket{\sigma_2}\cdots \ket{\sigma_N}$ form a basis

$$
\ket{\Psi}=\sum_{\{\sigma_j=\pm\}}\Psi_{\sigma_1\cdots \sigma_N}\ket{\sigma_1}\ket{\sigma_2}\cdots \ket{\sigma_N}
$$

---

## Tensor product

- For (distinguishable) particles product states were

$$
 \label{quantum_statistics_disting}
 \Psi_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}(\br_1,\ldots \br_N)=\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})
$$

- Abstract form

$$
 \ket{\Psi_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}}=\ket{\varphi_{\alpha_{1}}}\ket{\varphi_{\alpha_{2}}}\cdots\ket{\varphi_{\alpha_{N}}}
$$

- This is a [tensor product](https://en.wikipedia.org/wiki/Tensor_product), normally denoted

$$
\ket{\Psi_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}}=\ket{\varphi_{\alpha_{1}}}\otimes\ket{\varphi_{\alpha_{2}}}\cdots\otimes\ket{\varphi_{\alpha_{N}}}
$$

- We drop the $\otimes$ for brevity

---

## Operators

- Spin operators obey $[s^a,s^b]=i\epsilon_{abc}s^c$

- A spin operator $s^a_j$ acts on $j^\text{th}$ spin

$$
s^a_j\ket{\sigma_1}\ket{\sigma_2}\cdots \ket{\sigma_N} = \ket{\sigma_1}\ket{\sigma_2}\cdots \ket{\sigma_{j-1}} (s^a \ket{\sigma_j}) \ket{\sigma_{j+1}}\cdots\ket{\sigma_N}
$$


- Which is the same as

$$
s^a_j = \overbrace{\mathbb{1}\otimes \cdots \mathbb{1}}^{j-1}\otimes s^a \otimes \overbrace{\mathbb{1} \otimes\cdots \mathbb{1}}^{N-j}
$$

> What is $[s^a_j,s^b_k]$ for $j\neq k$?

---

- Ising model Hamiltonian

$$
H = 4J\sum_{\langle j\,k\rangle} s^z_j s^z_k
$$

- Eigenstates are product states $\ket{\sigma_1}\ket{\sigma_2}\cdots \ket{\sigma_N}$ with energy 

$$
E_{\sigma_1\cdots \sigma_N} = J\sum_{\langle j\,k\rangle} \sigma_j \sigma_k
$$

- Fine for statistical mechanics but a bit boring for QM!

---

## Heisenberg Model

- More realistic

$$
H = J \sum_{\langle j\,k\rangle} \mathbf{s}_j \cdot \mathbf{s}_k.
\label{spin_Hberg}
$$

- $\left[s^a_j,s^b_k\right]=i\delta_{jk}\epsilon_{abc}s^c_j$

- Unlike the elastic lattice, not possible to solve _in general_

- Captures many of the dynamical features (e.g. spin waves) of real magnetic materials.

---

## Heisenberg Ferromagnetic Chain

- Begin with the 1D case

$$
H = J \sum_{j=1}^N \mathbf{s}_j \cdot \mathbf{s}_{j+1},
$$

- As usual $\mathbf{s}\_j=\mathbf{s}_{j+N}$ (periodic boundary conditions). 

- Some anisotropic materials have magnetic atoms arranged in weakly coupled chains

---

- It's often useful to write
`$$
\mathbf{s}_j \cdot \mathbf{s}_{j+1} = s^z_js^z_{j+1} + \frac{1}{2}\left(s^+_js^-_{j+1} +s^-_js^+_{j+1}\right),
$$`
where $s^\pm = s^x\pm i s^y$
`$$
s^+ = \begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix},\qquad s^- = \begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix}
$$`
are the spin raising and lowering operators

---

## Ground state for $J<0$

$$
\ket{\text{FM}} \equiv \ket{+}_1 \ket{+}_2 \cdots \ket{+}_N 
$$

> Show that this is eigenstate of $H$ with $E_0\equiv JN/4$

- Also eigenstate of $S^z$ and $\mathbf{S}^2$, where $\mathbf{S}$ is total spin

$$
\mathbf{S} = \sum_{j=1}^N \mathbf{s}_j=(S^x, S^y, S^z)
$$

- Eigenvalues are $S^z = N/2$ and $\mathbf{S}^2 = \frac{N}{2}\left(\frac{N}{2}+1\right)$.

---

## Ground state multiplet

 - Rotational invariance implies that $\ket{\text{FM}}$ is member of multiplet of $N+1$ degenerate eigenstates related by rotations
 
- These states can be generated by acting with $S^-=S^x-iS^y$
$$
S^-\ket{\text{FM}} = \sum_{j=1}^N s^-_j\ket{\text{FM}} = \sum_{j=1}^N \ket{+}_1\ket{+}_2\cdots \ket{+}_{j-1} \ket{-}_j\ket{+}_{j+1}\cdots \ket{+}_N.
\label{spin_Lowered}
$$

> $S^z = N/2-1$, but $\mathbf{S}^2$ and $H$ unchanged.

- $\left(S^-\right)^2\ket{\text{FM}}$ is constant amplitude superposition of states with two spins flipped, etc.

---

## First Excited States

What about?

`$$
\ket{j} = \ket{+}_1\ket{+}_2\cdots \ket{+}_{j-1} \ket{-}_j\ket{+}_{j+1}\cdots \ket{+}_N.
$$`

- Is this an eigenstate? Act with Hamiltonian, using

`$$
 \mathbf{s}_j \cdot \mathbf{s}_{j+1} = s^z_js^z_{j+1} + \frac{1}{2}\left(s^+_js^-_{j+1} +s^-_js^+_{j+1}\right),
$$`

- Note that `$P_{j,j+1}\equiv s^+_j s^-_{j+1} +s^-_js^+_{j+1}$` _exchanges_ labels

$$
P_{j,j+1}\ket{+}_j\ket{-}_{j+1} = \ket{-}_j\ket{+}_{j+1}.
$$

--- 

- Action of $H$ on $\ket{j}$ is
`$$
H\ket{j} = (1-N/4) \ket{j} - \frac{1}{2}\left(\ket{j-1}+\ket{j+1}\right).
$$`
(set $J=-1$ from now)

- Leaves us in subspace spanned by states $\ket{j}$: this is subspace with $S_z=N/2-1$

- Flips are like _particles_ (__magnons__), with Hamiltonian conserving number

---

- Eigenstates are plane waves
`$$
H\ket{j} = (1-N/4) \ket{j} - \frac{1}{2}\left(\ket{j-1}+\ket{j+1}\right).
$$`
`$$
\begin{equation}
\ket{\eta} = \frac{1}{\sqrt{N}}\sum_{j=1}^N e^{i\eta j}\ket{j}, \qquad \eta = \frac{2\pi n}{N}, n = -(N-1)/2,\ldots, (N-1)/2
\end{equation}
$$`

- Eigenvalues $E = E_0 + \omega(\eta)$

$$
\omega(\eta) = 2\sin^2\eta/2.
\label{spin_dispersion}
$$

- Dispersion is periodic, as for elastic chain, but quadratic, rather than linear, at small $\eta$

- $\eta=0$ corresponds to the state $S^-\ket{\text{FM}}$


---

## $N$-Magnon States

- A magnon has energy $\propto J$

- System with extensive energy / finite temperature must have _many_ magnons

- Dimension of subspace of $n$ flipped spins is $\binom{N}{n}$

- Magnons can't sit on the same site. Things get difficult!

---

## Ground state for $J>0$?

- Ground state has $S=0$, so $S^z=0$, or $n=N/2$ magnons

- Complicated _dense_ gas of interacting magnons!

- Let's consider a simpler model

---

## Antiferromagnets Are Different!

- Let's try and _guess_ the ground state for $J>0$

- Since anti-aligning spins should be favoured, we might try
`$$
\ket{\text{AFM}}  \equiv \ket{+}_1\ket{-}_{2}\cdots \ket{+}_{N-1}\ket{-}_{N},
\label{spin_AFM}
$$`

- What does $H$ do? Remember 
`$$
 \mathbf{s}_j \cdot \mathbf{s}_{j+1} = s^z_js^z_{j+1} + \frac{1}{2}\overbrace{\left(s^+_js^-_{j+1} +s^-_js^+_{j+1}\right)}^{P_{j,j+1}, \text{ exchange}},
$$`
spin flip terms cause spins to move about. Ground state is more complicated!

- For the AFM chain, quantum fluctuations too strong for AFM order

- __Antiferromagnets__ do exist in higher dimensions, and [Néel](https://en.wikipedia.org/wiki/Louis_N%C3%A9el) state $\ket{\text{AFM}}$ is good starting approximation

---

## Large $s$ Expansion

- Generalize model to $s>1/2$ (magnetic ions can have higher spin)

- Develop approximations that work for $s\gg 1/2$

- Hope that the _qualitative_ behaviour we find holds for $s=1/2$

---

## Holstein--Primakoff Representation

- Represent spins as oscillators!

- Coupled spins becomes coupled oscillators

- Representation not linear, so we get anharmonic chain

- Harmmonic approximation justified when spin large

---

`$$
\begin{align}
S^+ &=\sqrt{2s}\sqrt{1-\frac{\adop\aop}{2s}}\aop \\
S^- &= \sqrt{2s}\adop\sqrt{1-\frac{\adop\aop}{2s}} \\
S^z &= \left(s - \adop \aop\right).
\end{align}
$$`

> Show that $[\aop,\adop]=1$ reproduces the spin commutation relations $[s^a,s^b]=i\epsilon_{abc}s^c$

---

## One way to think of it...

- $S^{\pm}$ and $\aop$, $\adop$ both shift us up and down a ladder of states.
$$
S^\pm\ket{s,m} = \sqrt{s(s+1)-m(m\pm 1)}\ket{s,m\pm 1}
$$
Relation between $S^z$ and number of quanta is simple. 

- Oscillator ground state corresponds to $\ket{s,s}$.

- Difference: $2s+1$ spin states, but infinite oscillator states

- $S^+\propto \aop$, $S^-\propto \adop$ doesn't work. Something needed to stop us lowering beyond $S^z=-s$

$$
S^- = \sqrt{2s}\adop\sqrt{1-\frac{\adop\aop}{2s}}
$$


---

## Another way...

<p align="center">
<img src="assets/tangent-plane.png" alt="drawing" width="500" class="center"/>
</p>

- Classical spin described by point on sphere of radius $\sim s$

- Large $s$: approximate locally by plane

- Near north pole $[S^x,S^y]=is^z\sim is$ resembles $[x,p]=i$

- Therefore $S^\pm$ resemble $\aop$, $\adop$

---

## Harmonic Spin Waves

- Large $s$ approximation
`$$
\begin{align}
S^+ &\sim \sqrt{2s}\aop \qquad S^- \sim  \sqrt{2s}\adop \qquad S_z = \left(s - \adop \aop\right).
\label{spin_HPapprox}
\end{align}
$$`
neglecting terms of order $s^{-1/2}$. 

- Heisenberg Hamiltonian becomes quadratic oscillator Hamiltonian
`$$
\begin{align}
S^x &\sim \sqrt{s}x \nonumber\\
S^y &\sim  \sqrt{s}p\nonumber\\
S_z &= \left(s - \frac{1}{2}[x^2 + p^2 - 1] \right),
\end{align}
$$`
where $x = \frac{1}{\sqrt{2}}(\aop+\adop)$ and $p = \frac{i}{\sqrt{2}}(\adop-\aop)$

---

`$$
\begin{align}
S^x &\sim \sqrt{s}x \nonumber\\
S^y &\sim  \sqrt{s}p\nonumber\\
S_z &= \left(s - \frac{1}{2}[x^2 + p^2 - 1] \right),
\end{align}
$$`

$$H = J \sum_{j=1}^N \mathbf{s}_j \cdot \mathbf{s}_{j+1}$$

$$
H\sim NJ s^2 - sJ- \overbrace{sJ \sum_{j=1}^N \left[x_j x_{j+1} + p_j p_{j+1}-x_j^2 - p_j^2\right]}^{\equiv H^{(2)}} + \ldots,
\label{spin_Harmonic}
$$

---

Use Fourier expansion of the position and momentum
`$$
\begin{align}
x_j(t) &= \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} q_n(t) e^{i\eta_n j},\nonumber\\
p_j(t) &= \frac{1}{\sqrt{N}}\sum_{|n| \leq (N-1)/2} \pi_n(t) e^{-i\eta_n j}\\
H^{(2)} &= -2sJ \sum_{|n| \leq (N-1)/2} \sin^2(\eta_n/2)\left[q_n q_{-n} + \pi_n\pi_{-n}\right]
\end{align}
$$`

- We can read off dispersion
`$$
\omega_{\text{FM}}(\eta) = 4s\left|J\right|\sin^2(\eta/2)
$$`
c.f. $\omega(\eta) = 2\sin^2\eta/2$ that we found for $s=1/2$

---

## AFM case

- Close to FM state few oscillator quanta, and harmonic approximation OK

- Classically, small amplitude oscillations of a nonlinear system treated may be treated as linear

- What abouto AFM case? Make it _look_ like FM

- Rotate every other spin through $\pi$ about the $y$ axis, so that

$$
(s^x_j,s^y_j,s^z_j)\longrightarrow (-s^x_j,s^y_j,-s^z_j),\quad j\text{ odd}.
$$

- The Heisenberg chain Hamiltonian then becomes
`$$
H = -J \sum_{j=1}^N \left[s^x_j s^x_{j+1} - s^y_j s^y_{j+1} + s^z_j s^z_{j+1}\right].
$$`


---

- Now harmonic approximation means we are close to AFM in original variables

- Oscillator Hamiltonian is now
`$$
H^{(2)} = 2sJ \sum_{|n| \leq (N-1)/2} \left[\sin^2(\eta/2)q_n q_{-n} + \cos^2(\eta/2)\pi_n\pi_{-n}\right],
\label{spin_H2AFM}
$$`
corresponding to a dispersion relation

$$
\omega_{\text{AFM}}(\eta) = 2sJ\left|\sin(\eta)\right|.
\label{spin_AFMDispersion}
$$

---

$$
\omega_{\text{AFM}}(\eta) = 2sJ\left|\sin(\eta)\right|.
$$

- Vanishes at both $\eta=0$ and Brillouin zone boundary $\eta=\pi$

- Linear in the vicinity of both points, compared with quadratic behaviour of the ferromagnet

- Compare
`$$
H_\text{FM}^{(2)} = -2sJ \sum_{|n| \leq (N-1)/2} \sin^2(\eta_n/2)\left[q_n q_{-n} + \pi_n\pi_{-n}\right]
$$`
In FM both position and momentum terms vanish at $\eta=0$

- In AFM position term vanishes here, with momentum term vanishing at $\eta=\pi$.

---

$$
\omega_{\text{AFM}}(\eta) = 2sJ\left|\sin(\eta)\right|.
$$

- We know (by other means) exact dispersion relation for lowest excited state of momentum $\eta$ (__des Cloiseaux--Pearson__ mode)
`$$
\omega_{\text{dCP}}(\eta) = \frac{\pi J}{2}\left|\sin(\eta)\right|,
\label{spin_dCP}
$$`
Same functional form, but with a different overall scale

<p align="center">
<img src="assets/Heisenberg_model_dispersion.png" alt="drawing" width="500" class="center"/>
</p>