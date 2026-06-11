// Go Private Quickly — Firefox privacy adapter
//
// Firefox's BrowserSetting API has NO incognito / private-session scope. Every
// privacy change a Firefox extension makes is global: it alters the user's
// normal (non-private) browsing windows for as long as it is in effect.
//
// The extension's reliability contract says it must never silently change the
// user's normal browsing configuration. Firefox cannot honor that for any of
// the hardened settings, because it has no way to confine a change to the
// private session. Rather than mutate global config (and rely on best-effort
// restoration that would still affect normal windows mid-session), every
// protection is reported as "unavailable" on Firefox. The private window
// still opens — it simply can't add session-scoped protections here yet.
//
// If a future version adds an explicit, opt-in "global hardening with
// restore-on-close (affects all windows during the session)" mode, its
// apply/save/restore logic would live in this adapter. Until then this stays
// deliberately inert so Firefox behavior is honest and reliable.

export const firefoxAdapter = {
  async applyOne() {
    return { status: "unavailable" };
  },
};
