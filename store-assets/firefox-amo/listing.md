# Firefox Add-ons (AMO) — Listing Copy

This document is structured so you can copy-paste each field straight
into the Firefox Add-ons developer hub
(addons.mozilla.org/developers/). AMO uses different field names than
the Chrome Web Store and has different limits.

---

## Add-on name

> Go Private Quickly

_AMO suggests keeping names under 50 chars. Currently: 22._

## Summary (short description)

> One click opens a fresh private window, right from your toolbar. Free, open source, and genuinely zero-tracking — no analytics, no network requests, nothing collected. Extra session-only privacy hardening on Chromium browsers.

_AMO summary is shown in search results. Max 250 chars._

## Categories

- **Primary:** Privacy & Security
- **Secondary:** Other

## Tags

> private window, incognito, private browsing, privacy, productivity, one click, hardened, no tracking

## Description

Plain text — reads human and pastes cleanly into AMO (it auto-links the URLs).

```
Go Private Quickly does one small thing and tries to do it well: it puts a button in your toolbar that opens a new private window. Click the icon, click the button, you're private. That's the whole idea.

I built it because I open private windows all day and wanted it to be one click instead of a trip through a menu — and because I wanted something that stayed out of the way and didn't quietly phone home. This one never connects to the internet at all.

WHAT YOU GET
- One click to a new private window, straight from the toolbar.
- A toolbar icon that quietly shows whether the window you're in is private.
- An optional "Hardened" mode that tightens extra privacy settings for the private session. A note for Firefox specifically: Firefox doesn't let an extension confine these settings to a single private session, so on Firefox GPQ reports them as "Unavailable" and leaves your normal settings completely untouched rather than changing them globally. The extra hardening currently applies on Chromium browsers — but the one-click private window works fully on Firefox either way.

WHAT IT HONESTLY DOES NOT DO (I'd rather set expectations than oversell)
- It's not a VPN. Your network, ISP, employer, or school can still see the sites you visit.
- It doesn't hide your IP, block ads or trackers, or make you anonymous.
- It doesn't touch your normal browsing or clear anything.

If you want real anonymity, use Tor. For network privacy, a reputable VPN. For tracker blocking, uBlock Origin or Firefox's built-in protection. GPQ plays nicely alongside all of them — it just gets you into a private window faster.

PRIVACY, FOR REAL
- No data collection. None.
- No analytics, no telemetry, no error reporting.
- Zero network requests — the extension never connects to the internet, period.
- The only permission it requests on Firefox is "storage," used to remember your own settings.
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

Three Firefox captures are prepared in this folder (`firefox-1.png`,
`firefox-2.png`, `firefox-3.png`): the popup over about:addons (showing
the Preferences/Hardened Mode panel), the popup over a new Private
window, and the popup over the CodeCraftedApps site. AMO accepts their
native size as-is and displays them scaled — no resizing needed.

## Notes for AMO reviewers (paste into "Notes to reviewer" field)

```
This extension is a single-purpose tool: a one-click way to open a
new private/incognito window.

PERMISSIONS

- "storage" — used solely to persist the user's own settings
  (the three advanced Hardened Mode privacy toggles). No personal
  data is stored.
- "incognito": "spanning" — required so the same extension instance
  serves both normal and private windows.

This Firefox build does NOT request the "privacy" permission. Firefox's
BrowserSetting API has no private-session scope, so Hardened Private
Mode reports every protection as "Unavailable" rather than mutating
global settings; it never changes the user's normal browsing
configuration. (The Chromium build requests "privacy" and applies these
settings with the incognito-session-only scope.)

No host permissions, no content scripts, no tabs permission, no
activeTab. The extension does not read, modify, or inject anything
into any web page.

NETWORK

The extension makes ZERO network requests. There is no `fetch`,
`XMLHttpRequest`, WebSocket, EventSource, image beacon, external
font, CDN, or third-party SDK in the package. You can verify this in
the source files under src/ — the .js files are short, vanilla, and
self-contained (background, popup, options, onboarding, plus the
src/shared/ modules used by the popup and options).

OUTBOUND LINKS

The options and onboarding pages contain a small "Help & support"
section with two outbound links:
- https://codecraftedapps.com/extensions (homepage)
- mailto:support@codecraftedapps.com (support email)

Both only activate when the user clicks them.

SOURCE

The unminified source matches the submitted package and is publicly
available at https://github.com/DJCastle/goPrivateQuickly-Firefox in
privacy/go-private-quickly/. The build pipeline is a zero-dependency
Node script (build.mjs) that performs a manifest merge and a file
copy from src/ to dist/firefox/.

If you have questions, please contact
support@codecraftedapps.com.
```

## Pricing

> Free
