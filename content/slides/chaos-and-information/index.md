---
slides:

  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  math_renderer: mathjax3
  reveal_options: {
    hash: true,
    katex: {
      macros: {
        "\\abs" : "\\left|#1\\right|",
        "\\tr" : "\\operatorname{tr}",
        "\\sgn" : "\\operatorname{sgn}",
      },
      throwOnError: false,
    }
  }
scripts: ['https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js', 'https://cdn.jsdelivr.net/npm/mathjs@11.7.0/lib/browser/math.min.js']
---

## Chaos and Information in 
## space-time dual quantum circuits


in window preview (like quarto)
---

## Outline

- Reminder of dual unitary phenomenology
  - Summary of results
    - Asymptotic growth of entanglement
- Into to CA
  - Elementary CA and reversibility
- Block CA
  - Classification and simple examples. Linear circuit was first
  - Vanishing of correlations off light cone
- Models with continuous state space
  - Puzzle of Krajnik Prosen model. Why don't correlations vanish inside light cone?
  - Statiotemporal cat. work on visualization
  - Dynamics of OTOC
- Quantum clifford CAs
  - Are any Clifford CAs related to the discrete spatiotemproral cat
- Mutual information
- Measurements and loss of bijec
  - Directed percolation 
  - Forced ensemble 

---
  
## Dual unitaries and their phenom


---

## Cat map

<script type="module">
import catMap from "./assets/cat.js"
const catMapSketch = new p5(catMap, "cat map")
Reveal.on( 'slidechanged', event => {
  if (!!event.currentSlide.querySelector("#cat-map")) {
    catMapSketch.loop()
  }
  else {
    catMapSketch.noLoop()
  }
} );
</script>

<figure align="center">
<div id="cat map" style="display: inline-block"></div>
</figure>

---

## Spatiotemporal cat

<script type="module" src="./assets/st-cat.js">
</script>

<figure align="center">
<div id="st cat" style="display: inline-block"></div>
</figure>

Need to attribute cherries from Wikipedia

---

## Symplectic conservation law

---

## Correlations for STC

Average over one step to see correlations disappear

---

In self dual case tori fly unimpeded to left and right

Think of tori "scattering" off each other.

---

## Clifford automata

<script type="module">
import sommers from "./assets/sommers-automaton.js"
const sommersSketch = new p5(sommers, "sommers")
Reveal.on( 'slidechanged', event => {
  if (!!event.currentSlide.querySelector("#clifford-automata")) {
    sommersSketch.loop()
  }
  else {
    sommersSketch.noLoop()
  }
} );
</script>

<figure align="center">
<div id="sommers" style="display: inline-block; ; position: relative"></div>
</figure>

---

### Three component models

- [Borsi and Pozsgay (2022)](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.014302) find 227 inequivalent dual reversible models 

<script type="module">
import threeComponent from "./assets/three-component-dual-reversible.js"
const threeComponentSketch = new p5(threeComponent, "three-component")
Reveal.on( 'slidechanged', event => {
  if (!!event.currentSlide.querySelector("#three-component-models")) {
    threeComponentSketch.loop()
  }
  else {
    threeComponentSketch.noLoop()
  }
} );
</script>

<figure align="center">
<div id="three-component" style="display: inline-block; position: relative "></div>
</figure>


---

## Kicked Ising automaton

Use for universal measurement based quantum computing

