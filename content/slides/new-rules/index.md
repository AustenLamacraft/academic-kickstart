---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github``
  reveal_options:
    hash: true
    mathjax3:
      loader:
        load: ['[tex]/noerrors', '[tex]/physics']
      tex:
        packages: 
          '[+]': ['noerrors', 'physics']
scripts: ['https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js']
---

# New Rules:
## Quantum Circuits, Cellular Automata, Complexity and Chaos
[austen.uk/slides/new-rules](austen.uk/slides/new-rules)

Austen Lamacraft, University of Cambridge 


---

## Conway's Game of Life


<script src="assets/life.js"></script>
<div id="life" style="display: inline-block"></div>


---

## Cellular Automata

Dynamical system where space, time, and the local variables are *all discrete*

<script src="assets/elementary-ca.js"></script>
<div id="elementary-ca"  style="display: inline-block"></div>


---

## Quantum Circuits

Basis of quantum supremacy work by Google and others



---

## This talk

- What are the similarities and differences?
- What can we learn about dynamics more generally?
- Is it any use?

---

## General definition



---

## Wolfram's Rules 

A convenient way to enumerate all possible CAs with given neighborhood 

---

## CAs in the wild

[Discussed here](https://writings.stephenwolfram.com/2017/06/oh-my-gosh-its-covered-in-rule-30s/)

![](assets/cambridge-north.png)

---

## Rule 30

Nice demo

https://editor.p5js.org/lemonsquares/sketches/XtLvUvgAF

All the rules

https://editor.p5js.org/steinlav/sketches/7NVUVHTjk

https://carrot.whitman.edu/P5JS/wolfram-rule/

---

## Rule 150

https://github.com/david-kishi/wolfram-rule-150-demo

---

## Rule 54

---

Wolfram's A New Kind of Science is 20 years old

Anderson's review

---


## Multidomain automata

https://slackermanz.com/

---

## Pokemon

- Pokemon CA: https://twitter.com/matthen2/status/1543226572592783362

- Rock paper scissors: https://twitter.com/AndrewM_Webb/status/1236274167437197320

---

## CAs as model physics

- Causal 'light cone'
- What are the possible behaviours: chaos, periodicity, ...
- Wolfram has four classes of behavior including
  - Class 2 where differences die out
  - Class 3 where differences grow

---

## Chaos

Notion of Hamming distance

(fun: difference pattern in Rule 150 gives Sierpinski)

<script src="assets/ca-difference.js"></script>
<div id="difference" style="display: inline-block"></div>


---

## Theory?

- What tools do we have? Have no chance of solving the dynamics of any one CA
- If we are looking for *generic* properties, natural to consider *ensembles*
  
  - Of initial conditions
  - Of rules

---

## Probabilistic CA

Introduce ensembles: choose rule randomly each time!

---

<script src="assets/pca-chaos.js"></script>
<div id="pca-chaos" style="display: inline-block"></div>

---

## Markov chain on differences



---

## Applications

Hashing, cryptography

https://www.wolframscience.com/nks/p603--cryptography-and-cryptanalysis/

Used as RNG in Wolfram: https://mathworld.wolfram.com/Rule30.html

---

## Synchronization

http://www.scholarpedia.org/article/Synchronization_of_extended_chaotic_systems

---

## Coalescence

Simulation of two 2D CAs, and an illustration of convergence of Hamming distance

---

## Directed Percolation

Occurrence in turbulence
Still not understood!

---

## Reversibility 

Undecidability of reversibility above one (space) dimension

Contrast rule 30 and 15 (one of the reversible ones)

Wang tiles

https://editor.p5js.org/golan/sketches/vUSpJuD6f

---

## Block Cellular Automata

Pic from Wikipedia

---

<p align="center">
<img src="assets/circuit.png" width="500" style="display: inline-block"/>
</p>

---

## Matt Henderson's demo

Embed the Tweet, or make it myself using this sketch:

---

## Self assembly 

https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0020424

---

## 24 reversible models

Special cases

SWAP, integrable

---

<script src="assets/block-ca.js"></script>
<div id="block"  style="display: inline-block"></div>

---

## Billiard ball computer

---

## Self-dual models

Notion of space-time duality

---

## Random self-dual maps


<div id="block"  style="display: inline-block"></div>

---

## Summary so far

- CAs as dynamical systems: chaos and integrability
- Special maps are "maximally chaotic"

**How can we extend these ideas to quantum systems?**

Illustrate: causality, duality, use of randomness

---

## Quantum circuits

In some way an analog of (block) CA

---

## Google Quantum Supremacy

---

## Tensor Networks

---

## Curved space?

Higher dimensions, AdS, etc.

---

## Unitarity

---

## Dual unitarity

Includes the dual models we discussed so far

---

## Concrete model: kicked Ising

---

## Horizon effect

Entanglement velocity and quasiparticle picture

---

## Operator spreading

How does it look for dual unitaries?

---

## OTOC

In terms of operator expansion

---

## Maximal entangling states

---

## Maximal entanglement velocity implies dual unitarity

---

## What's so hard about quantum mechanics?

- Can understand the average OTOC 

---

## Higher dimensions?

---

## Measurements


---

Applications: VQA ?

