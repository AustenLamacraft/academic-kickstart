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
\newcommand{\sgn}{\mathrm{sgn}}
\newcommand{\abs}[1]{\lvert{#1}\rvert}
\newcommand{\brN}{\br_1, \ldots, \br_N}
\newcommand{\xN}{x_1, \ldots, x_N}
\newcommand{\zN}{z_1, \ldots, z_N}
$$

# Second Quantization

- Avoid dealing explicitly with $\Psi(\br_1,\ldots,\br_N)$
- Represent $H$ and other operators using occupation numbers
- Synonymous with Quantum Field Theory

---

## Recap: Product States

- Normalized state of $N$ bosons in orthonormal states $\varphi_{\alpha_n}(\br)$ 

`$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N)=\sqrt{\frac{1}{N!\prod_{\alpha}N_{\alpha}!}}\sum_P\varphi_{\alpha_{1}}(\mathbf{r}_{P_1})\varphi_{\alpha_{2}}(\mathbf{r}_{P_2})\cdots\varphi_{\alpha_{N}}(\mathbf{r}_{P_N}),
\label{A_OrthoProd}
$$`

- The normalization factor involves __occupation numbers__ $\{N_{\alpha}\}$ giving number of particles in state $\alpha$.

---

- Unnormalized symmetric product state using $\psi_n(\br)$, not necessarily orthonormal

`$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProd}
$$`

- Inner product with another symmetric state formed from wavefunctions $\phi_n(\br)$

`$$
\Phi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\phi_1(\mathbf{r}_{P_1})\phi_{2}(\mathbf{r}_{P_2})\cdots\phi_{N}(\mathbf{r}_{P_N}).
$$`

`$$
\bra{\Psi}\Phi\rangle = \sum_P \prod_{n=1}^N\bra{\psi_n}\phi_{P_n}\rangle = \operatorname{perm} \bra{\psi_m}\phi_{n}\rangle,
\label{A_perm}
$$`

- This is the [permanent](https://en.wikipedia.org/wiki/Permanent) of the matrix $\bra{\psi_m}\phi_{n}\rangle$

---

## Goal 

- For SHO 
`$$
\frac{1}{\sqrt{n!}}\left(\adop\right)^n\ket{0}\longleftrightarrow \psi_n(x)
$$`
representation using $\aop$, $\adop$ very useful; never need explicit $\psi_n(x)$

- We want 

$$??\longleftrightarrow \Psi^{\text{S}}(\br_1,\ldots,\br_N)$$

- Must respect inner product

---

## Creation & Annihilation Operators

- We consider states with different numbers of particles

- $\ket{\text{VAC}}$ denotes state with no particles (__the vacuum state__)

- $\adop(\psi)$ creates particle in single particle state $\psi(\br)$

$$
\psi(\br)\longleftrightarrow \adop(\psi)\ket{\text{VAC}}.
\label{A_1part}
$$

- Evidently, $\adop(\psi)$ must be linear in $\psi$

$$
\adop\left(c_1\psi_1+c_2\psi_2\right) = c_1\adop(\psi_1)+c_2\adop(\psi_2).
$$


---

- If $\ket{\Psi}$ has $N$ particle state, $\adop(\psi)\ket{\Psi}$ has $N+1$ particles

- Since this is orthogonal to the vacuum state
`$$
\bra{\text{VAC}} \adop(\psi)\ket{\Psi}=0,
$$`
for any state $\ket{\Psi}$

- Taking the adjoint, this means
`$$
\aop(\psi)\ket{\text{VAC}}=0.
$$`


---

- $N$ particle product state

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}.
\label{A_NPart}
$$

- To be _symmetric_ wavefunction, we must have
`$$
\left[\adop(\psi),\adop(\phi)\right]=0
\label{A_adcommute}
$$`
for any states $\psi(\br)$ and $\phi(\br)$. Taking the adjoint gives

$$
\left[\aop(\psi),\aop(\phi)\right]=0
\label{A_acommute}
$$

---

- Inner product between two one particle states

$$
\bra{\psi}\phi\rangle = \braket{\text{VAC}}{\aop(\psi)\adop(\phi)}{\text{VAC}}.
$$

- We impose
`$$
\left[\aop(\psi),\adop(\phi)\right] = \inner{\psi}{\phi}.
\label{A_ada}
$$`
together with $\aop(\psi)\ket{\text{VAC}}=0$ this gives correct inner product

> Show that this also reproduces the inner product for $N$-particle product states

---


## Choosing a basis

- Orthonormal basis by $\varphi_\alpha(\br)$

$$
\adop(\varphi_\alpha)\equiv \adop_\alpha,\quad \aop(\varphi_\alpha)\equiv \aop_\alpha.
\label{A_CCRBasis}
$$

Then we have

$$
\begin{align}
\left[\aop_\alpha,\aop_\beta\right]=0,\quad \left[\adop_\alpha,\adop_\beta\right]=0,\quad \left[\aop_\alpha,\adop_\beta\right] = \delta_{\alpha\beta}.
\end{align}
$$

- Same as ladder operators of a set of harmonic oscillators

`$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N) \longleftrightarrow\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop_\alpha\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}}
$$`

---

- `$\Nop_{\alpha}\equiv \adop_{\alpha}\aop_{\alpha}$` is __number operator__ for state $\alpha$

$$
\label{2nd_quant_NOp}
	\Nop_{\alpha}\ket{\mathbf{N}}=N_{\alpha}\ket{\mathbf{N}}.
$$

- Commutation relations tell us

$$
\begin{align}
	\left[\aop_{\alpha},\Nop_{\alpha}\right]=\aop_{\alpha}\qquad
	\left[\adop_{\alpha},\Nop_{\alpha}\right]=-\adop_{\alpha}.
  \label{2nd_quant_NaComm}
\end{align}
$$

- I think of the first one as: 

> "count then destroy minus destroy then count"

---

## Change of basis

- Move to different basis $\{\ket{\tilde{\varphi}_{\alpha}}\}$

`$$
	\label{2nd_quant_BasisChange}
	\ket{\tilde{\varphi}_{\alpha}}=\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\ket{\varphi_{\beta}}.
$$`

- One particle states with wavefunctions $\varphi_{\alpha}(\br)$ are $\adop_{\alpha}\ket{\text{VAC}}$. So,

$$
	\label{2nd_quant_BasisChangeCreation}
	\tilde{\adop_{\alpha}}\equiv\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\adop_{\beta}.
$$

---

- Often we work in position eigenstates $\{\ket{\br}\}$, so $\inner{\varphi_{\beta}}{\br}=\varphi^{*}_{\beta}(\br)$

- Denoting corresponding creation operator as $\pdop(\br)$

$$
	\label{2nd_quant_PsiDDef}
	\pdop(\br)\equiv\sum_{\beta}  \varphi^{*}_{\beta}(\br)\adop_{\beta}.
$$

- Conjugate is

$$
	\label{2nd_quant_PsiDef}
	\pop(\br)\equiv\sum_{\beta}  \varphi_{\beta}(\br)\aop_{\beta},
$$

---

- These are __quantum fields__ with commutation relations

`$$
\begin{gather}
	\left[\pop(\br_1),\pdop(\br_2)\right]=\delta(\br_1-\br_2)\nonumber\\
	\left[\pop(\br_1),\pop(\br_2)\right]=\left[\pdop(\br_1),\pdop(\br_2)\right]=0.
	\label{2nd_quant_PositionRelations}
\end{gather}
$$`

> If a state $\ket{\Psi}$ has wavefunction $\Psi(x_1,\ldots, x_N)$, show that the wavefunction of the state $\pop(X)\ket{\Psi}$ is the $N-1$ particle wavefunction
>
>$$
>\sqrt{N}\Psi(X,x_1,\ldots, x_{N-1})
>$$
>
>Hint: Show that is is true for a product state first.

---

- Often use eigenstates of the free particle Hamiltonian $H=\frac{\bp^{2}}{2m}$ with periodic boundary conditions
`$$
\begin{align}
	\label{2nd_quant_FreeParticleStates}
	\ket{\bk}=\frac{\exp(i\bk \cdot \br)}{\sqrt{V}}, \quad \bk=2\pi\left(\frac{n_{x}}{L_{x}},\frac{n_{y}}{L_{y}},\frac{n_{z}}{L_{z}}\right),\quad n_{x,y,z}\text{ integer},
\end{align}
$$
with $V=L_{x}L_{y}L_{z}$`

- Matrix elements of transformation between to position basis $\{\ket{\br}\}$ are $\bra{\bk}\br\rangle=\exp(-i\bk \cdot \br)/\sqrt{V}$
`$$
	\label{2nd_quant_PositionAnnihilation}
	\pdop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(-i\bk\cdot\br)\adop_{\bk},
$$`
and similarly
`$$
	\label{2nd_quant_PositionCreation}
	\pop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(i\bk\cdot\br)\aop_{\bk}.
$$`

---

>What is the wavefunction of the two-particle state
>
>$$
>\sum_\bk c_k \adop_\bk\adop_{-\bk}\ket{\text{VAC}}?
>$$

---

## Fermions

- Trickier on account of minus signs! Seek a representation of
`$$
\Psi^{\text{A}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P (-1)^P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProdAnti}
$$`
Note that overall sign fixedlabelling of the states $\psi_j$

- If $\Psi^{\text{A}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}$ we'll need
`$$
\left\{\adop(\psi),\adop(\phi)\right\}=0,
\label{A_adanticommute}
$$`
for any states $\psi(\br)$ and $\phi(\br)$, where $\{A,B\}\equiv AB+BA$ is called the __anticommutator__. Also

`$$
\left\{\aop(\psi),\aop(\phi)\right\}=0.
\label{A_aanticommute}
$$`

---

- `$\left\{\adop(\psi),\adop(\phi)\right\}=0$` can be deduced from inner product
`$$
\bra{\Psi}\Phi\rangle = \sum_P (-1)^P\prod_{n=1}^N\bra{\psi_n}\phi_{P_n}\rangle = \det \bra{\psi_m}\phi_{n}\rangle,
\label{A_det}
$$`
which works out if

`$$
\left\{\aop(\psi),\adop(\phi)\right\} = \inner{\psi}{\phi}.
\label{A_adaanti}
$$`

> Check this.

- Introducing field operators in position basis as before leads to

`$$
\begin{gather}
	\left\{\pop(\br_1),\pdop(\br_2)\right\}=\delta(\br_1-\br_2)\nonumber\\
	\left\{\pop(\br_1),\pop(\br_2)\right\}=\left\{\pdop(\br_1),\pdop(\br_2)\right\}=0.
	\label{2nd_quant_PositionRelationsAnti}
\end{gather}
$$`

---

## Explicit Form of Operators

> Think about the form that the operators $\aop_\alpha$, $\adop_\alpha$ take in the basis of product states. Start with one state $\varphi_\alpha$. What's the matrix form of $\adop_\alpha$ in terms of states $\ket{N_\alpha}$? Now consider two states. Can you see how the commutation and anticommutation relations can be satisfied?

