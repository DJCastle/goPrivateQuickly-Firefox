# Changelog — Go Private Quickly (GPQ)

All notable changes to this extension are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version scheme: [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.5] — 2026-06-11

### Changed

- Refreshed the toolbar mask artwork. A muted silver "secure" mask now marks
  private windows; the vivid purple-and-gold mask marks normal windows (and is
  the store listing icon).

### Fixed

- Corrected documentation that described the toolbar icon's colors in reverse
  (it previously said the colorful mask appeared in private windows).

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
- **Advanced settings** (off by default, each with a warning): strict WebRTC
  routing (`proxy_only`), disable WebRTC entirely, and disable referrer
  headers. On Firefox these report as "Unavailable" (no private-session scope).
- **First-run onboarding** that walks through enabling the extension in
  private/incognito windows.
- Light and dark theme support; keyboard navigation and screen-reader labels.

### Privacy

- No data collection, no analytics, no telemetry, no network requests, and
  no remote code. Chromium requests `storage` and `privacy`; Firefox requests
  only `storage`. Strict Content Security Policy.

[1.1.5]: https://github.com/DJCastle/goPrivateQuickly-Firefox/releases/tag/gpq-v1.1.5
[1.0.0]: https://github.com/DJCastle/goPrivateQuickly-Firefox/releases/tag/gpq-v1.0.0
