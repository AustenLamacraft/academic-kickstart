---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Online Demos With Pyodide"
subtitle: "Trying out Python, including NumPy, in the browser"
summary: ""
authors: []
tags: ["code"]
categories: []
date: 2022-03-30T20:29:33+01:00
lastmod: 2022-03-30T20:29:33+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

<script src = "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script> 
<script src="https://cdn.jsdelivr.net/pyodide/v0.19.1/full/pyodide.js"></script>
<script src = "assets/ising.js"></script> 

I've been doing some research about the "best" way to make online demos. Obviously that's pretty subjective, but I think a pretty reasonable goal is not having to completely reimplement code I may have written and used in the course of doing my research. That's a bit tricky because a demo that runs in the browser usually means JavaScript, while research code could be Python / Julia / whatever. In this post I'll go through one way of easing this disconnect using [Pyodide](https://pyodide.org/en/stable/), a project that brings Python to the browser using WebAssembly. I'd be interested to hear of other possibilities. For example there's a package called [NumJs](https://www.npmjs.com/package/numjs) that aims to bring NumPy-powers to JavaScript, but it doesn't seem that active and maybe that's just reinventing the wheel?

## The easy bit
  
<figure>
<div id="ising-simulation" align='center'>
</div>
<figcaption>
The slider changes the temperature, with the critical point in the middle. Don't forget to hit pause if your computer starts getting hot.
</figcaption>
</figure>

Here's a simulation of the 2D [Ising model](https://en.wikipedia.org/wiki/Ising_model) with [Glauber dynamics](https://en.wikipedia.org/wiki/Glauber_dynamics). There are a million of these on the internet of course. What's a bit unusual about this one is that it is running the following code:

#### **`assets/ising.py`**
```python
import numpy as np
from pyodide import to_js

class IsingModel:
    def __init__(self, L):
        self.L = L
        self.config = np.random.choice(a=[True, False], size=(L, L))

    def glauber_update(self, beta):
        spins = 2 * self.config - 1
        fields = np.roll(spins, 1, 0) + np.roll(spins, -1, 0) + np.roll(spins, 1, 1) + np.roll(spins, -1, 1)
        delta_E = 2 * spins * fields
        flip_probabilities = 1 / (1 + np.exp(beta * delta_E))
        flips = np.random.random_sample(size=(self.L, self.L)) < flip_probabilities
        # Only update a site with probability 0.5
        flips = np.logical_and(flips, np.random.choice(a=[True, False], size=(self.L, self.L)))
        self.config = np.logical_xor(self.config, flips)
                
    def to_js(self):
        return to_js(self.config)
```

In other words, it's ([NumPy](https://numpy.org/) assisted) Python. That means I get to use code already written for research, and all that NumPy vectorization goodness. 

A clue as to how it works is provided by that line `from pyodide import to_js`, because you actually can't get away from JavaScript. This converts a Python object into a JavaScript object, which is then handled by the visualization (more on that in a moment). In our case, it converts a 2D NumPy array of booleans (the states of the Ising spins, with `True` for spin up and `False` for spin down) to an Array of JavaScript Arrays. I initially guessed I was going to have to call `self.config.tolist()` to get a list of lists first, but Pyodide handles the conversion directly. Nice!

## The (harder) bit

Hooking that Python code up to the browser involves a bit of glue. The first thing is to load Pyodide itself from a CDN

#### **`assets/ising.js`**
```js
async function loadSim() {
  let pyodide = await loadPyodide({
  indexURL: "https://cdn.jsdelivr.net/pyodide/v0.19.1/full/",
  });
  await pyodide.loadPackage("numpy"); 

  // Code has to be loaded into virtual file system
  await pyodide.runPythonAsync(`
  from pyodide.http import pyfetch
  response = await pyfetch("assets/ising.py")
  with open("ising.py", "wb") as f:
      f.write(await response.bytes())
      `)

  return pyodide.pyimport("ising")
}
```

`loadPyodide` returns the `pyodide` module. If you're wondering where `loadPyodide` function came from: it's loaded as a script in the `index.html` of the page you're viewing: we'll get to that shortly. 

Now comes one of the major oddities of using Python in the browser. Usually you import packages and modules from your file system. In the browser you don't have access to a real file system, so you have to load your code into a "virtual" file system before carrying (more or less) as normal. In this cases, the code at `assets/ising.py` is written to the virtual file system as `ising.py`, before `pyodide.pyimport("ising")` does what you'd normally expect `import ising` to do. So when we call `loadSim()` it will return our `ising` module and we'll be good to go.

For the visualization I'm using [p5.js](https://p5js.org/) (again loaded in `index.html`) because it's very friendly, but you could use whatever visualization library you like, or do it in raw JS if that's your thing. In p5.js you define functions like `setup()` and `draw()` that (you've guessd it) setup at the beginning and draw each frame.

#### **`assets/ising.js`**
```js
let ising_model // will hold the simulation

const w = 5; // Size of each site
let started = false
let paused = false

async function setup() {
    const ising = await loadSim();
    started = true
    var canvas = createCanvas(500, 500);
    canvas.parent('ising-simulation');

    const L = floor(width/w);
    ising_model = ising.IsingModel(L) 

    button = createButton('\u23F8');
    button.parent('ising-simulation')
    button.position(-width, -12, 'relative')
    button.mousePressed(() => isLooping() ? noLoop() : loop());
    
    slider = createSlider(1, 3.5, 2.269, 0.01);
    slider.parent('ising-simulation')
    slider.style('width', '150px');
    slider.position(0, 20, 'relative').center('horizontal');
}
```

Here we call `loadSim()`, and instantiate our `ising_model` object, as well as adding a button and slider to control things. Finally, `draw()` involves calling `ising_model.glauber_update(beta)` to update the configuration, and then returning it as an array of arrays using `ising_model.to_js()` before drawing:

#### **`assets/ising.js`**
```js
function draw() {
  background(255);
  if (started) {  
    ising_model.glauber_update(1 / slider.value())
    config = ising_model.to_js()
  
    config.forEach((col, colIdx) => {
      col.forEach((site, rowIdx) => {
        if (site) fill(0);
        else fill(255);
        stroke(0);
        rect(colIdx * w, rowIdx * w, w, w);
      })
    })
  }
}
```

Finally, in `index.html` you need to add the scripts as well as a div that is going to contain the p5.js canvas

#### **`index.html`**
```html
<script src = "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script> 
<script src="https://cdn.jsdelivr.net/pyodide/v0.19.1/full/pyodide.js"></script>
<script src = "assets/ising.js"></script> 

<div id="ising-simulation" align='center'>
```

If you want to preview your simulation locally, you'll have to start a server so the browser can access those local files. With Python that's as easy as `python3 -m http.server`. 

And that's it! There's a bit of boilerplate, but I feel this maybe fits my goal of lowering the barrier between research code and a demo. Pydodide looks like a cool project and I hope it will deliver further performance improvements over time. 