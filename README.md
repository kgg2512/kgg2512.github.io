# Kang Gyunggoo — Graper Labs Atlas

Personal website: https://kgg2512.github.io/

A connected map of Kang Gyunggoo’s projects, experiments, and background. The catalogue contains 35 records drawn from project documentation and GitHub repositories, with recorded stages and source links. Ideas, archived work, internal tools, demos, and related organizations are distinguished from operating products.

## Navigation

- Atlas: opens as a project control room with an automatically moving toroidal particle field, project stars, real feature/technology child nodes, catalogue metrics, a selection inspector, and sector distribution controls. Category filters, relationship labels, and the 2D view remain available.
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

Motion refinement: automatic angular speed is now 0.11 radians/second (about 2.44 times the previous rate), with a gentle tilt drift and a 33ms rendering interval. The core pulses and spins, hub rays rotate, stars twinkle at staggered phases, and dashed rings/relations flow. Blank-space hover and focused toolbar buttons no longer hold rotation; hovering or keyboard-focusing a node still holds motion for selection. The motion control pauses all effects. Hidden pages, 2D mode, dragging, and reduced-motion preferences are respected. A Node VM regression check exercised the actual animation functions with controlled timestamps and DOM stubs, covering speed, interaction holds, pause/resume, hidden tabs, routes, 2D, and reduced motion. This is an isolated logic check, not a browser rendering test of the new effects.

Validation: JavaScript syntax and whitespace checks; local browser checks for 35 project nodes, 156 feature/technology nodes, 21 sphere curves, finite coordinates, category filtering (8 of 35 with 45 visible child nodes), pause, 2D, connection guide, child-to-project navigation, and a 390px mobile viewport without horizontal overflow. Desktop and mobile screenshots were visually reviewed. Browser application error log was empty during these checks.


## Current Atlas control room · 2026-10-16

Adopts the visual concept of https://www.instagram.com/reel/DeFwS5LA2fw/ : a dense toroidal particle field, outward connections, and compact information panels. Only its public cover image and caption were accessible; the video reports a playback restriction, so its motion was not observed or reproduced. Previous sphere descriptions above document the superseded presentation.

The current control room is limited to the Atlas map area. A native Canvas 2D layer draws 3,456 decorative particles (half sampled on narrow screens), projected with the same camera as the interactive SVG project nodes. They flow around the tube while the map turns automatically. These particles do not represent additional projects or relationships. The original 35 projects and 156 actual feature/technology entries remain navigable. There are no added dependencies.

The metric strip counts visible projects, capability entries, recorded cross-project relations, and sectors directly from `catalog.js`. The selection inspector shows the selected project's recorded stage, technology/feature tags, and detail link; sector distribution buttons filter the map and metrics. No simulated market statistics or live-data claims are shown. Mobile panels stack below the map, and 2D mode hides the control-room panels and decorative canvas.

Validation: JavaScript syntax and whitespace checks; desktop browser confirmed automatic node movement, motion pause with CSS effects paused, 35/156/11/5 catalogue metrics, infrastructure filtering to 8/45/1/1 and 45 child nodes, ARD detail navigation and inspector state after returning, and 2D hiding both canvas and panels. A 390px mobile viewport had no horizontal overflow and stacked panels; desktop and mobile screenshots were visually reviewed. Browser error log was empty during these checks. Existing isolated animation regression checks also passed.
