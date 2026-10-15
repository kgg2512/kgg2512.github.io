# Kang Gyunggoo — Graper Labs Atlas

Personal website: https://kgg2512.github.io/

A connected map of Kang Gyunggoo’s projects, experiments, and background. The catalogue contains 35 records drawn from project documentation and GitHub repositories, with recorded stages and source links. Ideas, archived work, internal tools, demos, and related organizations are distinguished from operating products.

## Navigation

- Atlas: opens as a dark spherical universe with a glowing central core, category hubs, project stars, real feature/technology child nodes, curved connections, and slow automatic rotation. Category filters, relationship labels, and the 2D view remain available.
- Projects: searchable catalogue and 35 individual hash-route detail pages.
- About: personal background and Graper Labs identity.
- Connection guide: a bounded, prewritten animation. It does not call an AI model.

## Files and hosting

Static HTML, CSS, JavaScript, and local assets. GitHub Pages serves the repository root from `main`; `.nojekyll` disables Jekyll processing. No build step or external runtime dependencies are required.

`catalog.js` holds the curated records. `app.js` renders routes, search, graph interactions, and the guide. `styles.css` contains responsive dark and light themes.

Run `python -m http.server 8771` from this folder for a local preview. Commit and push reviewed changes to `main` to publish.

Source links may require repository or Notion access. The site publishes curated project summaries rather than source-document exports. It contains no credentials, `.env` files, tracking scripts, or analytics service.

## Atlas universe update · 2026-10-16

References: https://www.instagram.com/reel/DcHPKO-gQLs/ and https://www.instagram.com/reel/DZW-iF9tkVz/ . Visual review used 15 sampled frames across the first 15.021-second clip and 20 sampled frames across the second 6.7-second clip. The current design adopts the second reference's wireframe sphere, equatorial rings, glowing pink core, radial hubs, and curved links. This is a visual adaptation, with no claim to the referenced application's AI or retrieval capabilities.

Only the Atlas graph presentation changes. The 35 project records, source links, Projects and About content remain intact. The previous 750 decorative particles have been replaced by 156 child nodes derived directly from existing feature and technology entries in `catalog.js`. Hovering reveals their actual labels; selecting one opens its parent project. Child links mean catalogue membership, while existing cross-project relations retain their recorded meaning. Sphere lines and hub rays are decorative and excluded from accessibility. No external renderer or dependency is required.

Rotation has a pause control, pauses while interacting with the graph, and stops off-page or in a hidden tab. Reduced-motion preferences disable automatic rotation.

Validation: JavaScript syntax and whitespace checks; local browser checks for 35 project nodes, 156 feature/technology nodes, 21 sphere curves, finite coordinates, category filtering (8 of 35 with 45 visible child nodes), pause, 2D, connection guide, child-to-project navigation, and a 390px mobile viewport without horizontal overflow. Desktop and mobile screenshots were visually reviewed. Browser application error log was empty during these checks.
