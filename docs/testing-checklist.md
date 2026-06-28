# Testing Checklist — Go Private Quickly (Firefox)

Manual checklist plus the automated suite. Run before every store submission.

## Automated tests

```
# from the repo root
node --test
```

Covers the declarative setting builder and the Firefox adapter decision logic
(every protection reported "unavailable"). Browser-integration behavior is
manual.

## Build

```
node build.mjs
# load dist/firefox/ as a temporary add-on in Firefox (about:debugging)
```

## Browsers to cover

- [ ] Firefox (current stable)
- [ ] Firefox ESR (if available)

## Functional tests

- [ ] Clicking the toolbar icon opens a new private window immediately — there
      is no popup.
- [ ] The toolbar icon reflects window state: private-state mask while a private
      window is focused, normal mask otherwise; it updates as focus moves
      between windows.
- [ ] If GPQ is **not yet allowed in private windows**, clicking the icon opens
      the onboarding page instead of failing silently.
- [ ] After setting "Run in Private Windows: Allow," clicking the icon opens a
      private window.
- [ ] Multiple private windows can be opened safely; repeated clicks don't error.
- [ ] Normal (non-private) browsing settings remain unchanged throughout.

## Onboarding

- [ ] On first install the welcome page opens automatically (once).
- [ ] "Open Add-ons settings" opens `about:addons` (or reveals the copy-paste
      fallback if Firefox refuses).
- [ ] After setting "Run in Private Windows: Allow," **Re-check** flips the page
      to the "You're all set" state.

## Privacy & data hygiene

- [ ] No external network requests anywhere (DevTools → Network, background +
      onboarding).
- [ ] No private-window URLs are stored in sync/local/session storage.
- [ ] No private-window URLs appear in console logs.
- [ ] No remote resources (scripts, fonts, images) are loaded.
- [ ] Storage contains only the `onboardingShown` flag.

## Accessibility

- [ ] Onboarding controls are reachable and labeled for screen readers.
