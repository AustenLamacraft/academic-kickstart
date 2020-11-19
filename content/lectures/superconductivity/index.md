---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# Superconductivity

- __Bardeen, Cooper and Schrieffer's__ (BCS) theory of superconductivity

- Idea: electrons in a superconductor bind to form __Cooper pairs__ that behave like bosons

- The phenomena of superconductivity and superfluidity are closely linked: superconductor is 'like' BEC of Cooper pairs


$$
\nonumber
\newcommand{\cN}{\mathcal{N}}
\newcommand{\cO}{\mathcal{O}}
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
\newcommand{\alop}{\alpha^{\vphantom{\dagger}}}
\newcommand{\aldop}{\alpha^\dagger}
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

- Same Hamiltonian as before

$$
H = \int d\br\left[ \sum_{s=\uparrow,\downarrow}\frac{1}{2m}\nabla\pdop_s\cdot\nabla\pop_s + U_0 \pdop_\uparrow\pdop_\downarrow\pop_\downarrow\pop_\uparrow\right].
\label{super_model}
$$

- For a pair of particles of opposite spin, this is equivalent to

$$
H = -\frac{1}{2m}\left[\nabla_1^2+\nabla^2\right] + U_0\delta(\br_1-\br_2).
$$

- For $U_0<0$ and sufficiently large, expect a bound state to form with a symmetric spatial wavefunction and a spin singlet

--- 

### The BCS Wavefunction

In momentum space our Hamiltonian is

$$
H =\sum_{\bk,s} \epsilon(\bk)\adop_{\bk,s}\aop_{\bk,s} + \overbrace{\frac{U_0}{V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1,\uparrow}\adop_{\bk_2,\downarrow}\aop_{\bk_3,\downarrow}\aop_{\bk_4,\uparrow}}^{\equiv H_\text{int}},
$$

- Take interaction between the two species to be attractive $U_0<0$

- Ground state of non-interacting problem is

$$
\ket{\text{FS}}=\prod_{|\bp|<k_\text{F}} \adop_{\bp\uparrow}\adop_{\bp\downarrow}\ket{\text{VAC}}.
$$

---

Application of interaction Hamiltonian $H_\text{int}$ generates terms of form

$$
\adop_{\bp+\bq\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'+\bq\uparrow}\ket{\text{FS}}.\qquad |\bp|,|\bp+\bq|>k_\text{F},\, |\bp'|,|\bp'+\bq|<k_\text{F}.
$$

- Note difference from Bose case: don't just
create pair excitations with zero centre of mass momentum $\bq=0$

- Nevertheless, BCS theory
makes assumption that ground state involves a superposition of zero momentum pairs only

- We can write such a state very generally as

$$
\ket{\text{pair}}\equiv\sum_{\sum_\bp n^P_\bp=N/2} c_{\{n^P_{\bp}\}} \prod_{\bp}\left[\adop_{\bp\uparrow}\adop_{-\bp\downarrow}\right]^
{n_{\bp}}\ket{\text{VAC}},
\label{pair_fermi}
$$

---

- Restricting ourselves to states of this form means that
$$
\braket{\text{pair}}{H}{\text{pair}} = \frac{U_0}{V}N_\uparrow N_\downarrow+\braket{\text{pair}}{H_{\text{pair}}}{\text{pair}},
$$
where the first term is the Hartree--Fock energy and $H_{\text{pair}}$ is

$$
H_{\text{pair}}=\sum_{\bp,s}\epsilon_{\bp}\adop_{\bp,s}\aop_{\bp, s}+\frac{U_0}{V}\sum_{\bp, \bp'}\adop_
{\bp\uparrow}\adop_{-\bp\downarrow}\aop_{-\bp'\downarrow}\aop_{\bp'\uparrow}.
\label{super_bcsH}
$$

- Can we solve $H_{\text{pair}}$? Introduce $\bdop_\bp=\adop_{\bp\uparrow}\adop_{-\bp
\downarrow}$ 

- Pair Hamiltonian can be written in terms of $\bdop_\bp$, $\bop_\bp$ as

$$
H_{\text{pair}}=2\sum_{\bp}\epsilon_{\bp}\bdop_\bp\bop_\bp+\frac{U_0}{V}\sum'_{\bp,\bp'} \bdop_\bp
\bop_{\bp'}.
\label{pair_h}
$$

---

$$
H_{\text{pair}}=2\sum_{\bp}\epsilon_{\bp}\bdop_\bp\bop_\bp+\frac{U_0}{V}\sum'_{\bp,\bp'} \bdop_\bp
\bop_{\bp'}.
$$

- Pair operators $\bop_\bp$ commute at different momenta
$$
[\bop_\bp,\bop_{\bp'}]=[\bdop_\bp,\bdop_{\bp'}]=[\bdop_\bp,\bop_{\bp'}]=0\qquad \bp\neq\bp',
$$
but obey the _hardcore constraint_

$$
(\bdop_\bp)^2=0,
\label{hardcore}
$$

---

- Try variational state

$$
\ket{N \text{ pair}}\equiv\left[\sum_\bp c_\bp \bdop_\bp\right]^{N/2}\ket{\text{VAC}}
\label{bcs_cons}
$$

- Energy expectation still a tricky problem. For instance, what is the
expectation value of the kinetic energy?

$$
\mathrm{K.E}=2\sum_\bp\epsilon_{\bp}\langle\bdop_\bp\bop_\bp\rangle\equiv 2\sum_\bp\epsilon_{\bp} \langle n^P_
\bp\rangle,
\label{ke}
$$

- Finding average number of pairs $\langle n^P_\bp\rangle$ not
obvious

- BCS considered normalized wavefunction

$$
\ket{\text{BCS}} =\prod_\bp \left[v_\bp\bdop_\bp+u_\bp\right]\ket{\text{VAC}}\qquad |u_\bp|^2+|v_\bp|
^2=1.
\label{bcs}
$$

---
