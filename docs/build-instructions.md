# Build Instructions (for store reviewers)

Go Private Quickly ships from a tiny, **zero-dependency** build step. Firefox
Add-ons (AMO) asks for source plus reproduction steps when an add-on is built
from sources rather than uploaded as hand-written files — this is that.

## What the build does

`build.mjs` is a short Node script using only Node built-ins (`node:fs`,
`node:path`, `node:url`, `node:zlib`). It does one thing:

1. Copies `src/` verbatim into `dist/firefox/` and drops the repo-root
   `manifest.json` at `dist/firefox/manifest.json`.

There is **no transpilation, bundling, minification, or obfuscation**. The
JavaScript and CSS in `dist/` are byte-for-byte the files in `src/`, and the
`manifest.json` is byte-for-byte the one at the repo root. Nothing is fetched
from the network at build time or run time.

## Requirements

- Node.js 18 or newer (any recent LTS). No `npm install` — there are no
  dependencies and no `node_modules`.

## Steps

```bash
# from the repo root
node build.mjs            # writes dist/firefox/
node build.mjs --zip      # also writes dist/firefox.zip (manifest at zip root)
```

Output:

- `dist/firefox/` — the Firefox Add-ons package contents
- `dist/firefox.zip` — the same, zipped for upload (with `--zip`)

## Verifying the source matches the package

Every file in the uploaded package exists unchanged under `src/`, plus the
repo-root `manifest.json`. Reviewers can diff `dist/firefox/` against `src/` +
`manifest.json` to confirm; nothing is transformed.

## Tests

```bash
node --test
```

Runs the zero-dependency unit tests in `test/` covering the hardened-setting
builder and the Firefox privacy adapter.

## Source of truth

All source is in this repository: `src/`, `manifest.json`, `build.mjs`,
`test/`. There is no external or remotely hosted code.
