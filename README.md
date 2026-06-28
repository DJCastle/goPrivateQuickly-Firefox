# Go Private Quickly (GPQ) — Firefox

> One-click private windows for Firefox.
> No tracking. No analytics. No network requests. Open source under MIT.
>
> Chromium build (Chrome, Brave, Edge, Arc, Opera, Vivaldi):
> [goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium).

![Version](https://img.shields.io/badge/version-1.1.5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Manifest](https://img.shields.io/badge/manifest-v3-orange)
![Privacy](https://img.shields.io/badge/data%20collection-zero-brightgreen)

## What it does

Click the toolbar icon and a new private window opens right away. One
click, straight from your toolbar. That's the whole idea.

Hardened Private Mode (the optional session-scoped privacy tightening) is
**Chromium-only**: Firefox's `BrowserSetting` API has no private-session
scope, so those settings could only be changed globally — which would
alter your normal browsing. GPQ refuses to do that, so the Firefox build
doesn't offer hardening and never touches your normal settings. The
session-scoped version ships in the
[Chromium build](https://github.com/DJCastle/goPrivateQuickly-Chromium).

The toolbar icon also reflects whether the currently focused window is
private — a vivid purple-and-gold mask when you're in a normal window, a
muted silver mask when you're in a private (secure) one.

## What it does NOT do

GPQ is a convenience tool, not a privacy product. It does not:

- Act as a VPN. Your ISP, employer, school, and any network observer
  can still see the sites you visit.
- Hide your IP address.
- Block trackers, ads, or fingerprinting.
- Clear cookies or history from your normal windows.
- Sync settings to a "GPQ account" — there is no such thing. The only
  syncing is your browser's own (Chrome sync, Firefox Sync, etc.).
- Connect to the internet for any reason. There are no `fetch` or
  `XMLHttpRequest` calls anywhere in the source.

For genuine privacy beyond what private mode itself gives you, look
at uBlock Origin (tracker blocking), a reputable VPN (network-level
privacy), HTTPS-Only mode in your browser (transport encryption), and
DNS-over-HTTPS (DNS-query encryption). GPQ doesn't replace any of
those.

## Install

- **Firefox**: install from Firefox Add-ons. _(Listing pending review.)_

Using a Chromium browser (Chrome, Brave, Edge, Arc, Opera, Vivaldi)? It's a
separate package —
[goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium).

In the meantime you can build and load it from source — see
[docs/build-instructions.md](docs/build-instructions.md).

### One quick post-install step

By browser security policy, extensions can't enable themselves in private
windows. The first time you install GPQ it opens a welcome page that walks
you through the one-time toggle:

- `about:addons` → Go Private Quickly → Details →
  **Run in Private Windows: Allow**.

Without that toggle, GPQ can technically run from a normal window but
can't open private ones on your behalf.

## Permissions

Only `"storage"` — used solely to remember that you've already seen the
one-time welcome page. There are no user settings to store on Firefox.
Firefox's `BrowserSetting` API has no private-session scope, so this build
never requests `privacy` and never changes global privacy settings.

GPQ does not request and does not have access to your tabs, history,
cookies, bookmarks, downloads, any specific websites, or any VPN/other
installed software. Full justification lives in
[`docs/permissions.md`](docs/permissions.md) and the
[Privacy Policy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html).

## Settings

None. The Firefox build has no settings page — it does one thing, one
click, with nothing to configure. (The Chromium build adds optional
Hardened Mode toggles, since that browser supports session-scoped
privacy settings.)

## Browser support

| Browser | Minimum version |
| --- | --- |
| Firefox (incl. ESR) | 115+ |

Chromium browsers (Chrome, Brave, Edge, Arc, Opera, Vivaldi — 109+) ship from
the [goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium)
repo.

Tested on macOS as of 1.1.5. Should work on Windows and Linux equally
— the extension uses only standard, cross-platform `chrome.*` APIs.
If you find an OS-specific bug, please email support.

## License

Released under the MIT License. See [LICENSE](LICENSE) at the
repo root or [codecraftedapps.com/extensions/license.html](https://codecraftedapps.com/extensions/license.html).

## Author and support

Built by Don Castle.

- Website: [codecraftedapps.com/extensions](https://codecraftedapps.com/extensions)
- Email: [support@codecraftedapps.com](mailto:support@codecraftedapps.com)
- Privacy Policy: [codecraftedapps.com/extensions/go-private-quickly/privacy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html)
- Terms of Use: [codecraftedapps.com/extensions/go-private-quickly/terms](https://codecraftedapps.com/extensions/go-private-quickly/terms.html)

GPQ is a side project. I plan to keep it working as browsers evolve,
but there's no service-level commitment — see the
[Terms of Use](TERMS.md) for the formal version of that disclaimer.
