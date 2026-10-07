# Privacy Policy — Go Private Quickly (GPQ)

**Last updated:** October 7, 2026

## The short version

Go Private Quickly does not collect, store, transmit, sell, share, or
otherwise process any personal data. No analytics. No tracking. No
telemetry. No network requests at all. The only thing it remembers is
a single flag saying you've seen the welcome page, and that lives
exclusively in your browser.

If you're the kind of person who only reads the short version, you're
done. Thanks for caring about privacy.

## The slightly longer version

I built Go Private Quickly because I wanted a single-click way to open
a new private/incognito window. That is the entire purpose of the
extension. There are no settings to configure, so the only thing GPQ
stores is a single flag noting that you've already seen the one-time
welcome page — nothing about what you browse.

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
nothing about what you browse. GPQ has no settings page and stores no
other preferences.

Chromium versions before 1.3.0 offered an optional Hardened Private Mode and
stored three on/off preferences for it. That mode has been removed; GPQ
no longer reads or writes those preferences.

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

The only "external" links you'll see are in the onboarding page —
links to this website and a `mailto:` link to the support email. Those
links only do anything when *you* click them. Until then, no requests
are made.

## What permissions GPQ requests, and why

Only one, on every browser: `"storage"`, to save the welcome-page flag
above. That's true of the Chromium build (Chrome, Edge, Brave, Arc,
Vivaldi) and the Firefox build alike.

GPQ changes no browser settings. It does not request the `privacy`
permission, and it never touches your security protections — Safe
Browsing, phishing and malware protection, certificate and HTTPS checks,
browser updates, download scanning, and your password manager.

GPQ does not request, and does not have access to:

- Your browsing history
- Your tabs' URLs or content
- Your cookies, cache, or downloads
- Your bookmarks
- Any specific websites (no host permissions)
- Your location, microphone, camera, or any other sensor
- Any VPN software, installed applications, or other extensions
- Anything else

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
