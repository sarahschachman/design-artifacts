# Quick reference — iOS commerce compliance (US storefront)

Baseline date: **mid-May 2026.** Durable = safe to critique against. Time-sensitive = verify before relying.

## The decision tree

```
What is the user buying inside the iOS app?
│
├─ Unlocks features/content used INSIDE the app
│     → Apple IAP required. Custom in-app payment form = blocker.
│
├─ Digital content/service, bought via a link to Teachable's site
│     → US: allowed, no entitlement. Must open in system browser.
│       No auto-login deep link. Neutral hand-off. IAP-parity if IAP also shown.
│
├─ Physical good or real-world service
│     → Outside Apple IAP. Normal e-commerce. Confirm it's genuinely physical.
│
└─ Mixed / unclear
      → Highest risk. Split flows or get a definitive read first.
```

## Durable constraints (critique with confidence)

- US storefront only — every permissive rule here is US-specific. EU/other = separate pass.
- In-app feature unlocks still require Apple IAP.
- No embedded third-party payment form in the US app for digital goods.
- External purchase links open in the user's browser, not an in-app webview.
- No auto-login / dynamic links landing on a pre-authed buy page (affirmed on appeal).
- Neutral hand-off: no scare screen, but also can't assume no interstitial; no deceptive pressure in your own UI.
- IAP prominence parity: if both options shown, IAP must be allowed to be at least as prominent as the external link.
- No misleading price/marketing on the external path.

## Time-sensitive (label + as-of date + "verify")

| Topic | Best known (mid-May 2026) | Why volatile |
|---|---|---|
| US entitlement to link out | Not required | Tied to guideline updates from the litigation |
| US linked-out commission | Effectively 0% | Remanded for a rate; Apple sought SCOTUS stay ~May 4 2026. **Most volatile number in the domain.** |
| Required disclosure wording | No detailed post-appeal presentation rules published | Apple may publish new presentation guidance |
| Reader / multiplatform-account paths | Still exist (§3.1.3(a), §3.1.3(b)) | Whether a Teachable flow qualifies is fact-specific |

Primary sources to re-check: Apple App Review Guidelines §3.1.1, 3.1.1(a), 3.1.3, 3.1.3(a); current Epic v. Apple case status.

## Critique output shape

0. Freshness check: if >~14 days past mid-May 2026 baseline, web-search the volatile set (case status, US commission, guideline changes, entitlement), reconcile, and open with a 2–4 line note on what moved. If no search available, say so and mark time-sensitive section unverified.
1. What's being sold (state your read).
2. Flow classification: A (IAP) / B (external link US) / C (physical) / D (ambiguous).
3. Walk constraints — `I notice…` → `I wonder… / What if…`, each tied to a rule.
4. Triage: **Blockers** / **Time-sensitive flags** (what + which source + as-of) / **Clear**.
5. Disclaimer: not legal advice, not App Review sign-off; verify time-sensitive points and refresh if past baseline.
