# Changelog — Go Private Quickly (GPQ)

All notable changes to this extension are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version scheme: [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-05-31

First public release.

### Added

- **Open Private Window** — one click opens a new private/incognito window
  on Chromium browsers and Firefox. The toolbar icon reflects whether the
  focused window is private.
- **Open Hardened Private Window** (optional) — opens a private window and
  tightens supported privacy settings for that private session only:
  WebRTC IP protection, network prediction, address-bar search suggestions,
  hyperlink auditing, alternate error pages, the online spelling service,
  the Topics / Ad-measurement / Related Website Sets / Protected Audience
  advertising APIs, and third-party cookies.
  - On Chromium these are applied with the browser's `incognito_session_only`
    scope, so they affect the private session only and the browser restores
    them automatically when the last private window closes — even after a
    crash. Normal browsing settings are never changed, and security
    protections (Safe Browsing, password manager, certificate/HTTPS checks,
    updates, download scanning) are never touched.
  - On Firefox, where these settings cannot be confined to a private session,
    each protection is reported as "Unavailable" rather than changed.
- **Status panel** after a hardened launch shows, per setting: Applied,
  Already protected by browser, Unavailable, Not controllable (policy or
  another extension), or Failed — with text and icons, not color alone.
- **Advanced settings** (off by default, each with a warning): strict WebRTC
  routing (`proxy_only`), disable WebRTC entirely, and disable referrer
  headers.
- **Optional VPN reminder** before opening a hardened window — a local
  dialog only; the extension never inspects, verifies, or controls any VPN.
- **Startup options** — optionally open a private window when the browser
  starts, or be asked first with a configurable 3-, 5-, or 7-second countdown.
- **First-run onboarding** that walks through enabling the extension in
  private/incognito windows.
- Light and dark theme support; keyboard navigation and screen-reader labels.

### Privacy

- No data collection, no analytics, no telemetry, no network requests, and
  no remote code. Chromium requests `storage` and `privacy`; Firefox requests
  only `storage`. Strict Content Security Policy.

[1.0.0]: https://github.com/DJCastle/goPrivateQuickly-Firefox/releases/tag/gpq-v1.0.0
