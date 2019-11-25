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

- Factorized

$$
\Psi(\br_1,\ldots,\br_N)=\psi_1(\br_1)\ldots \psi_N(\br_N).
$$

- _Jastrow factors_ include pair correlations

`$$
\Psi(\br_1,\ldots,\br_N)\to \Psi(\br_1,\ldots,\br_N)\exp\left(\sum_{i<j}\phi(\br_i-\br_j)\right)
$$`

- Many more...

---

## Expectation evaluation

$|\Psi(\br_1,\ldots,\br_N)|^2$ a probability distribution, so evaluate

`$$
\frac{\langle \Psi\lvert H\rvert\Psi\rangle}{\langle \vert\Psi\rangle}
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
\left[i\frac{\partial}{\partial t} - H\right]\psi &= 0\\
\psi(\br_2,t_2) &= \int d\br_1 \mathcal{K}(\br_2,t_2;\br_1,t_1)\psi(\br_1,t_1),\\
  \mathcal{K}(\br_2,t_2;\br_1,t_1) &= \int_{\br(t_1)=\br_1 \atop \br(t_2)=\br_2} \mathcal{D}\br(t)\exp\left(i\int_{t'}^t L(\br(t),\dot{\br})\right)
\end{align}
$$`

Picture of trajectory

Imaginary exponent

>  My machines came from too far away

---

## Trouble with Feynman



---

## Feynman—Kac

- Heat equation $\leftrightarrow$ Schrödinger in "imaginary time"

---

## Born Rule

---

## Schrödinger Problem

Schrödinger's process

---

## Path integral Monte Carlo

[Recent work on nanodroplets](https://www.diva-portal.org/smash/get/diva2:828485/FULLTEXT01.pdf)

<p align="center">
<img src="assets/ceperley.png" width="50%">
</p>

Pictures from Ceperley, Nagasawa

---

## Quantum Mechanics and Optimal Control


---

## Examples

---

## Harmonic Oscillator = OU Process

---

## Calogero = Dyson BM

Example figure showing eigenvalue repulsion

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
