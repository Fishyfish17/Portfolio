# Disha Mrinalini Murugavel — Portfolio

A single-page portfolio site with a retro Nokia-poster layout wrapped around
a custom painting: the "Creation of Adam" hands reimagined in a Starry Night
palette. The background slowly zooms toward the fingertip gap, and a tiny
glowing "energy cell" sits right at that gap — its charge bars fill and it
sparks at the moment of closest approach, a nod to the electrochemistry work
in the CV as much as to Michelangelo.

No build step, no dependencies — just static HTML/CSS/JS, so it's ready for
GitHub Pages.

## Files

```
index.html        — page markup and content
style.css          — design system (colors, type, layout, animation)
script.js          — small scroll-reveal effect (vanilla JS, no libraries)
assets/hero-bg.png — the hero painting (replace with a higher-res version if you have one)
```

> Heads up: the uploaded painting is 499×400px. It's upscaled to fill the
> hero on larger screens, so on big desktop monitors it'll look a little
> soft. Swap in a higher-resolution export of the same painting (same
> filename, `assets/hero-bg.png`) any time for a sharper result — no other
> changes needed.

## Preview locally

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new repository on GitHub (e.g. `disha-portfolio`).
2. Push these files (including the `assets/` folder and this README) to the repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   (usually live within a minute or two).

## Editing content later

All copy lives directly in `index.html` — CV sections map to `<section>`
blocks (`about`, `experience`, `education`, `skills`, `achievements`,
`contact`). Colors and fonts are defined as CSS variables at the top of
`style.css` under `:root`, so palette or type changes only need to happen
in one place.
