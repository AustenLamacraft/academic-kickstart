---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# Response & Correlation

- Calculating eigenstates and eigenenergies is one thing, but what do experimentalists actually measure?

- Want to understand how many body systems _respond_ dynamically to an external probe

- Time evolution of _spontaneous fluctuations_ (thermal or quantum) obeys similar dynamics $\longrightarrow$ __fluctuation–dissipation relation__




$$
\nonumber
\newcommand{\cN}{\mathcal{N}}
\newcommand{\cO}{\mathcal{O}}
\newcommand{\cP}{\mathcal{P}}
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
\DeclareMathOperator*{\E}{\mathbb{E}}
\DeclareMathOperator*{\tr}{tr}
$$



---

## Response of a Damped Oscillator

- Start with the simple stuff...

$$
m\ddot y +m\omega_0^2 y + \gamma \dot y =f(t).
\label{res_sho}
$$

- Find $y(t)$ given $f(t)$. Linear system, so by superposition have

$$
y(t) = \int \chi(t,s) f(s)\,ds.
$$

- $\chi(t,s)$ is first example of a __response function__, __Green's function__, or __susceptibility__

---

## General properties

1. Response is __causal__, meaning that, since effect follows cause:

$$
\chi(t,s)=0,\quad \text{for }t<s.
$$

2. No explicit time dependence in equation of motion, so in face $\chi(t,s)=\chi(t-s)$

3. $\chi(t)$ is solution with a $\delta$-function force at $t=0$.

$$
m\ddot \chi +m\omega_0^2 \chi + \gamma \dot \chi =\delta(t).
\label{res_chiode}
$$

---

## Finding $\chi(t-s)$: Method 1


- Free motion of the oscillator can be written $e^{-i\omega t}$, where $\omega$ satisfies
$$
m\omega^2+i\gamma\omega - m\omega_0^2 =0,
$$
$$
\omega_{\pm} = \pm \sqrt{\omega_0^2-\frac{\gamma^2}{4m^2}}-i\frac{\gamma}{2m} \equiv \pm\omega_1-i\frac{\gamma}{2m}.
$$

- Since $\chi(t)=0$ for $t<0$, so to get $\delta$-function in
$$
m\ddot \chi +m\omega_0^2 \chi + \gamma \dot \chi =\delta(t).
$$
choose a superposition of $e^{-i\omega_\pm t}$ such that $\chi'(0+)=m^{-1}$

$$
\chi(t) = \begin{cases}
0 & t\leq 0 \\
\frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2mt} & t>0.
\end{cases}
$$

---

## Finding $\chi(t-s)$: Method 2


- Solve equation in frequency space
$$
\left[-m\omega^2+m\omega_0^2-i\gamma\omega\right]\tilde\chi(\omega) = 1,
$$
$$
\tilde\chi(\omega) = \frac{1}{m(\omega_0^2-\omega^2)-i\gamma\omega}.
\label{res_chi_SHO}
$$
(c.f. amplitude response of oscillator)

- Fourier transforming to time domain

$$
\chi(t) = \int_{-\infty}^\infty \tilde\chi(\omega)e^{-i\omega t}\\,\frac{d\omega}{2\pi} = -\frac{1}{m} \int_{-\infty}^\infty \frac{e^{-i\omega t}}{(\omega-\omega_+)(\omega-\omega_-)}\\,\frac{d\omega}{2\pi}.
\label{res_chiFT}
$$

---

$$
\chi(t) = -\frac{1}{m} \int_{-\infty}^\infty \frac{e^{-i\omega t}}{(\omega-\omega_+)(\omega-\omega_-)}\\,\frac{d\omega}{2\pi}.
$$

- Since $\gamma>0$, integrand has two poles in lower half plane at $\omega_\pm$

- Frequency response is _analytic in the upper half plane_

- This is _equivalent to causality_ in real time response

    1. $t<0$: close contour in upper half plane, avoiding poles and getting zero by Cauchy's theorem
    2. $t>0$ close in lower half plane (not forgetting - from going other way) and use residue theorem 

$$
\chi(t) = \frac{i}{m}\left(\frac{e^{-i\omega_+ t}}{\omega_+-\omega_-} + \frac{e^{-i\omega_- t}}{\omega_--\omega_+}\right) = \frac{1}{m\omega_1}\sin(\omega_1 t )e^{-\gamma/2mt} \quad  t>0,
$$

---

### Properties of the Susceptibility

[drop tilde from $\tilde\chi(\omega)$]

- Analytic functions are _special_. Split $\chi(\omega)$ into its real and imaginary parts

$$
\chi(\omega) = \chi'(\omega) + i\chi''(\omega).
$$

- Analyticity in the UHP implies the __Kramers--Kronig relation__
$$
\chi'(\omega) = \cP \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega},
\label{res_KK}
$$
where $\cP$ denotes the principal part. 

> Check this for the oscillator response.

---

- $\chi(t)$ is real $\to$ $\chi(-\omega)^*=\chi(\omega)$ $\to$ $\chi'(\omega)$ is even; $\chi''(\omega)$ is odd.

- Real and imaginary parts encode different aspects of response

- Imaginary part is related to the power dissipated by a driving force. For $f=f_0\cos\omega t$ we have

$$
\begin{align}
W_\text{diss} = \langle f(t) \dot y(t)\rangle = \frac{1}{2}\omega\chi''(\omega)f_0^2.
\label{res_ClassDiss}
\end{align}
$$

- For stability we must have $\omega\chi''(\omega)>0$ (and even).

---

- Real part is related to shift in _energy_ of system in presence of driving force

- The applied force appears in the Hamiltonian as $-f(t)y(t)$

$$
E_\text{shift} = -\langle f(t) y(t)\rangle  = -\frac{1}{2}\chi'(\omega)f_0^2
$$

- For damped oscillator, sign of $\chi'(\omega)$ changes at resonance

- Drive lowers energy beneath resonance, and raises it above.

---

### Mechanical Model of Dissipation

- How to include dissipation in Hamiltonian ($\to$ quantum)

- Attaching an undamped oscillator to a string under tension $\tau$ gives

`$$
\begin{align}
&m\ddot y +m\omega_0^2 y =\tau\frac{\partial u(x,t)}{\partial x}\Bigg|_{x=0}\nonumber\\
&\frac{\partial^2 u}{\partial x^2}-\frac{1}{c^2}\frac{\partial^2 u}{\partial t^2}=0,\quad x>0\qquad u(0,t) = y(t).
\label{res_SHOString}
\end{align}
$$`

- If waves only propagate away from string $u(x,t) = y(t-x/c)$, so $\frac{\partial u(x,t)}{\partial x}\big\|_{x=0} = -\dot y/c$, and
$$
\ddot y +\omega_0^2 y + \gamma \dot y =0.
\label{res_sho2}
$$
with $\gamma=\tau/c$. Note that this is the impedance of the string.

---

### Finite Temperature Fluctuations

- $T\neq 0$ string has thermal motion $\to$ waves approaching osciilator

$$
u(x,t) = u_\text{in}(t+x/c) + u_\text{out}(t-x/c).
$$

- Force on oscillator is proportional to

`$$
\frac{\partial u(x,t)}{\partial x}\Bigg|_{x=0} = c^{-1}\left(u'_\text{in}(t)-u'_\text{out}(t)\right) = c^{-1}\left(2u'_\text{in}(t)-\dot y(t)\right).
$$`

- Equation of motion then
$$
m\ddot y +m\omega_0^2 y + \gamma \dot y =f_\text{noise}(t),
\label{res_sho2_noise}
$$
$f_\text{noise}(t) = \frac{2\tau}{c}u'_\text{in}(t)$ is random force due thermal fluctuations

> Noise and the damping have a common origin!

---

- On account of infinite bandwidth of the string, `$f_\text{noise}$` is white noise
`$$
\E\left[f_\text{noise}(t)f_\text{noise}(t')\right] = 2\gamma k_\text{B}T\delta(t-t').
\label{res_noise_var}
$$`
__Langevin__ or __stochastic differential equation__ (SDE) 

> This is a consequence of equipartition theorem

---

- Motion in response to thermal noise from response function

$$
\E\left[\tilde f_\text{noise}(\omega)\tilde f_\text{noise}(\omega')\right] = 4\pi \gamma k_\text{B}T\delta(\omega+\omega'),
$$

- Since $\tilde y(\omega) = \chi(\omega)\tilde f_\text{noise}(\omega)$

$$
\E\left[\tilde y(\omega)\tilde y(\omega')\right] = 4\pi \gamma k_\text{B}T |\chi(\omega)|^2 \delta(\omega+\omega').
\label{res_power}
$$
$$
\chi''(\omega) =  \frac{\gamma \omega}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2} = \gamma\omega |\chi(\omega)|^2
$$

---

- Defining $\E\left[\tilde y(\omega)\tilde y(\omega')\right] = 2\pi S(\omega)\delta(\omega+\omega'),$

$$
S(\omega)=\frac{2k_\text{B}T}{\omega} \chi''(\omega).
\label{res_ClassicalFDT}
$$

$$
S(\omega)=\frac{2k_\text{B}T}{\omega} \chi''(\omega).
$$

- $S(\omega)=S(-\omega)$ since $\chi''(\omega)$ is odd

- First example of __fluctuation--dissipation relation__

---

### Quantum Fluctuations

- For a single (undamped) oscillator we have ground state fluctuations
$$
H = \frac{p^2}{2m} + \frac{1}{2}m\omega_0^2 y^2,
$$
$$
\bra{0} y^2 \ket{0} = \frac{1}{2m \omega_0},
$$

---

- At finite temperature
$$
\langle\langle y^2\rangle\rangle=\tr\left[\rho\\, y^2\right] = \frac{\coth(\beta\omega_0/2)}{2m\omega_0}.
$$
$\rho = e^{-\beta H}/Z$ is equilibrium density matrix, and $Z=\tr[e^{-\beta H}]$ is partition function

- The double angular brackets $\langle\langle (\cdots)\rangle\rangle$ denote that we are taking quantum _and thermal_ expectations.

---

- What about _time dependent fluctuations_? A natural candidate:
$$
\langle\langle y(t)y(0)\rangle\rangle,
$$
$y(t) = e^{iHt} y e^{-iHt}$ (Heisenberg picture) 

- This gives the _quantum_ noise spectrum

$$
S(\omega) = \int_{-\infty}^\infty \langle\langle y(t)y(0)\rangle\rangle e^{i\omega t}\,dt.
\label{res_QNoise}
$$

- __BUT__: since $y(0)$ and $y(t)$ do not commute with each other $\langle\langle y(t)y(0)\rangle\rangle\neq \langle\langle y(0)y(t)\rangle\rangle=\langle\langle y(-t)y(0)\rangle\rangle$, so

$$
S(\omega)\neq S(-\omega).
$$

---

- Many of the properties of $S(\omega)$ are most easily understood from __spectral representation__

-  Insert complete set of energy eigenstates between $y(0)$ and $y(t)$

$$
S(\omega) = 2\pi\sum_{m,n} \frac{e^{-\beta E_n}}{Z} |\bra{n}y\ket{m}|^2 \delta(\omega-E_m+E_n).
\label{res_SSpectral}
$$

- Reason for asymmetry in $S(\omega)$ is that term with $\delta(\omega-E_m+E_n)$ is weighted by $e^{-\beta E_n}$, while term with $\delta(\omega-E_n+E_m)$ has $e^{-\beta E_m}$


$$
S(\omega) = S(-\omega) e^{\beta\omega}.
\label{res_NoiseAsym}
$$


---

- At zero temperature $\beta\to\infty$ and we can see that $S(\omega<0)=0$.

- Let's evaluate $S(\omega)$ for oscillator. The matrix elements are
`$$
\bra{n}y\ket{m} = \frac{1}{\sqrt{2m\omega_0}}\begin{cases}
\sqrt{m+1} & \text{if } n=m+1 \\
\sqrt{m} & \text{if } n=m-1.
\end{cases}
$$`
`$$
\begin{align}
S(\omega)&=\frac{\pi}{m\omega_0} \sum_n \frac{e^{-\beta E_n}}{Z} \left[n\delta(\omega+\omega_0)+(n+1)\delta(\omega-\omega_0)\right]\nonumber\\
& = \frac{\pi}{m\omega_0}\left[n_\text{B}(\omega_0)\delta(\omega+\omega_0)+(n_\text{B}(\omega_0)+1)\delta(\omega-\omega_0)\right]
\label{res_QSHONoise}
\end{align}
$$`
$$
n_\text{B}(\omega)\equiv \frac{1}{\exp\left(\beta\omega\right)-1},
$$
is Bose distribution function

---

`$$
\begin{align}
S(\omega)&=\frac{\pi}{m\omega_0} \sum_n \frac{e^{-\beta E_n}}{Z} \left[n\delta(\omega+\omega_0)+(n+1)\delta(\omega-\omega_0)\right]\nonumber\\
& = \frac{\pi}{m\omega_0}\left[n_\text{B}(\omega_0)\delta(\omega+\omega_0)+(n_\text{B}(\omega_0)+1)\delta(\omega-\omega_0)\right]
\end{align}
$$`

- Shows the predicted asymmetry between positive and negative frequencies. We can check that
$$
\int S(\omega)\frac{d\omega}{2\pi} = \langle\langle y^2\rangle\rangle= \frac{\coth(\beta\omega_0/2)}{2m\omega_0},
$$
as we found before.

---


- We can express  $y(t)$ in terms of normal modes as
$$
y(t) = \sum_k \left[c^{}_k \adop_k(t) + c_k^* \aop_k(t)\right],
\label{res_ymode}
$$
where time evolution of mode operators is

$$
\adop_k(t) = e^{i\omega_k t}\adop_k,\quad \aop_k(t) = e^{-i\omega_k t}\aop_k.
$$

- Repeating calculation of $S(\omega)$ gives

$$
\begin{align}
S(\omega)= 2\pi\sum_k |c_k|^2\left[n_\text{B}(\omega_k)\delta(\omega+\omega_k)+(n_\text{B}(\omega_k)+1)\delta(\omega-\omega_k)\right].
\label{res_QSHONoiseGen}
\end{align}
$$

- In continuum limit sum of $\delta(\omega\pm\omega_k)\longrightarrow$ smooth $S(\omega)$

---

### Response of oscillator system

- Solve Heisenberg equations of motion 
$$
H = \sum_k \omega_k \adop_k\aop_k - f(t)y,
$$
where $y$ is written in terms of normal modes
$$
\frac{d\aop_k}{dt} = -i\omega_k \aop_k +i c_k f(t),
$$

- Solution is $\aop_k(t) = e^{-i\omega_k t}\aop_k(0)+a_{k,f}(t)$ with
$$
\aop_{k,f}(\omega) \equiv \frac{c_k}{\omega_k-\omega-i0} f(\omega).
$$
($-i0$ introduced for response analytic in UHP i.e. causal)

---

- Response of $\aop_k(t)\longrightarrow y(t)$ gives

$$
y(\omega) = \sum_k |c_k|^2\left[\frac{1}{\omega_k-\omega-i0}+\frac{1}{\omega_k+\omega+i0}\right]f(\omega).
$$

- Thus we have
$$
\chi(\omega) = \sum_k |c_k|^2\left[\frac{1}{\omega_k-\omega-i0}+\frac{1}{\omega_k+\omega+i0}\right],
\label{res_chi_modes}
$$

- Then use... 

$$
\text{Im} \frac{1}{x\mp i0} = \pm\pi\delta(x),
$$

---

`$$
\chi''(\omega) =\sgn(\omega)\pi\sum_k |c_k|^2\delta(\omega_k-\omega) 
\label{res_Imchi_modes}
$$`

- $S(\omega)$ and $\chi''(\omega)$ are then related by

$$
S(\omega) = 2\chi''(\omega)\left[n_\text{B}(\omega)+1\right].
\label{res_FDTAsym}
$$

- This is a __quantum fluctuation dissipation relation__

---

> Check that in the classical limit ($k_\text{B}T\gg \hbar \omega$)
$$
S(\omega) = 2\chi''(\omega)\left[n_\text{B}(\omega)+1\right].
$$
reduces to 
$$
S(\omega)=\frac{2k_\text{B}T}{\omega} \chi''(\omega).
$$

---

### Golden Rule and Dissipation

- We saw that classically $\text{Im}\\,\chi(\omega)$ related to dissipation

- FDT relates $\text{Im}\\,\chi(\omega)$ and $S(\omega)$. How is $S(\omega)$ related to dissipation?

- Regard driving force as perturbation that causes transitions between energy eigenstates
$$
H_\text{pert} = - f(t)y,
$$
with $f(t)=f_0\cos\omega t$

---

- In lowest order perturbation theory, system can make a transitions $\pm\omega$ in energy. Rates found from Fermi's golden rule

$$
\Gamma_{n\to m} = 2\pi \left(\frac{f_0}{2}\right)^2|\bra{n}y\ket{m}|^2 \delta(\pm\omega+E_m-E_n).
$$


- Total rate is sum over all initial ($\ket{n}$) and final states ($\ket{m}$), including probability $e^{-\beta E_n}/Z$ of finding the system initially in $\ket{n}$

- c.f. spectral representation of $S(\omega)$

$$
S(\omega) = 2\pi\sum_{m,n} \frac{e^{-\beta E_n}}{Z} |\bra{n}y\ket{m}|^2 \delta(\omega-E_m+E_n).
$$

$$
\Gamma(\omega) = S(\omega)\left(\frac{f_0}{2}\right)^2.
$$

---

- $S(\omega)$ measures rate of transitions _absorbing_ energy $\omega$; $S(-\omega)$ the rate for _emitting_ energy $\omega$. 

- Asymmetry of $S(\omega)$ is asymmetry between emission and absorption of radiation

- The rate of energy absorption is

$$
\omega\Gamma(\omega) = \omega S(\omega)\left(\frac{f_0}{2}\right)^2 = \frac{1}{2}\omega\chi''(\omega)\left[n_\text{B}(\omega)+1\right]f_0^2.
\label{res_absorb}
$$

---

$$
\omega\Gamma(\omega) = \omega S(\omega)\left(\frac{f_0}{2}\right)^2 = \frac{1}{2}\omega\chi''(\omega)\left[n_\text{B}(\omega)+1\right]f_0^2.
$$

>Compare with 
$$
\begin{align}
W_\text{diss} = \langle f(t) \dot y(t)\rangle = \frac{1}{2}\omega\chi''(\omega)f_0^2.
\end{align}
$$
They agree when $n_\text{B}(\omega)\to 0$: energy of transition being much larger than thermal energy $\hbar\omega\gg k_B T$.

---

## Linear Response: Formal Theory

- So far, considered only response of _linear systems_!

- How do we talk about linear response _in general_?

---

### Kubo Formula

- How does observable $A$ depend on $\lambda_t$, which appears (for small variations) linearly in the Hamiltonian

$$
H_t = H_0 - \lambda_t B?
$$

- $B=-\frac{\partial H}{\partial \lambda}$ is __generalized force__; $\lambda$ __generalized displacement__

---

- In the interaction picture $\ket{\Psi_I(t)} \equiv e^{iH_0 t}\ket{\Psi(t)}$
$$
i\frac{\partial \ket{\Psi_I(t)}}{\partial t} = -\lambda_t B_I(t) \ket{\Psi_I(t)},
$$
where $B_I(t) = e^{iH_0 t}B e^{-iH_0 t}$

- Result of first order time dependent perturbation theory is $\ket{\Psi_I(t)}=\ket{\Psi(0)}+\ket{\Psi^{(1)}_I(t)}+\cdots$, with

`$$
\ket{\Psi^{(1)}_I(t)} = i\int_0^t dt' \lambda_{t'} B_I(t') \ket{\Psi(0)}.
$$`
`$$
\begin{align}
\bra{\Psi(t)}A\ket{\Psi(t)} &= \bra{\Psi_I(t)}A_I(t) \ket{\Psi_I(t)} \nonumber\\
&=\bra{\Psi(0)}A_I(t)\ket{\Psi(0)} +i \int_0^t dt' \lambda_{t'}\bra{\Psi(0)} \left[A_I(t),B_I(t')\right] \ket{\Psi(0)}.
\end{align}
$$`

---

- Mixed states can be treated by averaging over a distribution of quantum states $\langle\cdots \rangle \longrightarrow \langle\langle\cdots\rangle\rangle$

- $\chi_{AB}(t)$ of $A$ due to perturbation that couples to $B$
$$
\chi_{AB}(t) = i\langle\langle\left[A_I(t),B_I(0)\right]\rangle\rangle,\quad t>0.
\label{res_kubo}
$$
(Normally write $A(t)$ rather than $A_I(t)$: Heisenberg picture for the unperturbed problem) 

- Thi is the __Kubo formula__. It expresses the response of a system in terms of the dynamics of the unperturbed system.

---

### Fluctuation Dissipation Theorem (general)
 
- Start from the correlation function

$$
S_{AB}(t) \equiv \langle\langle A_I(t)B_I(0)\rangle\rangle.
$$

- Recalling that 
`$$
\langle\langle\cdots \rangle\rangle = \frac{1}{Z}\tr\left[e^{-\beta H}\cdots\right]
$$`
you should be able to show that
$$
S_{AB}(t) = S_{BA}(-t-i\beta).
$$

> Hint: use the cyclic property of the trace.

---

$$
S_{AB}(t) = S_{BA}(-t-i\beta).
$$

- Fourier transforming, we arrive at
$$
S_{AB}(\omega) = e^{\beta\omega} S_{BA}(-\omega).
$$
(we've seen this before!)

- $\chi_{AB}(t)$ (a commutator) can be written in terms of $S_{AB}(\omega)$

`$$
\begin{align}
\chi_{AB}(t) &= \begin{cases}
i\left[S_{AB}(t)-S_{BA}(-t)\right] & t>0\\
0 & t<0.
\end{cases}\\
&= i\theta(t)\left[S_{AB}(t)-S_{BA}(-t)\right]
\end{align}
$$`

---

$$
\chi_{AB}(t)=i\theta(t)\left[S_{AB}(t)-S_{BA}(-t)\right]
$$

- $\chi_{AB}(\omega)$ can then be expressed as the convolution. The Fourier transform of the step function is

$$
\tilde\theta(\omega) = \frac{i}{\omega+i0},
$$
`$$
\begin{align}
\chi_{AB}(\omega)&= -\int \frac{d\omega'}{2\pi}\frac{S_{AB}(\omega')-S_{BA}(-\omega')}{\omega-\omega'+i0}\\
&=-\int \frac{d\omega'}{2\pi}\frac{S_{AB}(\omega')\left[1-e^{-\beta\omega'}\right]}{\omega-\omega'+i0}.
\label{res_Conv}
\end{align}
$$`

---

- To make sense of this formula, use the Kramers--Kronig relation

`$$
\begin{align}
\chi_{AB}(\omega) &=\chi'(\omega) + i\chi''(\omega)\\
&= \cP \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega} + i\chi''(\omega)\\
&= \int_{-\infty}^\infty \frac{d\omega'}{\pi}\frac{\chi''(\omega')}{\omega'-\omega-i0},
\label{res_KKchi}
\end{align}
$$`
where we used
$$
\frac{1}{x+i0} = \mathcal{P}\frac{1}{x} -i\pi\delta(x).
$$

Finally!

$$
S_{AB}(\omega) = 2\chi_{AB}''(\omega)\left[n_\text{B}(\omega)+1\right].
\label{res_FDTGen}
$$

---

### Spectral Representation

The quantites $\chi_{AB}(\omega)$ and $S_{AB}(\omega)$ have spectral representations in terms of energy eigenstates and eigenvalues

$$
S_{AB}(\omega)  = 2\pi\sum_{m,n} \frac{e^{-\beta E_m}}{Z} \bra{m}A\ket{n}\bra{n}B\ket{m} \delta(\omega-E_n+E_m).
\label{res_SABSpectral}
$$


> Use the spectral representation to prove the fluctuation dissipation relation

-  $S_{AA}(\omega)$ can be interpreted in terms of Fermi golden rule, as we saw for oscillator. Notice that $S_AA(\omega)>0$.

---

## Response of Matter

- Back to many body physics!

---

### Density Response

- Suppose system is subject to time dependent potential corresponding to a term in Hamiltonian

$$
H_\text{pert} = \sum_{j=1}^N V(\br_i,t) = \int  V(\br,t)\rho(\br)\, d\br = \frac{1}{L^3}\sum_\bq V_\bq(t) \rho_{-\bq}.
$$

- Perturbation couples to the density: how is density affected? In a translationally invariant system
$$
\langle\langle \rho_\bq(t)\rangle\rangle = -\frac{1}{L^3} \int_{-\infty}^t  \chi^{\rho}_\bq(t-t') V_\bq(t)\,dt',
$$
where the density response function $\chi^\rho_\bq(t)$ is
$$
\chi_\rho(\bq,t) = i\langle\langle\left[\rho_\bq(t),\rho_{-\bq}(0)\right]\rangle\rangle.
\label{res_kubo_density}
$$

---

- General theory applies with `$A=\rho_\bq$` and `$B=\rho_{-\bq}$`. At zero temperature
$$
S_\rho(\bq,\omega) = 2\pi\sum_{n}  |\bra{0}\rho_\bq\ket{n}|^2 \delta(\omega-E_n+E_0),
\label{res_Sdef}
$$
where we have used `$\rho_\bq^\dagger=\rho_{-\bq}^{}$` This is the __dynamical structure factor__, on account of its importance in scattering experiments.

- The __static structure factor__ is
$$
S_\rho(\bq) = \int S_\rho(\bq,\omega) \frac{d\omega}{2\pi} = \langle\langle\rho_\bq\rho_{-\bq}\rangle\rangle
$$

---


### Sum rules

- `$S_\rho(\bq,\omega)$` obeys certain general relations irrespective of the particular model under consideration

- If interaction depends only on density, it commutes with $\rho_\bq$, so the commutator is determined by kinetic energy

$$
T = -\frac{1}{2m}\sum_{j=1}^N \nabla_i^2.
$$

- Taking `$\rho_\bq =\sum_{j=1}^N e^{-i\bq\cdot\br_j}$`, we find
$$
[[H,\rho_\bq],\rho_{-\bq}] = -\frac{N\bq^2}{m}.
$$

---

- Evaluate by introducing resolution of the identity $\sum_n \ket{n}\bra{n}=1$

`$$
\begin{align}
\braket{0}{[[H,\rho_\bq],\rho_{-\bq}]}{0}&=\braket{0}{H\rho_\bq \rho_{-\bq}- \rho_\bq H\rho_{-\bq}-\rho_{-\bq} H\rho_\bq+\rho_{-\bq}\rho_\bq H}{0}\\
&=2\sum_n|\bra{0}\rho_\bq\ket{n}|^2\left(E_0-E_n\right)
\end{align}
$$`

- We can relate this to `$S(\bq,\omega)$` using spectral representation
`$$
S_\rho(\bq,\omega) = 2\pi\sum_{n}  |\bra{0}\rho_\bq\ket{n}|^2 \delta(\omega-E_n+E_0),
$$`
to give the __f-sum rule__

$$
\int_{-\infty}^\infty \omega S(\bq,\omega) \frac{d\omega}{2\pi}= \frac{N\bq^2}{2m}.
$$


---

- Compressibility defined in terms of volume $V$ and pressure $p$ as

$$
\kappa=-\frac{1}{V}\frac{\partial V}{\partial p}.
$$

- At zero temperature, the pressure is

$$
p = -\frac{\partial E_0}{\partial V},
$$

- Expect $E_0 = V \epsilon(\rho)$, where $\rho = N/V$ is density, and $\epsilon(\rho)$ energy per unit volume

$$
\kappa^{-1} = \rho^2 \epsilon''(\rho).
$$

---

- The chemical potential $\mu = \frac{\partial E_0}{\partial N}=\epsilon'(\rho)$, so

$$
\kappa = \rho^{-2} \frac{\partial \rho}{\partial \mu}
$$

- But $\frac{\partial \rho}{\partial \mu}$ is a response function, in fact

$$
\frac{\partial \rho}{\partial \mu} = \frac{1}{V}\chi'(0,0).  
$$

---

- $\chi'(\bq,\omega)$ can be written in terms of $\chi''(\bq,\omega)$ (Kramers--Kronig) and $\chi''(\bq,\omega)$ is related to $S_\rho(\bq,\omega)$

- This gives the __compressibility sum rule__ at zero temperature

$$
\lim_{\bq\to 0}\int_0^\infty \frac{S(\bq,\omega)}{\omega}\frac{d\omega}{2\pi} = \frac{N\rho\kappa}{2}.
$$

- Compressibility sum rule often written in terms of speed of sound $c = (\kappa m \rho)^{-1/2}$

$$
\lim_{\bq\to 0}\int_0^\infty \frac{S(\bq,\omega)}{\omega}\frac{d\omega}{2\pi} = \frac{N}{2mc^2}.
$$

---

### Single Mode Approximation

- Some systems (e.g Bose gases), are well described by
$$
S_\rho(\bq,\omega) \sim 2\pi S_\rho(\bq) \delta(\omega - \omega(\bq)),
\label{res_SMA}
$$
for low $\bq$, where $\omega(\bq)$ is dispersion relation of collective excitations (e.g. Bogoliubov modes)

- In this approximation, f-sum rule tells us that

$$
S_\rho(\bq) = \frac{N\bq^2}{2m\omega(\bq)}.
$$

---

### Example 1: BEC (no interactions)

- Excitations out of the condensate are free particles $\omega(\bq) = \frac{\bq^2}{2m}$
$$
S_\rho(\bq) = N.
$$

- Completely uncorrelated particle positions (Poisson statistics).

---

### Example 2: interacting BEC / elastic chain

- $\omega(\bq) = c|\bq|$ i.e. linear dispersion with finite speed of sound

$$
S_\rho(\bq) = \frac{N|\bq|}{2mc}.
$$

- Density fluctuations vanish as wavevector goes to zero, indicating long-range correlations between positions in the ground state.

> Check compressibility sum rule
