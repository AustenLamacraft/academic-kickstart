---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []
---

$$
\nonumber
\newcommand{\br}{\mathbf{r}}
\newcommand{\bR}{\mathbf{R}}
\newcommand{\bp}{\mathbf{p}}
\newcommand{\bk}{\mathbf{k}}
\newcommand{\bq}{\mathbf{q}}
\newcommand{\bv}{\mathbf{v}}
\newcommand{\bx}{\mathbf{x}}
\newcommand{\bz}{\mathbf{z}}
\DeclareMathOperator*{\E}{\mathbb{E}}
$$

---

## Quantum Ground States from Reinforcement Learning

Work with Ariel Barr and Willem Gispen

<p align="center">
<img src="assets/ariel.png" height=300>
<img src="assets/willem.png" height=300>
</p>

---

## Schrödinger Equation: 1 Particle

- __Schrödinger picture__: basic object is _wavefunction_ $\psi(\br)$

$$
\overbrace{\left[-\frac{\nabla^2}{2m}+V(\br_i)\right]}^{\equiv H\text{, Hamiltonian}}\psi(\br) = E\psi(\br)
$$

- Discretize on real-space grid $L\times L\times L$


---

## Schrödinger Equation: N Particles

- Wavefunction now has $N$ variables: $\Psi(\br_1,\ldots \br_N)$

`$$
\overbrace{\left[\sum_i\left(-\frac{\nabla_i^2}{2m_i}+V(\br_i)\right)+\sum_{i<j}U(\br_i-\br_j)\right]}^{\equiv H}\Psi(\br_1,\ldots \br_N) = E\Psi(\br_1,\ldots \br_N)
$$`

- Requires grid in $3N$ dimensions of $L^{3N}$ points!
- __Atoms / molecules__ are hard; __matter__ ($N\sim N_\text{A}$) is _impossible_!

---

## Variational Principle

- For _approximate_ $\Psi$ can upper bound _ground state_ $E_0$

`$$
\begin{align}
E_0 &\leq \inf_{\lVert\Psi\rVert=1} \langle \Psi\lvert H\rvert\Psi\rangle\\
\langle \Psi\lvert H\rvert\Psi\rangle &= \int d\br_1\cdots d\br_N \Psi^*(\br_1,\ldots,\br_N)\left[H \Psi\right](\br_1,\ldots,\br_N)
\end{align}
$$`


Challenges

1. Form of $\Psi$
2. Expectation evaluation
3. Optimization

---

## Form of $\Psi$ ('Feature Engineering')

Wavefunctions of restricted form

- Factorized, leading to __Hartree--Fock__ method

$$
\Psi(\br_1,\ldots,\br_N)=\psi_1(\br_1)\ldots \psi_N(\br_N).
$$

- __Jastrow factors__ include pair correlations

`$$
\Psi(\br_1,\ldots,\br_N)\to \Psi(\br_1,\ldots,\br_N)\exp\left(\sum_{i<j}\phi(\br_i-\br_j)\right)
$$`

- Many more...

---

## Expectation evaluation

$|\Psi(\br_1,\ldots,\br_N)|^2$ a probability distribution, so evaluate

`$$
\frac{\langle \Psi\lvert H\rvert\Psi\rangle}{\langle\Psi \vert\Psi\rangle}
 =\int d\bR\,|\Psi(\bR)|^2\frac{\left[H \Psi\right](\bR)}{\Psi(\bR)}
$$`

by Monte Carlo sampling. This is __Variational Monte Carlo (VMC)__

---

## Neural Approaches

$\Psi(\bR)\sim \textsf{NN}(\bR)$ and optimize!

- Carleo and Troyer (2017): lattice models (more later)

- many more...  

- Pfau _et al._ (2019): Fermi Net

__This work__: _path integral representation_

---

## TL;DR



---

## Outline

- The path integral
- Quantum mechanics and optimal control
- Learning the ground state process
- First experiments

---

## Path integral

<p align="center">
<img style="float: right;" src="assets/feynman.png" width="20%">
</p>

- Solution of _time-dependent_ Schrödinger equation

`$$
\begin{align}
i\frac{\partial \psi}{\partial t} &= H\psi\\
\psi(\br_2,t_2) &= \int d\br_1 \mathcal{K}(\br_2,t_2;\br_1,t_1)\psi(\br_1,t_1),\\
  \mathcal{K}(\br_2,t_2;\br_1,t_1) &= \int_{\br(t_1)=\br_1 \atop \br(t_2)=\br_2} \mathcal{D}\br(t)\exp\left(i\int_{t'}^t L(\br(t),\dot{\br})\right)
\end{align}
$$`

- $L(\br,\bv) = \frac{1}{2}\bv^2 - V(\br)$ is the classical Lagrangian

>  My machines came from too far away

---

## Trouble with Feynman?

- "Integration over paths" has never been defined

- Kac (1949) found a workaround for heat-type equations

\begin{align}
  \frac{\partial\psi(\br,t)}{\partial t} = \left[\frac{\nabla^2}{2}-V(\br_i)\right]\psi(\br,t)
\end{align}

- "Imaginary time" Schrödinger. Exponent in PI becomes real

$$
\exp\left(-\int_{t'}^t \left[\frac{1}{2}\dot\br^2 + V(\br)\right]\right)
$$

---

## Feynman—Kac (FK) Formula

...expresses $\psi(\br,t)$ as expectation...

`$$
  \psi(\br_2,t_2) =  \E_{\br(t)}\left[\exp\left(-\int_{t_1}^{t_2}V(\br(t))dt\right)\psi(\br(t_1),t_1)\right]
$$`

<DIV align="right">
...over Brownian paths finishing at $\br_2$ at time $t_2$.
</DIV>



__pic!__

---

## Ground State from PI

- For $t\to\infty$ only _ground state_ contributes

- Spectral representation in terms of $H\varphi_n = E_n\varphi_n$

`\begin{align}
  K(\br_2,t_2;\br_1,t_1) &= \sum_n \varphi_n(\br_2)\varphi^*_n(\br_1)e^{-E_n(t_2-t_1)}\\
  &\longrightarrow \varphi_0(\br_2)\varphi^*_0(\br_1)e^{-E_0(t_2-t_1)} \qquad \text{ as } t_2-t_1\to\infty.
\end{align}`

---

## Path integral Monte Carlo

<p align="center">
<img src="assets/ceperley.png" width="50%">
</p>

<DIV align="right">
  [Ceperley, RMP (1995)](https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.67.279)
</DIV>


---

## The Path Measure

- Relative weight of FK paths given by _Radon-Nikodym derivative_

`$$
  \frac{d\mathbb{P}_\text{FK}}{d\mathbb{P}_B} = Z^{-1}\exp\left(-\int_{t_1}^{t_2}V(\br(t))dt\right)
$$
`

- $Z$ is a normalization factor

- More time in $V(\br)<0$ regions; less in $V(\br)>0$.

__pic__

---

## Born Rule in PI?

- $|\psi(\br)|^2$ is probability distribution. Connection to path measure?

- Consider path passing through `$(\br_-,-T/2)$`, $(\br,0)$ and `$(\br_+,T/2)$`

- Overall propagator is

`$$
  K(\br_+,T/2;\br,0)K(\br,0;\br_-,-T/2;)\sim  |\varphi_0(\br)|^2\varphi_0(\br_+)\varphi^*_0(\br_-)e^{-E_0T}.
$$`

- Sample from FK measure $\leftrightarrow$ sample from $|\varphi_0(\br)|^2$

__pic__

---

## Schrödinger Problem (1931)

<p align="center">
<img style="float: right;" src="assets/schrodinger.png" width="20%">
</p>

-  Diffusion between two distributions $p_{\pm T/2}(\br)$ ?

- Solution written `$p_t(\br) = \varphi_\text{F}(\br,t)\varphi_\text{B}(\br,t)$`

- $\varphi_\text{F/B}(\br,t)$ obeys forward / backward heat equation

- Jamison (1974): process is _Markov_

$$
d\br_t = d\mathbf{B}_t + \bv(\br_t,t)dt,
$$

- Drift $\mathbf{v}(\br_t,t)$ determined by potential `$V(\br)$` and `$p_{\pm T/2}(\br)$`


---

## Optimal Control Formulation

- Cost function

$$
  C_T[\mathbf{v}] = \frac{1}{T}\E\left[\int_0^T\left[\frac{1}{2}(\mathbf{v}(\br_t,t))^2 + V(\br_t)\right]dt\right],
$$

- Holland (1977) showed that



---

## Schrödinger $\leftrightarrow$ Fokker--Planck

---

## Examples

---

## Harmonic Oscillator = OU Process

---

## Calogero = Dyson BM

Example figure showing eigenvalue repulsion

---

## Reinforcement Learning 


---

## Examples

1. Hydrogen
2. Helium
3. Hydrogen molecule
4. Bosons in 2D Gaussian potential

---

## Hydrogen

---

## Helium

Point is that ground state has zero spin, so that spatial wavefunction is symmetric

---

## Hydrogen Molecule

- Electron density
- Exchange?

Pics [here](https://webhome.weizmann.ac.il/home/orcohen/dft_vis/h2.html)


---

---

## Critique

- Why model the drift not the wavefunction? Is calculating gradients better?
- Is sampling better (not just MC)

## Any prospect for excited states?

Initial state dynamics

Angular momentum states

Sign Problem

## Next: Lattice Models
