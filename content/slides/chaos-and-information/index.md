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
scripts: ['https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js']
---

## Chaos and Information in 
## space-time dual quantum circuits

Add KaTeX render

goes here

in window preview (like quarto)

measurements and forced ensemble

---

## Outline

- Reminder of dual unitary phenomenology
  - Summary of results
- Into to CA
  - Elementary CA and reversibility
- Block CA
  - Classification and simple examples
  - Vanishing of correlations off light cone
- Models with continuous state space
  - Puzzle of Krajnik Prosen model. Why don't correlations vanish inside light cone?
  - Statiotemporal cat. work on visualization
  - Dynamics of OTOC
- Quantum clifford CAs
  - Are any Clifor CAs related to the discrete spatiotemproral ct
- Mutual information
- Measurements and loss of bijectivity
  - Forced ensemble 

---
  

## To do

- Cat maps

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

Need some illustrations here

Sommers et al automaton