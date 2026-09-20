# JavaScript UI Library

Educational JavaScript UI library for practice: a small jQuery-style `$` core built from scratch, plus a set of interactive UI components built on top of it.

## Contents

- `src/js/lib/core.js` — the `$` selector/wrapper core
- `src/js/lib/modules/` — DOM helpers (classes, attributes, display, effects, event handlers)
- `src/js/lib/components/` — accordion, carousel, dropdown, modal, tab
- `src/js/lib/services/requests.js` — a small fetch/AJAX helper
- `src/sass/` — component styles (SCSS)
- `test_project/` — a plain HTML/CSS/JS page demonstrating the library in use
- `dist/` — compiled output

## Tech Stack

- Vanilla JavaScript (no framework), Babel + core-js for transpilation/polyfills
- Sass
- Gulp (build pipeline: HTML copy, Sass compilation, JS bundling via Webpack) + Browsersync

## Getting Started

```bash
git clone https://github.com/korzinmark/js_ui_library.git
cd js_ui_library
npm install
npx gulp
```

`npx gulp` runs the default task (watch + build). `npx gulp prod` builds a production bundle.
