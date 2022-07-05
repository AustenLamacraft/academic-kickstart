---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "New Rules"
subtitle: "Quantum Circuits, Cellular Automata, Complexity and Chaos"
summary: "Many of you will have played with cellular automata such as Conway's Game of Life. These are model systems in which complex and chaotic behaviors emerge from simple dynamical rules. 

Motivated by quantum computation, physicists have in recent years begun to study *quantum circuits*, which are in some way quantum analogues of cellular automata. In this talk I'll discuss some of the similarities and differences between these two classes of systems, and what they can teach us about classical and quantum dynamics more generally."
authors: []
tags: []
categories: []
date: 2022-07-04T19:40:37-06:00
lastmod: 2022-07-04T19:40:37-06:00
featured: false
draft: true

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

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>


**This post is based on the colloquium I gave at the [Aspen Center for Physcs](https://www.aspenphys.org/) on July 7, 2022** 

## Introduction

Many of you will have encountered [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), a system obeying a few simple rules from which rather complicated behavior can emerge.

<script src="assets/life.js"></script>
<figure align="center">
<div id="life" style="display: inline-block" ></div>
<figcaption>Conway's Game of Life. Click to restart </figcaption>
</figure>

Conway's game takes place on a (potentially infinite) square lattice, where each site is in one of two possible states (alive or dead in the original interpretation, though we'll mostly refer to these states as 1 and 0 in the following). The evolution of the board proceeds in discrete time steps, with the state of each site at a given instant being determined by the states of the surrounding eight sites (generally this is known as a site's **neighborhood**) in the preceeding instant. The rules, which are intended to resemble a living ecosystem (hence the name), are:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

From these three simple rules highly complicated behaviors can emerge. The Game of Life is an example of a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) (CA), a dynamical system in which *space*, *time*, and the *degrees of freedom* are all discrete, while the extent of the system in space and time may be taken to infinity. Cellular automata are therefore interesting model systems from the perspective of statistical physics, since one can ask questions about the generic types of dynamics that may occur, and how these determine the behavior of the system in the thermodynamic limit.

Though discrete, CAs are *classical* systems, since they have a definite state at any instant. Is there a natural notion of a *quantum cellular automaton*? Motivated by quantum computation, physicists have in recent years begun to study *quantum circuits*, and we'll see that in many ways these are quantum analogues of cellular automata. In this talk I'll discuss some of the similarities and differences between these two classes of systems, and what they can teach us about classical and quantum dynamics more generally.


{{% callout note %}}
Note that there are several different constructions which go by the name *quantum cellular automaton*
{{% /callout %}}

## Elementary cellular automata: Wolfram's rules

The [elementary cellular automata](https://en.wikipedia.org/wiki/Elementary_cellular_automaton) are the simplest class of CAs. "Space" is one dimensional: each cell is labelled by an integer $n$ and takes value $x_n=0,1$. The neighborhood that determines the fate of a cell in the next time step consists of that cell and its two neighbors. The updates are therefore defined by a function that maps the value of these three cells to the new value

$$
f:\\{0,1\\}^3\longrightarrow \\{0,1\\}.
$$

The update rule is then

$$
x^{t+1}_{n} = f(x^{t}\_{n-1},x^{t}\_{n},x^{t}\_{n+1})
$$

Since the domain of $f$ consists of the $2^3=8$ possible assignments of the three cells there are $2^8=256$ possible choices for the function $f$. Interpreting the inputs as binary numbers it's conventional, following [Stephen Wolfram](https://en.wikipedia.org/wiki/Stephen_Wolfram), to arrange them in descending order: 111, 110, ... 000 and interpret the corresponding outputs as an eight bit binary number that is used to label the function, or "rule". Thus, Rule 110 corresponds to the function with table

|111	| 110 |	101	| 100 |	011 |	010 |	001 |	000	|
|---	| --- |	---	| --- |	--- |	--- |	--- |	---	|
| 0   |	1   | 	1 | 	0 | 	1	|   1 | 	1 | 	0 |	

<script src="assets/elementary-ca.js"></script>
<figure align="center">
<div id="elementary-ca"  style="display: inline-block"></div>
<figcaption>Elementary cellular automata starting from either a single 1 or a random row. Try them out by changing the number on the right from 0 to 255. </figcaption>
</figure>

By playing with the above simulation you'll quickly realise that this simple set of rules encompasses quite a variety of behavior, from ordered (the Sierpinski triangle produced by Rule 18) to chaotic (Rule 30). Surprisingly, Rule 110 is capable of universal computation. Many of the rules are not interesting at all.

The other important point I'd like to make is that the rules, being *local*, give rise to a notion of *causality* in the dynamics. That is, there is a *maximal speed* at which influences can propagate. With only a small abuse of terminology, we'll often speak of a "light cone" in these systems.

### Adding complexity

Pokemon and multidomain

WANKS

## Chaos 

*Chaos* in a dynamical system is characterized by the rapid growth of initially small differences between two trajectories $x_t$ and $y_t$. Since the degrees of freedom of CAs are discrete, the smallest change we can make is to toggle the value of a single site. By tracking the difference between the two trajectories we can observe the degree of chaos present in the system. More precisely, since are talking about binary variables, the natural quantity to monitor is the exclusive or – XOR – of the two variables, denoted $x_t\oplus y_t$ (although we'll frequently refer to it as the "difference" in the following). Instead of the exponential growth typical of chaotic behavior in continuous systems (characterized by a [Lyapunov exponent](https://en.wikipedia.org/wiki/Lyapunov_exponent)), the degree of chaos is naturally characterized by the number of differing sites, or [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two trajectories. Compare the behavior of the chaotic Rule 30 with Rule 15, for example.

<script src="assets/ca-difference.js"></script>
<figure align="center">
<div id="difference" style="display: inline-block"></div>
<figcaption>Evolving two copies starting from the same random initial conditions except for a single altered cell. The red and white colors indicate where the two copies differ.</figcaption>
</figure>

The propagation of the "front" that marks the difference between two copies cannot exceed the maximum speed I mentioned before, and may be less. For Rule 30, for example, the left front meanders and generally moves slower than the right front, which moves at the maximum speed.

## Randomness as a tool

Although the behavior of even the elementary CAs is intriguing, it's not at all clear how we can go about analyzing them, or uncovering generic patterns of behavior. For this reason, may early studies of CAs were therefore rather qualitative.

One way forward that is often used in theoretical physics is to give up on the prospect of solving any one system in particular, and instead try to make statements about *statistical ensembles* of systems. In the case of CAs there are two natural ways to introduce such ensembles: by taking a distribution of initial conditions and / or a distribution over rules that govern the dynamics. The latter strategy gives rise to a [probabilistic cellular automaton](https://en.wikipedia.org/wiki/Stochastic_cellular_automaton). An obvious ensemble corresponds to choosing the rules independently for each site and each instant, uniformly from all possible rules. Once the rules are fixed we can investigate chaos as before: by evolving two copies of the system with the *same* rules. 

<script src="assets/pca-chaos.js"></script>
<figure align="center">
<div id="pca-chaos" style="display: inline-block"></div>
<figcaption>$x_t\oplus y_t$ for two PCAs starting from initial conditions that are random but only differ on one site ("site") or are random and independent ("row"). The number in the bottom right is the probability $p$ introduced in the text. Note that in this case the neighborhood includes next nearest neighbors.</figcaption>
</figure>

If we look at the dynamics of one of the copies things look very boring: since the output of each rule is chosen at random we just get white noise. Because the two copies are evolved with the same – albeit random – rules, the dynamics of $x_t\oplus y_t$ is still nontrivial: we see a propagating front, just as for many of the individual rules. The fluctuations of the front are larger and the average speed is definitely less than the maximal value.

An interesting variation in behavior emerges if we introduce an extra parameter into our ensemble. With a uniform distribution on rules each possible input to an update function outputs 0 or 1 with equal probability. We can instead choose to output 1 with probability $0\leq p\leq 1$, with the uniform distribution corresponding to $p=1/2$. Deviating from $p=1/2$ tends to make the dynamics more boring. It also makes it less *injective*: distinct cell values within a neighborhood are more likely to be mapped to the same value.

By exploring the effect of changing $p$ you can see that something interesting happens around $p=0.25$ (or $p=0.75$: the behavior is symmetric around $p=1/2$). We go from a situation where the front propagates without limit to one where it becomes sparse and tends to die out, meaning that over time the two trajectories begin to coincide and eventually merge completely. This corresponds to a *phase transition*, as we'll see shortly. 

Note that in a finite system the two copies will *always* merge after a sufficiently long time. This is because there will always come an unlucky moment when all the rules conspire to map the two trajectories to the same state. In the "chaotic" phase, this time will be exponentially large in the system size, however.

### Markov chain on differences

The power of the probabilistic approach is that is possible to understand the above behavior in terms of a Markov chain on the difference $z_t\equiv x_t\oplus y_t$ *alone*, without reference to the individual configurations ([Derrida and Stauffer (1986)](https://iopscience.iop.org/article/10.1209/0295-5075/2/10/001/meta)). When $z_t=0$ on a neighborhood that provides an input to a rule, we have $z_t=0$ for the output. If the inputs differ on a least one site, however, $z_t=1$ at the output with probability $2p(1-p)$. 

Let's modify the rules slightly for a moment, so that the rules $f$ that determine how a site is updated depend only on the two neighboring sites, and not the site itself. The graph of dependencies then takes the form of a square lattice

**Need figure**

A given site has $z_t=1$ with probability $2p(1-p)$ only if one of its two antecedents did. It turns out this is a well known statistical mechanics model called (site) [directed percolation](https://en.wikipedia.org/wiki/Directed_percolation), in which one looks for a connected cluster of sites that are occupied with probability $x=2p(1-p)$. For nearest neigbor neighborhoods this probability $x\leq 1/2$ and is never high enough to reach the percolating phase where an infinite cluster is present, which occurs for $x\sim 0.706$. Thus in the experiment of the previous section we had to use next nearest neighbors.

Parenthetically, directed percolation is one of the few phase transitions in which the critical exponents are unknown in the usually tractable case of two dimensions (i.e. one space and one time dimension). Part of the reason is the lack of symmetry between space and time, which means that conformal field theory is of no use, for instance.

## Reversibility and block CAs

We saw that the directed percolation phase transition in the dynamics of PCAs was a direct consequence of the breakdown of injectivity (one-to-oneness) in the rules. Given a CA, it's natural to ask whether it describes an invertible map (i.e. a bijection) on the state space, in which case two distinct trajectories can never merge. This is a [reversible cellular automaton](https://en.wikipedia.org/wiki/Reversible_cellular_automaton).

Somewhat surprisingly, none of the elementary CAs are reversible (ignoring trivial cases where the output depends on only one of the inputs)! There are alternative constructions that do give rise to reversible CA, however: the simplest, and the most relevant for our later discussion of quantum circuits, is the [block cellular automaton](https://en.wikipedia.org/wiki/Block_cellular_automaton). The idea is to divide the cells into blocks (known as Margolus neighborhoods) and apply invertible mappings to each block. By alternating between two overlapping partitions at even and odd time steps, one obtains a dynamical system in which distant sites can become casually connected after enough steps.

<figure align="center">
<img src="assets/Margolus_block_neighborhood.svg" width="50%"/>
<figcaption>Two dimensional block celluar automaton with Margolus neighborhoods consisting of overlapping $2\times 2$ blocks. Source: David Eppstein, <a src="https://en.wikipedia.org/wiki/File:Margolus_block_neighborhood.svg">Wikipedia </a>.</figcaption>
</figure>

A useful way to picture what is going, at least in the case of one spatial dimension, is via a spacetime representation, in which the blocks describing the invertible mappings form a brickwork pattern.

<figure align="center">
<img src="assets/brickwall.png" width="450"/>
<figcaption>Spacetime representation of a block celluar automaton in one space and one time dimension (running vertically). The blue squares with two inputs and two outputs represent an invertible mapping on the possible states of two sites: 00, 01, 10, 11.</figcaption>
</figure>

A more creative way to picture the mechanics of block CAs is provided by this tweet from Matt Henderson.

<div>
<blockquote class="twitter-tweet" align="center"><p lang="en" dir="ltr">given these four jigsaw pieces, there is only one way to fill in the rest of the puzzle. The solution ends up drawing a Sierpinski triangle. Can you see why? <a href="https://t.co/OvxVz2oehy">pic.twitter.com/OvxVz2oehy</a></p>&mdash; Matt Henderson (@matthen2) <a href="https://twitter.com/matthen2/status/1529552315337818112?ref_src=twsrc%5Etfw">May 25, 2022</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

How many possible blocks are there in this construction? Evidently a block must describe a permutation of the four possible states of two sites 1: 00, 2: 01, 3: 10, 4: 11. Thus there are $4!=24$ possibilities. It's convenient to order them lexicographically:

0. (1234)
1. (1243)
2. (1324), and so on

Thus block 2 is the map

$$
(00, 01, 10, 11) ⟶ (00, 10, 01, 11)
$$

i.e an exchange of the two sites, known as the SWAP gate in quantum information.

As before it's useful to plot the look at two trajectories that initially differ by a single site.

<script src="assets/block-ca.js"></script>
<figure align="center">
<div id="block"  style="display: inline-block"></div>
<figcaption>All possible blocks for a two-site ?</figcaption>
</figure>

Although 





### Spacetime duality and self-duality

### Dynamics of mutual information

Credit Andrea here

Mutual information

## Quantum circuits

Block CAs have a natural quantum analog in **unitary quantum circuits**. In general a quantum circuit is a map on the quantum state of a system composed of many identical subsystems. Usually these subsystems are *qubits* (spin-1/2 systems with Hilbert space $\mathbb{C}$) in analogy to the two states of an elementary cellular automaton. 

<figure align="center">
<img src="assets/Reversible_circuit_composition.svg.png" width="20%">
<figcaption>Schematic of a quantum circuit. Reading from left to right, $f$ acts on top five qubits, then $g$ acts on lower seven.</figcaption>
</figure>



Here the bijections that apply to each block are replaced with unitary operations that 





## Frontiers

Measurements and complexity