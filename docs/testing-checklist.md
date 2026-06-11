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

- [ ] Standard **Open Private Window** opens a normal private window with no
      settings changed.
- [ ] Toolbar click opens the popup; **Open Private Window** is focused so
      Enter opens a private window immediately.
- [ ] **Open Hardened Private Window** opens a private window and shows the
      status panel.
- [ ] The hardened window opens unfocused and the popup stays open to show the
      status panel; **Switch to private window** brings it to the front.
- [ ] Multiple private windows can be opened safely; opening a second hardened
      window does not error.
- [ ] Every hardened protection reports **"Unavailable in this browser"**;
      global Firefox settings are unchanged before, during, and after.
- [ ] Normal (non-private) browsing settings remain unchanged throughout.

## Advanced options

- [ ] All three advanced toggles are **off** by default.
- [ ] Each advanced toggle shows its warning text.
- [ ] "Disable WebRTC entirely" shows the not-applied note on Firefox.
- [ ] Advanced preferences persist across browser restarts.

## VPN reminder

- [ ] Off by default; no dialog appears.
- [ ] When enabled, the dialog appears **before** the hardened window opens.
- [ ] Shows "VPN status: Not verified" and the required warning text.
- [ ] **Continue** proceeds; **Cancel** aborts; **Do not remind me again**
      disables the reminder and proceeds.
- [ ] Esc cancels the dialog.
- [ ] No network request is made at any point (verify in DevTools Network tab).

## Privacy & data hygiene

- [ ] No external network requests anywhere (DevTools → Network, popup +
      background + options).
- [ ] No private-window URLs are stored in sync/local/session storage.
- [ ] No private-window URLs appear in console logs.
- [ ] No remote resources (scripts, fonts, images) are loaded.
- [ ] Storage contains only the documented preference keys.

## Accessibility

- [ ] Full keyboard navigation of the popup (Tab order, Enter, Esc).
- [ ] Status rows convey state by symbol + text, not color alone.
- [ ] Screen reader announces each status row's `aria-label`
      (e.g. "WebRTC IP protection: Unavailable in this browser").
- [ ] Advanced `<details>` summary and all controls are reachable and labeled.
- [ ] Focus moves to the status panel after a hardened launch.
