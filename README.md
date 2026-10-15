# Kang Gyunggoo — Graper Labs Atlas

Personal website: https://kgg2512.github.io/

A connected map of Kang Gyunggoo’s projects, experiments, and background. The catalogue contains 35 records drawn from project documentation and GitHub repositories, with recorded stages and source links. Ideas, archived work, internal tools, demos, and related organizations are distinguished from operating products.

## Navigation

- Atlas: opens in a dark spatial network view with cyan/pink particle clusters, slow automatic rotation, category filters, and relationship labels. The 2D view remains available.
- Projects: searchable catalogue and 35 individual hash-route detail pages.
- About: personal background and Graper Labs identity.
- Connection guide: a bounded, prewritten animation. It does not call an AI model.

## Files and hosting

Static HTML, CSS, JavaScript, and local assets. GitHub Pages serves the repository root from `main`; `.nojekyll` disables Jekyll processing. No build step or external runtime dependencies are required.

`catalog.js` holds the curated records. `app.js` renders routes, search, graph interactions, and the guide. `styles.css` contains responsive dark and light themes.

Run `python -m http.server 8771` from this folder for a local preview. Commit and push reviewed changes to `main` to publish.

Source links may require repository or Notion access. The site publishes curated project summaries rather than source-document exports. It contains no credentials, `.env` files, tracking scripts, or analytics service.

## Atlas network update · 2026-10-16

Reference: https://www.instagram.com/reel/DcHPKO-gQLs/ . Visual review used 15 sampled frames across the 15.021-second clip, rather than its unrelated caption. The graph borrows the dark spatial clusters, fine filaments, and camera rotation; it does not reproduce the video's lower dashboard or claim the same underlying application.

Only the Atlas graph presentation changes. The 35 project records, source links, Projects and About content remain intact. The 750 small particles and their local filaments are decorative texture, excluded from navigation and accessibility, not extra records or verified project relationships. Existing catalogue relations remain the meaningful links. No external renderer or dependency is required.

Rotation has a pause control, pauses while interacting with the graph, and stops off-page or in a hidden tab. Reduced-motion preferences disable automatic rotation.

Validation: JavaScript syntax check; local browser checks for default Orbit, 35 records, category filtering (8 of 35 with 150 visible texture points), pause, 2D, connection guide, MyFit detail navigation, and a 390px mobile viewport without horizontal overflow. Browser application error log was empty during these checks.
