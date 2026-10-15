# Kang Gyunggoo — Graper Labs Atlas

Personal website: https://kgg2512.github.io/

A connected map of Kang Gyunggoo’s projects, experiments, and background. The catalogue contains 35 records drawn from project documentation and GitHub repositories, with recorded stages and source links. Ideas, archived work, internal tools, demos, and related organizations are distinguished from operating products.

## Navigation

- Atlas: interactive SVG graph with 2D and spatial projection views, category filters, and relationship labels.
- Projects: searchable catalogue and 35 individual hash-route detail pages.
- About: personal background and Graper Labs identity.
- Connection guide: a bounded, prewritten animation. It does not call an AI model.

## Files and hosting

Static HTML, CSS, JavaScript, and local assets. GitHub Pages serves the repository root from `main`; `.nojekyll` disables Jekyll processing. No build step or external runtime dependencies are required.

`catalog.js` holds the curated records. `app.js` renders routes, search, graph interactions, and the guide. `styles.css` contains responsive dark and light themes.

Run `python -m http.server 8771` from this folder for a local preview. Commit and push reviewed changes to `main` to publish.

Source links may require repository or Notion access. The site publishes curated project summaries rather than source-document exports. It contains no credentials, `.env` files, tracking scripts, or analytics service.
