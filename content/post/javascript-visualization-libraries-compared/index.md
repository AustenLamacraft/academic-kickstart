---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "JavaScript Visualization Libraries Compared"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2022-01-14T16:25:30Z
lastmod: 2022-01-14T16:25:30Z
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

Since I'm now a JavaScript boss I wanted to get into making nice visualizations that go straight on the web. There are lots of possibilities out there, so I wanted to work through some of them to see what fits.

There's a good list [here](https://github.com/ubavic/awesome-interactive-math)

## [Vega](https://vega.github.io/vega/) and Vega-Lite

This is basically for graphs and charts

<div id="vis"></div> 
<script src="https://cdn.jsdelivr.net/npm/vega@5.21.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.2.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.20.2"></script>
<script src = "assets/js/vega.js"></script> <!-- this will pick our script up and render the chart -->

## [CindyJS](https://cindyjs.org/)

CindyJS is intended for mathematical visualization and is a wrapper around CindyScript, used to define functions and so on. From my point of view it would be preferable if everything was pure JS. 

<div id="CSCanvas"></div>
<script type="text/javascript" src="https://cindyjs.org/dist/latest/Cindy.js"></script>

<script id="csinit" type="text/x-cindyscript">
  W(x, t, p) := sin(5*|x-p|-t); //helper function
  resetclock();
</script>

<script id="csdraw" type="text/x-cindyscript">      
      colorplot(
        u = W(#, seconds(), A) + W(#, seconds(), B);
        gray(1/2+u/4) //the last line is the return value!
      );
</script>

<script type="text/javascript">
    CindyJS({
      scripts: "cs*",
      autoplay: true,
      geometry: [
        {name:"A", kind:"P", type:"Free", pos:[-4,0]},
        {name:"B", kind:"P", type:"Free", pos:[3,-6]},
      ],
      ports: [{
        id: "CSCanvas",
        width: 400,
        height: 300,
        //no transform specified => visible area: [-10,10]^2
      }]
    });
</script>

## [Three.js](https://threejs.org/)

3D modelling on the Canvas. This example is from the [GitHub README](https://github.com/mrdoob/three.js/)

 <div id="test">
      <canvas id="canvasID"></canvas>
</div> 

<script type="module">
  // Find the latest version by visiting https://cdn.skypack.dev/three.
  import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.137.1-WzPZdTFT7rnx9yDWMBNa/mode=imports/optimized/three.js'; 
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );

  camera.position.z = 1;
  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh( geometry, material );
  
  scene.add( mesh );
  
  const canvas = document.getElementById("canvasID");
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });

  renderer.setSize( 400, 300 );
  renderer.setAnimationLoop( animation );

  function animation( time ) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
  }
</script>

https://motion.dev/

Stuff to try 

http://www.stevejtrettel.site/code.html

http://www.stevejtrettel.site/code/strangeAttractor.html

https://timhutton.github.io/mobius-transforms/dfs_recipes.html

https://observablehq.com/d/dff9634f8a7809e1

https://observablehq.com/@mbostock/making-webgl-dance



## JSXGraph

## [Mafs](https://mafs.dev/)


## [SVG.js](https://svgjs.dev/docs/3.0/)

Programmatically control SVG with JavaScript
  
  <div id="svgjs"></div>

  <script type="module" src="assets/js/svgPong.js"></script>

  <script type="module">
    import { SVG } from 'https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.esm.min.js'; 

    const draw = SVG().addTo('#svgjs').size('100%', '100%')
    // draw pink square
    draw.rect(100, 100).move(100, 50).fill('#f06')
  
  </script>

## [Paper.js](http://paperjs.org/)

Vector graphics scripting on the Canvas.

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js"></script>

<script type="text/paperscript" src="assets/js/paper.js" canvas="myCanvas">
</script>

<canvas id="myCanvas" resize></canvas>

## [GoJS](https://gojs.net/latest/index.html)

## https://mathigon.io/core/events.html

## [Two.js](https://two.js.org/)


## Snap.svg

For manipulating and animating SVGs

## Grafar

https://github.com/thoughtspile/grafar/

## p5.js

## plotly 

## Natto.dev

https://natto.dev/

## Observable

## Penrose 

[GitHub](https://github.com/penrose/penrose)

Try [this](https://observablehq.com/@rreusser/clifford-and-de-jong-attractors?collection=@rreusser/writeups)

## Pyodide and Jupyter Lite