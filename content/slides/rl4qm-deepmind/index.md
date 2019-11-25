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
<img src="ariel.png" width=100>
</p>

<p align="center">
<img src="willem.png" width=100>
</p>

---

## Schrödinger Equation: 1 Particle

$$
\left[-\frac{\nabla^2}{2m}+V(\br)\right]\psi(\br) = E\psi(\br)
$$

- Discretize on real-space grid $L\times L\times L$


---

## Schrödinger Equation: N Particles



Exponentially harder

Leave aside idential particles

---

## Variational Principle

Challenges

1. Form of wavefunction
2. Evaluation of expectations
3. Optimzation

---

## Feature Engineering...

Different forms of wavefunction

incl. geminal

---


## Other approaches

- Carleo and Troyer
- Recent DeepMind work

__This work__: _path integral representation_

---

## Outline

- The path integral
- 

---

## Feynman

Imaginary exponent

My machines came from too far away

---

## Feynman—Kac

Based on the observed relationship between Sch and heat equations

---

## Born Rule

---

## Schrödinger Problem

Schrödinger's process

---

## Path integral Monte Carlo

[Recent work on nanodroplets](https://www.diva-portal.org/smash/get/diva2:828485/FULLTEXT01.pdf)

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


---

---

## Critique

- Why model the drift not the wavefunction? Is calculating gradients better?
- Is sampling better (not just MC)

## Any prospect for excited states?

Initial state dynamics

Angular momentum states

## Next: Lattice Models
