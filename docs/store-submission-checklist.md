# Store Submission Checklist — Go Private Quickly (Firefox)

Firefox Add-ons (AMO) submission for the Firefox build. The Chrome Web Store
listing is handled in the
[goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium)
repo. Run the [testing checklist](testing-checklist.md) first.

## Pre-flight

- [ ] `node --test` passes.
- [ ] `node build.mjs --zip` produces a clean `dist/firefox/` and
      `dist/firefox.zip`.
- [ ] Version bumped in `manifest.json`; `CHANGELOG.md` updated; git tag
      `gpq-vX.Y.Z` created.
- [ ] Privacy policy reachable at its public URL.
- [ ] No `console.log` of any browsing data; no remote resources; no network
      calls.

## Firefox Add-ons (AMO)

- [ ] Developer account active.
- [ ] Manifest V3 with `browser_specific_settings.gecko` id +
      `strict_min_version`.
- [ ] Permissions = `["storage"]` only (no `privacy` on Firefox).
- [ ] Data collection declaration: **No** data collected or transmitted (the
      extension makes no external network requests).
- [ ] Source code provided / repository linked (no minification or bundling —
      vanilla JS ships as-is, so review is straightforward). See
      [build-instructions.md](build-instructions.md).
- [ ] Listing note: this Firefox build offers no Hardened Private Mode (Firefox
      has no private-session scope for privacy settings); it only opens private
      windows and never changes global Firefox settings.
- [ ] Screenshots updated to show a one-click private window and the onboarding
      page (this build has no popup and no settings page).
- [ ] Upload `dist/firefox.zip`.

## Post-submission

- [ ] Tag pushed; release notes drafted from `CHANGELOG.md`.
- [ ] Update the parent CodeCraftedApps site if the public site changed.
