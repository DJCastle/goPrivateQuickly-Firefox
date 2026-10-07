# Firefox Add-ons (AMO) — Listing Copy

This document is structured so you can copy-paste each field straight
into the Firefox Add-ons developer hub
(addons.mozilla.org/developers/). AMO uses different field names than
the Chrome Web Store and has different limits.

---

## Release notes — 1.2.1

> Fixed the welcome page's description of the toolbar icon: it turns to the muted silver mask in private windows and shows full color otherwise.

## Add-on name

> Go Private Quickly

_AMO suggests keeping names under 50 chars. Currently: 22._

## Summary (short description)

> One click opens a fresh private window, right from your toolbar. Free, open source, and genuinely zero-tracking — no analytics, no network requests, nothing collected.

_AMO summary is shown in search results. Max 250 chars. Currently: 165._

## Categories

- **Primary:** Privacy & Security
- **Secondary:** Other

## Tags

> privacy

_AMO now offers only a fixed tag list; "privacy" is the one honest fit ("security" would overstate it)._

## Description

Plain text — reads human and pastes cleanly into AMO (it auto-links the URLs).

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new private window. Click the icon, you're private. That's the whole idea.

I built it because I open private windows all day and wanted it to be one click instead of a trip through a menu — and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new private window, straight from the toolbar.
- A toolbar icon that quietly shows whether the window you're in is private.
- It changes no browser settings. It opens the window and stays out of the way.

WHAT IT HONESTLY DOES NOT DO (I'd rather set expectations than oversell)
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't touch your normal browsing or clear anything.

If you want real anonymity, use Tor. For network privacy, a reputable VPN. For tracker blocking, uBlock Origin or Firefox's built-in protection. GPQ plays nicely alongside all of them — it just gets you into a private window faster.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests — the extension never connects to the internet, period.
- The only permission it requests on Firefox is "storage," used only to remember that you've seen the one-time welcome page. There are no settings to store.
- No third-party code, no CDNs, no remote scripts. It's open source, so you can read every line.

ONE-TIME SETUP
Firefox sensibly won't let an extension switch itself on in private windows. The first time you install, a short welcome page walks you through flipping that one switch. You only do it once.

Open source under the MIT License: https://github.com/DJCastle/goPrivateQuickly-Firefox
Questions or problems: support@codecraftedapps.com
```

## Privacy policy URL

> https://codecraftedapps.com/extensions/go-private-quickly/privacy.html

## Support email

> support@codecraftedapps.com

## Support website

> https://codecraftedapps.com/extensions/go-private-quickly/support.html

## Homepage URL

> https://codecraftedapps.com/extensions/go-private-quickly/

## Add-on type / license

- **License:** MIT License (already declared in manifest's
  `browser_specific_settings.gecko` block is optional for this; AMO
  asks separately during submission).

## Screenshots (up to 10; AMO recommends at least 4)

Upload the three files in this folder. They show the 1.2.1 UI: the toolbar
icon in a normal and a private window, and the welcome page with the corrected
icon wording. AMO accepts native size as-is and displays it scaled — no
resizing needed.

## Notes for AMO reviewers (paste into "Notes to reviewer" field)

```
This extension is a single-purpose tool: a one-click way to open a
new private/incognito window.

PERMISSIONS

- "storage" — used solely to persist a single onboardingShown flag so
  the one-time welcome page doesn't re-open. No settings and no personal
  data are stored.
- "incognito": "spanning" — required so the same extension instance
  serves both normal and private windows.

This extension does NOT request the "privacy" permission and changes no
browser settings — it only opens private windows.

No host permissions, no content scripts, no tabs permission, no
activeTab. The extension does not read, modify, or inject anything
into any web page.

NETWORK

The extension makes ZERO network requests. There is no `fetch`,
`XMLHttpRequest`, WebSocket, EventSource, image beacon, external
font, CDN, or third-party SDK in the package. You can verify this in
the source files under src/ — the shipped .js files are short, vanilla,
and self-contained: background.js and onboarding.js. src/shared/ is
test-only scaffolding and is excluded from the package.

OUTBOUND LINKS

The onboarding page contains three outbound links:
- https://codecraftedapps.com/extensions/go-private-quickly/ (twice: the
  product page)
- mailto:support@codecraftedapps.com (support email)

All only activate when the user clicks them.

SOURCE

The unminified source matches the submitted package and is publicly
available at https://github.com/DJCastle/goPrivateQuickly-Firefox
(extension files at the repo root). The build pipeline is a
zero-dependency Node script (build.mjs) that drops manifest.json at the
package root and copies src/ (minus the test-only src/shared/) to
dist/firefox/. Nothing is transformed.

If you have questions, please contact
support@codecraftedapps.com.
```

## Pricing

> Free
