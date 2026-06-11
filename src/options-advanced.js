// Go Private Quickly — options page controller
//
// Owns the hardened-mode advanced toggles, persisted through prefs.js with the
// same sync→local fallback used everywhere else, and flashes the "Saved"
// indicator after a successful write.

import { getPrefs, setPref } from "./shared/prefs.js";

const FIELDS = {
  advStrictWebrtc: "adv-strict-webrtc",
  advDisableWebrtc: "adv-disable-webrtc",
  advDisableReferrers: "adv-disable-referrers",
};

const savedEl = document.getElementById("saved-indicator");
let flashTimer;
function flashSaved() {
  if (!savedEl) return;
  savedEl.classList.add("show");
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => savedEl.classList.remove("show"), 1500);
}

function annotateAvailability() {
  // "Disable WebRTC entirely" is global-only on Firefox — it can't be confined
  // to the private session — so the control is reported as not applied rather
  // than silently mutating normal browsing.
  const note = document.getElementById("adv-disable-webrtc-note");
  if (!note) return;
  note.textContent =
    "Not applied on Firefox: this setting cannot be confined to the private session.";
}

(async () => {
  annotateAvailability();
  const prefs = await getPrefs();
  for (const [key, id] of Object.entries(FIELDS)) {
    const input = document.getElementById(id);
    if (!input) continue;
    input.checked = prefs[key] === true;
    input.addEventListener("change", async () => {
      if (await setPref({ [key]: input.checked })) flashSaved();
    });
  }
})();
