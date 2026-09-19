# goPrivateQuickly-Firefox — Claude Instructions

Shared craft rules — imported so every surface loads them, including Xcode's sandboxed agent:

@Agentic_Developer.md

## Stack & purpose

Standalone **Firefox** build of Go Private Quickly (GPQ): one click on the
toolbar icon opens a new private window. No popup, no settings page — Hardened
Private Mode is Chromium-only (Firefox can't confine privacy settings to a
private session), so that subsystem ships only as inert scaffolding + tests
here. Manifest V3, vanilla JS only — no bundler, no framework, no TypeScript.
The Chromium build is a separate repo (`goPrivateQuickly-Chromium`); the public
website lives in `codeCraftedApps` at `codecraftedapps.com/extensions/`.

- **Repo:** `DJCastle/goPrivateQuickly-Firefox` (public)
- **Local path:** `~/Developer/Projects/goPrivateQuickly-Firefox/`
- **Targets:** Firefox 115+ (incl. ESR).
- **Distribution:** Firefox Add-ons (AMO).
- **History:** split out of the `DJCastle/browserExtensions` monorepo on
  2026-06-07. One-repo-per-base-browser is the standard for independent extensions; shared-engine products use a per-product monorepo (workspace decision, amended 2026-07-11).

## Firefox specifics

- **Direct launch, no popup (2026-06-28).** Toolbar click opens a private window
  straight from `chrome.action.onClicked` in `background.js` — no `default_popup`,
  no `options_ui`. The handler checks `isAllowedIncognitoAccess()` first and opens
  onboarding if not granted (Firefox requires private-window access to open one
  programmatically, so this avoids a silent dead click). The popup + options +
  `prefs.js` were deleted; `firefoxAdapter`/`hardenedDefaults`/`sessionManager`
  stay as scaffolding for a possible future opt-in mode and are covered by tests.
- **No `privacy` permission.** Firefox's `BrowserSetting` API has no
  private-session scope. Hardening that can't be confined to the private session
  would mutate global config, which GPQ refuses to do — so `firefoxAdapter`
  reports every protection as "unavailable". The private window still opens.
- `manifest.json` carries `browser_specific_settings.gecko`
  (id `go-private-quickly@codecraftedapps.com`, `strict_min_version` 115.0,
  `data_collection_permissions.required: ["none"]`), `incognito: "spanning"`,
  and a non-persistent `background.scripts` event page.
- `onStartup` fires reliably on Firefox (unlike Chromium's "Continue where you
  left off" gap).

## Layout (flat, single-browser)

```text
manifest.json          the manifest (no base/overlay split anymore)
src/                   all source (Firefox adapter only)
build.mjs              zero-dep Node build → dist/firefox/ (+ dist/firefox.zip with --zip)
test/                  node --test unit tests
tools/                 icon generator + sources
store-assets/firefox-amo/
docs/                  reviewer/dev docs (build, permissions, testing, submission)
README.md PRIVACY.md TERMS.md CHANGELOG.md LICENSE
```

`dist/` is build output — gitignored. Internal docs (`CLAUDE.md`,
`CLAUDE-LOG.md`, `HANDOFF.md`, `ROADMAP.md`) are local-only via
`.git/info/exclude`.

## Commit & history hygiene

- **No `Co-Authored-By: Claude` trailer.** Public repo — keep commits clean and
  professional (non-advertisement, not a denial of AI use). The published
  policy is at codecraftedapps.com/ai-policy.html.
- Per-release git tags `gpq-vX.Y.Z`. Bump version in `manifest.json` + update
  `CHANGELOG.md` in the same commit.
- Standard git hygiene: never force-push main, never amend pushed commits, one
  logical change per commit.

## Hard rules — never violate

1. **No analytics, telemetry, error reporting, or crash reporting.** Ever.
2. **No remote code loading or execution.** All code ships in the package.
3. **No host permissions, no `tabs`, no `activeTab`** unless genuinely needed.
   Current permissions: `["storage"]` only.
4. **No `eval()`, no `new Function()`, no inline event handlers.**
5. **No content scripts** — GPQ needs no DOM access on real pages.
6. **No bundler, no TypeScript, no framework.** Vanilla JS, single source tree.
7. **No dependencies in `build.mjs`.** Node built-ins only.

## Conventions

- `manifest.json` is the single source of truth (no more base+overlay merge).
- `chrome.*` namespace throughout (Firefox supports it for every API GPQ needs);
  each source file under ~150 lines.
- No state in module scope — re-read from `chrome.storage` on every event.
- Don't add `web_accessible_resources` unless a feature truly needs it.

## Known issues / don't reintroduce

- **No private-session scope on Firefox** — never mutate global privacy config
  to "harden"; report unavailable instead.
- **Default-disabled in private windows.** Users enable per-extension in
  `about:addons`; onboard via `chrome.extension.isAllowedIncognitoAccess()`. The
  toolbar handler relies on this check to route to onboarding instead of failing.
- **Storage** — the Firefox build writes only the `onboardingShown` flag to
  `chrome.storage.local` (no sync, no user settings).
- **Firefox for Android is permanently out of scope** (verified 2026-09-01).
  Android Firefox implements no `windows` API at all — `windows`, `windows.create`,
  and its `incognito` option are all `version_added: false` in MDN's compat data.
  GPQ's only function can't exist there. Omitting `gecko_android` from
  `browser_specific_settings` is the correct manifest state and keeps AMO
  desktop-only. Don't revisit on Android-extension news.
- **`src/shared/` is not shipped.** `build.mjs` filters it out of `dist/`. It's
  inert scaffolding no shipped file imports; the tests import it from `src/`
  directly. Don't "fix" the build by copying `src/` wholesale again.

## Cross-repo sync

Part of the CodeCraftedApps ecosystem. If the public site or repo URLs change,
the "View source" links live in `codeCraftedApps/extensions/go-private-quickly/`
(`chrome.html`, `firefox.html`).

## Documentation maintenance

When a gotcha surfaces, add it to **Known issues** the same session. Keep this
file under 150 lines; `CLAUDE-LOG.md` holds time-bound decisions.
