// MathJax Configuration
//
// v2 to v3 upgrade notes:
// - The CommonHTML.linebreaks option is not yet implemented (but may be in a future release)
// - The TeX.noUndefined.attributes option is not yet implemented (but may be in a future release)
window.MathJax = {
  // https://stackoverflow.com/questions/65264328/mathjax-3-change-css-styles
  // https://stackoverflow.com/questions/65321568/mathjax-3-inline-math-and-overflow-x
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      const CHTMLmath = MathJax._.output.chtml.Wrappers.math.CHTMLmath;
      CHTMLmath.styles['mjx-container[jax="CHTML"][display="true"][width="full"]'] = {
        display: "block !important",
        ["overflow-x"]: "auto !important",
        ["overflow-y"]: "hidden !important",
        // ["max-width"] : "100% !important",
        ["min-width"] : "100% !important"    
      }
    }
  },
  loader: {
    load: ['[tex]/noerrors', '[tex]/physics'],
  },
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: false,
    packages: {'[+]': ['noerrors', 'physics']},
    tags: 'all'
  },
};