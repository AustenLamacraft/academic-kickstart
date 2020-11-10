---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# Bose Gas

- Noninteracting bosons form a Bose–Einstein condensate (BEC)
- What do interactions do? 
- BEC closely related to __superfluidity__

$$
\nonumber
\newcommand{\cE}{\mathcal{E}}
\newcommand{\cH}{\mathcal{H}}
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
\newcommand{\Nop}{\mathsf{N}^{\vphantom{\dagger}}}
\newcommand{\bra}[1]{\langle{#1}\rvert}
\newcommand{\ket}[1]{\lvert{#1}\rangle}
\newcommand{\inner}[2]{\langle{#1}\rvert #2 \rangle}
\newcommand{\braket}[3]{\langle{#1}\rvert #2 \lvert #3 \rangle}
\DeclareMathOperator{\sgn}{sgn}
\DeclareMathOperator{\tr}{tr}
\newcommand{\abs}[1]{\lvert{#1}\rvert}
\newcommand{\brN}{\br_1, \ldots, \br_N}
\newcommand{\xN}{x_1, \ldots, x_N}
\newcommand{\zN}{z_1, \ldots, z_N}
$$


---

## Gross--Pitaevskii Approximation

- Variational appraoch to Bose gas (c.f. Hartree–Fock)

- Put all particles in same single particle state!

$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
\label{bose_GPW}
$$

- State with macroscopic number of particles in a single particle state is a __Bose condensate__

---


- For noninteracting Hamiltonian

$$
H = \sum\left[-\frac{\nabla_i^2}{2m} + V(\br_i)\right],
$$

- Ground state is exactly
`$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
$$`
with $\varphi_0(\br)$ the ground state of single particle Hamiltonian

---

- Add interaction

`$$
\begin{align}
H_\text{int.} &= \sum_{j<k} U(\br_j-\br_k) \\
&= \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
\end{align}
$$`

- Ground state is more complicated, but can use BEC form with $\varphi_0(\br)$ as a variational function

- Optimal $\varphi_0(\br)$ obeys __Gross--Pitaevskii equation__

---

### Gross--Pitaevskii Equation

- Take short-ranged interactions for simplicity

$$
U(\br-\br') = U_0\delta(\br-\br')
$$

- For variational calculation we need

$$
\langle E \rangle = \frac{\braket{\Psi}{H}{\Psi}}{\inner{\Psi}{\Psi}}
$$

- Minimize $\braket{\Psi}{H}{\Psi}$ and fix norm. using Lagrange multiplier

`$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N(N-1)U_0\int d\br |\varphi_0(\br)|^4.
\label{bose_energy}
\end{align}
$$`

---

- Neglect difference between $N$ and $N+1$
`$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N^2 U_0\int d\br |\varphi_0(\br)|^4
\end{align}
$$`

- Extremize the functional

$$
\braket{\Psi}{H}{\Psi} - \mu N \int d\br |\varphi_{0}(\br)|^{2}.
$$

- Calculus of variations yields

$$
	\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+NU_0|\varphi_0(\br)|^2\right]\varphi_0(\br)=0.
  \label{bose_static_PreGPEqn}
$$

---

- Define $\varphi(\br)\equiv\sqrt{N}\varphi_{0}(\br)$

- $\varphi(\br)$ is __condensate wavefunction__ or __order parameter__. Obeys __Gross--Pitaevskii equation__

$$
\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+U_0|\varphi(\br)|^2\right]\varphi(\br)=0.
$$

- Fix Lagrange multiplier $\mu$ by $\int d\br\,\abs{\varphi(\br)}^{2}=N$

- $\braket{\Psi}{H}{\Psi}- \mu \int d\br \abs{\varphi(\br)}^{2}=\braket{\Psi}{H-\mu \mathsf{N}}{\Psi}$ was extremized under general variations, including change in $N$
`$$
	\label{bose_static_GPmu}
	\mu=\frac{\partial\braket{\Psi}{H}{\Psi}}{\partial N},
$$`
$\mu$ is identified with the chemical potential.

---

- Nonlinearity of GP equation means there exists a length scale set by the
typical value of $|\varphi(\br)|^2\sim n$ and interaction strength

$$
\xi\equiv \frac{1}{\sqrt{2m n U_0}}
$$

- __healing length__ $\xi$ is scale over which $\varphi(\br)$ is disturbed by introduction
of a localized potential of scale $\ll \xi$

> Near a wall
>
> $$
>  \varphi(x)=\varphi_{\infty}\tanh \frac{x}{\sqrt{2}\xi}
> $$
>
> where $x$ is distance from wall, and $\varphi_{\infty}=\sqrt{n_{\infty}}$ is fixed by the density far away.

---

### Some Observables

- ensity and current density

`$$
\begin{align}
\rho(\br)&=|\varphi(\br)|^2,\\
\mathbf{j}(\br)&=-\frac{i}{2m}\left[\varphi^{*}(\br)\left(\nabla\varphi(\br)\right)-\left(\nabla\varphi^{*}(\br)\right)\varphi(\br)\right]
\end{align}
$$`

- Useful decomposition into magnitude and phase

$$
	\varphi(\br)=\sqrt{\rho(\br)}e^{i\theta(\br)}.
$$

- Using $\mathbf{j}=\rho \mathbf{v}$

- __Superfluid velocity__

$$
	\mathbf{v}_{s}\equiv\frac{1}{m}\nabla\theta.
  \label{bose_vs}
$$

---

### Example: Vortex

Expect \mathbf{v}_{s} to be _irrotational_

$$
\nabla\times \mathbf{v}_s = 0,
$$

or equivalently to have vanishing _circulation_

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=0
$$

around any closed loop. 

---

However, it is possible for the phase of the wavefunction to increase by a multiple of $2\pi$ around a closed loop, which still gives a single-valued condensate wavefunction since $\varphi(\br)=\sqrt{\rho(\br)}e^{i\theta(\br)}$. Thus in general the circulation

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{2\pi \ell}{m},\quad \ell\in\mathbb{Z},
$$

which is known as the __Onsager--Feynmann quantization condition__. A localized configuration with finite circulation is called a __vortex__ in fluid dynamics, but in a normal fluid there is no reason for the vorticity to be quantized. Restoring Planck's constant just this once

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{h\ell}{m},\quad \ell\in\mathbb{Z},
$$

shows that this is a truly _quantum_ phenomenon.

A non-zero winding of the phase requires that $\rho(\br)$ vanishes at a point (in two dimensions) or on a line (in three). Let's see how such configurations are described by the Gross--Pitaevskii theory.
