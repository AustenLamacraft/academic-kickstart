---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# More Second Quantization

- [Lecture 1]({{< ref "many-body-wavefunctions" >}}): density correlations in ground state of 1D Fermi gas

$$
\rho_2(x,y) = n^2\left[1 - \left(\frac{\sin[k_\text{F}(x-y)]}{k_\text{F}(x-y)}\right)^2\right].
\label{more_rho2evalFermi}
$$

- How to find this using second quantization?

- What can these correlations tell us about interactions?

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

## Correlation Functions

In [Lecture 1]({{< ref "many-body-wavefunctions" >}}) we introduced __pair distribution function__

$$
\rho_2(x_1,x_2) = N(N-1) \int dx_3\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2,
\label{more_pdf}
$$

which measures the likelihood of finding a pair of particles at $x_1$ and $x_2$. We also saw that $\rho_2(x_1,x_2)$ could be related to the expectation of the product of the density operators $\rho(x)$ at different points.

$$
\rho_2(x_1,x_2) = \bra{\Psi}\rho(x_1)\rho(x_2)\ket{\Psi} - \rho_1(x_1)\delta(x_1-x_2),
\label{more_rhorhonorm}
$$

where $\rho_1(x)= \braket{\Psi}{\rho(x)}{\Psi}$. $\rho_2(x,y)$ is the simplest example of a __correlation function__. Note also that the quantity $\bra{\Psi} \rho_q \rho_{-q} \ket{\Psi}$, used to quantify the crystalline order in a solid in [Lecture 3]({{< ref "elastic-chain" >}}), is just the Fourier transform of $\rho_2(x_1,x_2)$. Higher correlation functions, involving products of more than two density operators, provide more detailed information on the distribution of the particles.

---

## Correlation from Second Quantization

$$
\rho_2(x,y) = n^2\left[1 - \left(\frac{\sin[k_\text{F}(x-y)]}{k_\text{F}(x-y)}\right)^2\right].
$$

- Let's reproduce using second quantization
`$$
\begin{align}
\rho_2(x_1,x_2) &= N(N-1) \int dx_3\ldots dx_N \,\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2,\\
 &=\braket{\Psi}{\sum_{j\neq k}\delta(x-x_j)\delta(y-x_k)}{\Psi}.
\end{align}
$$`
Expectation value of two particle operator

$$
B{jk}=\delta(x-x_j)\delta(y-x_k)
$$

- Second quantized form

$$
\rho_2(x,y) =\braket{\Psi}{\pdop(x)\pdop(y)\pop(y)\pop(x)}{\Psi}.
\label{more_rho22ndquant}
$$


---

- Operators in which all annihilation operators stand to the right of all creation operators are said to be __normal ordered__

- Here, normal ordering serves to ensure that a term with $j=k$ does not appear in $\rho_2(x,y)$

- Two particle terms in the Hamiltonian are normal ordered for the same reason.

---


`$$
\begin{align}
	\pop(x)=\sum_{\beta}  \varphi^{}_{\beta}(x)\aop_{\beta},\\
  \pdop(x)=\sum_{\beta}  \varphi^*_{\beta}(x)\adop_{\beta}.
\end{align}
$$`

- This gives

$$
	\label{2nd_quant_CEval}
	\rho_2(x,y)=\sum_{\alpha, \beta, \gamma, \delta}\varphi^{*}_{\alpha}(x)\varphi^{*}_{\beta}(y)\varphi^{}_{\gamma}(y)\varphi^{}_{\delta}(x)\braket{\Psi}{\adop_{\alpha}\adop_{\beta}\aop_{\gamma}\aop_{\delta}}{\Psi}.
$$

