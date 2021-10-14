1. Rename markdown files to `.pdc` or use `markup: pandoc` in front matter to use pandoc as external helper.

2. MathJax config in `assets/js/mathjax-config.js`.

# [Academic Kickstart](https://sourcethemes.com/academic/)

**Academic** makes it easy to create a beautiful website for free using Markdown, Jupyter, or RStudio. Customize anything on your site with widgets, themes, and language packs. [Check out the latest demo](https://academic-demo.netlify.com/) of what you'll get in less than 10 minutes, or [view the showcase](https://sourcethemes.com/academic/#expo).

**Academic Kickstart** provides a minimal template to kickstart your new website.

- [**Get Started**](#install)
- [View the documentation](https://sourcethemes.com/academic/docs/)
- [Ask a question](http://discuss.gohugo.io/)
- [Request a feature or report a bug](https://github.com/gcushen/hugo-academic/issues)
- Updating? View the [Update Guide](https://sourcethemes.com/academic/docs/update/) and [Release Notes](https://sourcethemes.com/academic/updates/)
- Support development of Academic:
  - [Donate a coffee](https://paypal.me/cushen)
  - [Become a backer on Patreon](https://www.patreon.com/cushen)
  - [Decorate your laptop or journal with an Academic sticker](https://www.redbubble.com/people/neutreno/works/34387919-academic)
  - [Wear the T-shirt](https://academic.threadless.com/)

[![Screenshot](https://raw.githubusercontent.com/gcushen/hugo-academic/master/academic.png)](https://github.com/gcushen/hugo-academic/)

## Install

You can choose from one of the following four methods to install:

* [**one-click install using your web browser (recommended)**](https://sourcethemes.com/academic/docs/install/#install-with-web-browser)
* [install on your computer using **Git** with the Command Prompt/Terminal app](https://sourcethemes.com/academic/docs/install/#install-with-git)
* [install on your computer by downloading the **ZIP files**](https://sourcethemes.com/academic/docs/install/#install-with-zip)
* [install on your computer with **RStudio**](https://sourcethemes.com/academic/docs/install/#install-with-rstudio)

Then [personalize your new site](https://sourcethemes.com/academic/docs/get-started/).

## Ecosystem

* **[Academic Admin](https://github.com/sourcethemes/academic-admin):** An admin tool to import publications from BibTeX or import assets for an offline site
* **[Academic Scripts](https://github.com/sourcethemes/academic-scripts):** Scripts to help migrate content to new versions of Academic

## License

Copyright 2017-present [George Cushen](https://georgecushen.com).

Released under the [MIT](https://github.com/sourcethemes/academic-kickstart/blob/master/LICENSE.md) license.

[![Analytics](https://ga-beacon.appspot.com/UA-78646709-2/academic-kickstart/readme?pixel)](https://github.com/igrigorik/ga-beacon)

## TODOs

1. Is there a factor of 2 in Eq. (40) of Lattice models?

1. Background charge density in Jellium lecture handled correctly?

1. Improve discussion of fractional statistics

1. Question on condensate fluctuations (essentially in my atoms notes)

1. Sawada for plasmons

1. Question on Majumdar--Ghosh

1. Luttinger model: density matrix of left movers when right movers traced out.

1. Structure factor from scattering of a particle from density fluctuations.

1. Issue of $\sqrt{n(x)}e^{i\theta(x)}$ vs. $e^{i\theta(x)}\sqrt{n(x)}$.

1. Comment on Lieb--Liniger

 >In (7) we defined $\theta$ (after taking the log) $$\theta(k) = 2 \mathrm{arccot}(k/c)$$ which is the physical phase shift upon scattering. In Lieb-Liniger's paper, however, $$\theta(k) = -2 \arctan(k/c)$$ which is more by $\pi$ than our definition for negative $k$ and less by $\pi$ for positive ones.
 > There are two issues with this:

 > 1. In (24), $I_j$ must be an integer no matter what with our definitions, since it's a direct consequence of periodic BC. In Lieb-Liniger's paper, the half-integer $I$'s for even $N$ are due to the $\pi$'s defined away; in fact they remark that the impenetrable limit of an even number of bosons is linked to free fermions with antiperiodic BC (footnote 6 in the paper).</li>
 
 >2. The argument in the paper for $I$'s all being different relies on the fact that their definition of $\theta(k)$ decreases monotonically for all $k$ (eq. (2.25) in the paper). This is not true for our definition (it jumps from $-\pi$ at $k=0-$ to $+\pi$ at $k=0+$, so there is no good reason why $I$'s in our treatment are all different.

 > This could be fixed by changing over completely to Lieb-Liniger's definition which is not as intuitive as keeping $\theta$ the physical scattering phase; or by defining $\theta(k)$ on the interval $[0,2\pi]$ so that it decreases monotonically: this saves Lieb-Liniger's argument for different $I$'s, but they will change to (presumably negative) integers and it's not fully intuitive either. In any case, the argument used to get half-integer $I$ for even $N$ is wrong.
 The continuum limit derivations depend only on $\theta'(k)$ which goes unaffected, so that part should be fine, although the $\pi$ in (39) and (42) may have something to do with this.