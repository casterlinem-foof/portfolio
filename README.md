# Personal Portfolio — "Field Notes & Plates"

A minimalist, mobile-first personal page + portfolio in a vintage
natural-history plate style. Plain HTML/CSS/JS — no build step, no
frameworks. Ready for GitHub Pages.

## Files

- `index.html` — the whole page (hero, plates gallery, work list, about)
- `styles.css` — mobile-first styles, Cormorant Garamond + paper tones
- `script.js` — quiet reveal-on-scroll (content stays visible if JS fails)
- `images/` — 7 web-sized plates (hero + 6 gallery), ~1.2 MB total

## Publish to GitHub Pages

1. Create a new public repo on GitHub (e.g. `portfolio`), and upload these
   files to its root (or push this folder with git).
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**,
   choose `main` / `(root)`, Save.
3. Your page goes live at `https://<username>.github.io/portfolio/` within a minute or two.

Want it at `https://<username>.github.io/` directly? Name the repo
`<username>.github.io` instead — same steps.

## Editing

- **Swap a plate:** drop a new `.webp` into `images/` and update the matching
  `<img src>` + `<figcaption>` in `index.html`. Keep images under ~250 KB.
- **Change text:** it's all in `index.html`, in reading order.
- **Add a section:** copy a `<section>` block, give it an `id`, add a nav link.

## Notes

- Fonts load from Google Fonts; the page still works offline with serif fallbacks.
- Animations respect `prefers-reduced-motion`.
- Gallery captions are plain English by design — the plates themselves are artwork.
