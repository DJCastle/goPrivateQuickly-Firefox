# Permissions & Reviewer Notes — Go Private Quickly (Firefox)

This document explains every permission the extension requests and why it is
required. It is written for store reviewers and privacy-conscious users. The
canonical privacy policy is [`../PRIVACY.md`](../PRIVACY.md).

## Final permission list

This repository ships the **Firefox** build.

| Permission | Required for | Notes |
| --- | --- | --- |
| `storage` | Remembering the welcome page was shown | A single `onboardingShown` flag in `chrome.storage.local`. No settings, no browsing data. |

No host permissions. No `tabs`, `activeTab`, `cookies`, `downloads`,
`bookmarks`, `history`, `management`, `proxy`, `webRequest`,
`declarativeNetRequest`, `nativeMessaging`, or clipboard permissions.

Firefox does **not** request `privacy`. Firefox's `BrowserSetting` API has no
private-session scope, so the extension never mutates global privacy config. The
Firefox build therefore offers no Hardened Private Mode at all — it only opens
private windows, one click from the toolbar.

> The Chromium build (which does use `privacy`, scoped to
> `incognito_session_only`) ships from a separate repository:
> [goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium).

## Reviewer note — why `storage` is required

- **`storage`** — The only data stored is a single `onboardingShown` boolean so
  the one-time welcome page doesn't re-open. Total size is a few bytes. No
  settings, browsing history, URLs, queries, page content, cookies, or
  identifiers are ever stored. Nothing is transmitted.

## What this build never changes

The Firefox build changes no browser settings at all — it only opens private
windows. Security protections are never read or written: Safe Browsing,
phishing/malware protection, certificate validation, HTTPS protections,
browser-update checks, download scanning, password-manager protections, and
autofill. (The Chromium build's Hardened Mode also leaves all of these
untouched.)

## No remote code, no network

All code ships in the package. There is no `eval`, no `new Function`, no remote
script loading, no `fetch`/`XMLHttpRequest`/WebSocket, no analytics, telemetry,
or crash reporting. Pages run under an explicit strict CSP
(`script-src 'self'; object-src 'self'`).
