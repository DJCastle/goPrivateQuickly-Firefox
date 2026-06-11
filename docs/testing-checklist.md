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

- [ ] Standard **Standard Private Window** opens a normal private window with no
      settings changed.
- [ ] Toolbar click opens the popup; **Open Hardened Private Window** is focused
      so Enter triggers it immediately.
- [ ] **Open Hardened Private Window** opens a private window, brings it to the
      front, and closes the popup. On Firefox no protections are applied (no
      private-session scope); global Firefox settings are unchanged before,
      during, and after.
- [ ] If GPQ is **not yet allowed in private windows**, the hardened action
      opens the onboarding page instead.
- [ ] Multiple private windows can be opened safely; opening a second hardened
      window does not error.
- [ ] Normal (non-private) browsing settings remain unchanged throughout.

## Onboarding

- [ ] On first install the welcome page opens automatically (once).
- [ ] "Open Add-ons settings" opens `about:addons` (or reveals the copy-paste
      fallback if Firefox refuses).
- [ ] After setting "Run in Private Windows: Allow," **Re-check** flips the page
      to the "You're all set" state.

## Advanced options

- [ ] All three advanced toggles are **off** by default.
- [ ] Each advanced toggle shows its warning text.
- [ ] "Disable WebRTC entirely" shows the not-applied note on Firefox.
- [ ] Advanced preferences persist across browser restarts.

## Privacy & data hygiene

- [ ] No external network requests anywhere (DevTools → Network, popup +
      background + options).
- [ ] No private-window URLs are stored in sync/local/session storage.
- [ ] No private-window URLs appear in console logs.
- [ ] No remote resources (scripts, fonts, images) are loaded.
- [ ] Storage contains only the three documented advanced-toggle keys.

## Accessibility

- [ ] Full keyboard navigation of the popup (Tab order, Enter, Esc).
- [ ] Advanced `<details>` summary and all controls are reachable and labeled.
- [ ] Onboarding controls are reachable and labeled for screen readers.
