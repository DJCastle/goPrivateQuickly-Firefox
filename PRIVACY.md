# Privacy Policy — Go Private Quickly (GPQ)

**Last updated:** June 28, 2026

## The short version

Go Private Quickly does not collect, store, transmit, sell, share, or
otherwise process any personal data. No analytics. No tracking. No
telemetry. No network requests at all. The only thing it remembers is
your own settings, and those live exclusively in your browser.

If you're the kind of person who only reads the short version, you're
done. Thanks for caring about privacy.

## The slightly longer version

I built Go Private Quickly because I wanted a single-click way to open
a new private window. That is the entire purpose of the extension. On
Firefox there are no settings to configure, so the only thing GPQ stores
is a single flag noting that you've already seen the one-time welcome
page — nothing about what you browse.

That flag is stored in `chrome.storage.local`. It never leaves your
device, never leaves your browser, and never reaches me or anyone else.

## What we collect

Nothing.

## What we store on your device

Exactly one tiny value, well under one kilobyte:

| Key | Values | Purpose |
| --- | --- | --- |
| `onboardingShown` | `true` / `false` | Remembers that the one-time welcome page has been shown, so it doesn't re-open. |

It lives in `chrome.storage.local`, never leaves your browser, and says
nothing about what you browse. The Firefox build has no settings page and
stores no other preferences.

## What we transmit

Nothing. There are no network requests in the extension's code. No
`fetch`, no `XMLHttpRequest`, no WebSocket, no image beacons, no
third-party SDKs, no remote scripts, no CDN, no Google Fonts.
Nothing.

If you want technical confirmation, the extension's permissions list
in your browser's extension manager will show that GPQ requests only
the `storage` permission and no host permissions at all — your
browser itself won't let it read or transmit page data even if it
wanted to.

The only "external" links you'll see are in the onboarding page footer —
links to this website and a `mailto:` link to the support email. Those
links only do anything when *you* click them. Until then, no requests
are made.

## What permissions GPQ requests, and why

On **Firefox**, only one: `"storage"`, to save the settings above.

On **Chromium browsers** (Chrome, Edge, Brave, Vivaldi, etc.), two:

- `"storage"` — to save the settings above.
- `"privacy"` — used **only** by Hardened Private Mode, and **only** to
  apply privacy-hardening to the private session you explicitly open.
  GPQ writes these settings with the browser's *incognito-session-only*
  scope, so they affect the private session alone and the browser clears
  them automatically when the last private window closes. GPQ never
  changes your normal-browsing privacy settings. The `privacy` permission
  also lets GPQ read each setting's level of control, so it can tell whether
  a protection was applied, already on, unavailable, or blocked by policy or
  another extension — instead of silently failing.
  Firefox does not offer a private-session scope for these settings, so
  GPQ does not request `privacy` there and reports each protection as
  unavailable rather than changing your global configuration.

GPQ does not request, and does not have access to:

- Your browsing history
- Your tabs' URLs or content
- Your cookies, cache, or downloads
- Your bookmarks
- Any specific websites (no host permissions)
- Your location, microphone, camera, or any other sensor
- Any VPN software, installed applications, or other extensions
- Anything else

GPQ never disables your security protections. Safe Browsing, phishing and
malware protection, certificate and HTTPS checks, browser updates, download
scanning, and your password manager are never touched by Hardened Private
Mode.

## Third parties

There are no third parties. No analytics provider, no error-reporting
service, no payment processor, no ad network, no CDN. GPQ is a single
self-contained extension with no external dependencies at runtime.

## Children

GPQ doesn't collect anything from anyone, so there's nothing
child-specific to disclose. It's safe for any age group that's old
enough to use a web browser.

## Changes to this policy

If this policy ever changes, the updated version will live at the same
URL ([codecraftedapps.com/extensions/go-private-quickly/privacy](https://codecraftedapps.com/extensions/go-private-quickly/privacy.html))
with a new "Last updated" date at the top. Material changes will be
called out in the changelog of any release that introduces them.

## Contact

If you have a privacy question or want to verify any of the above,
email me at [support@codecraftedapps.com](mailto:support@codecraftedapps.com).
