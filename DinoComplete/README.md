# DinoComplete project page

Static project website for **DinoComplete: 3D Shape Completion with Distilled Semantic Priors and State Space Models**, NeurIPS 2026.

Public path after deployment: <https://theycallmefm.github.io/DinoComplete/>.

## Preview

From the website repository root:

```sh
python -m http.server 8000
```

Open the `/DinoComplete/` path on your local server at port `8000`. The project page requires no JavaScript packages or build step. The parent academic website still uses its existing Jekyll build.

## Content and assets

- `index.html`: authors, paper and code links, opening video and TLDR, abstract, method, qualitative comparisons, quantitative results, and citation.
- `static/css/index.css`: responsive styling following the LEMON academic project page.
- `static/js/index.js`: progressively enhanced citation copying; content also works without JavaScript.
- `static/figures/`: original paper figure PDFs, linked from the displayed figures.
- `static/images/`: WebP versions of the paper figures, social sharing images, and a video poster.
- `static/videos/dinocomplete.mp4`: the supplied presentation, remuxed with MP4 metadata at the start for web playback.
- `static/videos/dinocomplete.webm`: VP9/Opus fallback for browsers without H.264/AAC playback support.
- `static/dinocomplete.bib`: downloadable citation; keep it consistent with the citation in `index.html`.

Figures and reported numbers come from `DinoComplete-paper/neurips_2026.tex` and its referenced figures. The social preview uses the input and DinoComplete rows from `Results-main.pdf`, preserving their colors and predictions.

To publish, commit and push the website changes to `master` or `main`. The existing GitHub Pages workflow builds and deploys the entire website and watches `DinoComplete/**` for subsequent asset changes.
