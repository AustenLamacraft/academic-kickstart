# Theories of Quantum Matter

These are the materials for the Part III course Theories of Quantum Matter at the University of Cambridge

- The `master` branch contains the lecture notes that are published on [my site](https://austen.uk).

- The branch `lecture-notes-<year>` contains the files with annotations made during the lectures in `<year>`.

- View these with the Markdown viewer of your choice, ideally one that is LaTeX-aware: I recommend [Typora](https://typora.io) (you will need to turn on the options for Inline Math and Equation Numbering in the preferences panel).

- Alternatively you could convert to PDF using [pandoc](https://pandoc.org).

- Feel free to [submit any issues](https://github.com/AustenLamacraft/tqm/issues) with the notes!

## Switching between master (for Hugo site) and lecture notes (for Typora)

- Figures for Hugo follow the format: `{{< figure src="HOM.png" title="Four possible outcomes after the passage of two bosons through a beam splitter." numbered="true" lightbox="true" >}}`

- Figures for Typora use standard markdown

## TODOs

- [ ] Internal references among lectures

- [ ] LaTeX in figure captions for Hugo

- [ ] Citations for Hugo

- [ ] Make Typora template in the Academic style, allowing for sidenotes. Look into [Tufte CSS](https://edwardtufte.github.io/tufte-css/)

## Content TODOs

1. Terminology for one particle and single particle operators is confusing.
2. One particle and two particle operators should be introduced via detailed examples first. In the two particle case can follow the discussion of Nazarov  / Danon

1. Is there a factor of 2 in Eq. (40) of Lattice models?

1. Background charge density in Jellium lecture handled correctly?

1. Improve discussion of fractional statistics

2. Sawada for plasmons

3. Question on Majumdar--Ghosh

4. Luttinger model: density matrix of left movers when right movers traced out.

5. Structure factor from scattering of a particle from density fluctuations.

6. Issue of $\sqrt{n(x)}e^{i\theta(x)}$ vs. $e^{i\theta(x)}\sqrt{n(x)}$.

7. Comment on Lieb--Liniger

 >In (7) we defined $\theta$ (after taking the log) $$\theta(k) = 2 \mathrm{arccot}(k/c)$$ which is the physical phase shift upon scattering. In Lieb-Liniger's paper, however, $$\theta(k) = -2 \arctan(k/c)$$ which is more by $\pi$ than our definition for negative $k$ and less by $\pi$ for positive ones.
 > There are two issues with this:

 <ol>
 <li>In (24), $I_j$ must be an integer no matter what with our definitions, since it's a direct consequence of periodic BC. In Lieb-Liniger's paper, the half-integer $I$'s for even $N$ are due to the $\pi$'s defined away; in fact they remark that the impenetrable limit of an even number of bosons is linked to free fermions with antiperiodic BC (footnote 6 in the paper).</li>
 <li>The argument in the paper for $I$'s all being different relies on the fact that their definition of $\theta(k)$ decreases monotonically for all $k$ (eq. (2.25) in the paper). This is not true for our definition (it jumps from $-\pi$ at $k=0-$ to $+\pi$ at $k=0+$, so there is no good reason why $I$'s in our treatment are all different.</li>
 </ol>

 This could be fixed by changing over completely to Lieb-Liniger's definition which is not as intuitive as keeping $\theta$ the physical scattering phase; or by defining $\theta(k)$ on the interval $[0,2\pi]$ so that it decreases monotonically: this saves Lieb-Liniger's argument for different $I$'s, but they will change to (presumably negative) integers and it's not fully intuitive either. In any case, the argument used to get half-integer $I$ for even $N$ is wrong.
 The continuum limit derivations depend only on $\theta'(k)$ which goes unaffected, so that part should be fine, although the $\pi$ in (39) and (42) may have something to do with this.