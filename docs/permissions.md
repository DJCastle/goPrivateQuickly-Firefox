# Permissions & Reviewer Notes — Go Private Quickly (Firefox)

This document explains every permission the extension requests and why it is
required. It is written for store reviewers and privacy-conscious users. The
canonical privacy policy is [`../PRIVACY.md`](../PRIVACY.md).

## Final permission list

This repository ships the **Firefox** build.

| Permission | Required for | Notes |
| --- | --- | --- |
| `storage` | Saving the user's own settings | `chrome.storage.sync` with `chrome.storage.local` fallback. No browsing data. |

No host permissions. No `tabs`, `activeTab`, `cookies`, `downloads`,
`bookmarks`, `history`, `management`, `proxy`, `webRequest`,
`declarativeNetRequest`, `nativeMessaging`, or clipboard permissions.

Firefox does **not** request `privacy`. Firefox's `BrowserSetting` API has no
private-session scope, so the extension never mutates global privacy config; it
reports each hardened protection as "Unavailable in this browser." The private
window still opens — it simply can't add session-scoped protections on Firefox.

> The Chromium build (which does use `privacy`, scoped to
> `incognito_session_only`) ships from a separate repository:
> [goPrivateQuickly-Chromium](https://github.com/DJCastle/goPrivateQuickly-Chromium).

## Reviewer note — why `storage` is required

- **`storage`** — The only data stored is the user's own preferences (the three
  advanced Hardened Mode toggles). Total size is well under 1 KB. No browsing
  history, URLs, queries, page content, cookies, or identifiers are ever stored.
  Nothing is transmitted.

## What Hardened Private Mode never touches

Security protections are explicitly out of scope and are never read or written:
Safe Browsing, phishing/malware protection, certificate validation, HTTPS
protections, browser-update checks, download scanning, password-manager
protections, and autofill. On Firefox, hardened protections are reported
"Unavailable" rather than applied, so global Firefox settings are never changed.

## No remote code, no network

All code ships in the package. There is no `eval`, no `new Function`, no remote
script loading, no `fetch`/`XMLHttpRequest`/WebSocket, no analytics, telemetry,
or crash reporting. Pages run under an explicit strict CSP
(`script-src 'self'; object-src 'self'`).
