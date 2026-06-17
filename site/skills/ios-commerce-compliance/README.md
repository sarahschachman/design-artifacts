# ios-commerce-compliance — README

A Claude skill that critiques iOS purchase/checkout designs against current Apple App Store rules for the **US storefront**. Built for the Teachable mobile in-app purchase exploration (letting app users buy additional products inside the iOS app).

## What it is

A skill, not a chatbot persona — same shape as your team's other agents (`design-critique`, `ux-designer`). Drop the folder into your skills directory and it activates when someone shares an iOS purchase design and asks for a compliance read.

## Files

- `SKILL.md` — the agent. Rules core + two-mode protocol (durable vs. time-sensitive) + critique method that mirrors your `I notice / I wonder / What if` format.
- `reference.md` — one-page decision tree and cheat sheet for fast lookups.
- `README.md` — this file.

## How to use it

Give it a design — a mockup, a Figma flow described in text, a written spec, a screenshot. Ask for a compliance critique. It will:

1. Pin down what's actually being sold (the rule depends entirely on this).
2. Classify the flow (IAP required / external link / physical goods / ambiguous).
3. Walk the design against the constraints, tied to specific guideline sections.
4. Triage into **blockers / time-sensitive flags / clear**.
5. Close with a not-legal-advice disclaimer and, when relevant, a "refresh this" nudge.

It is deliberately built to *not* give legal sign-off and to *not* state fees and commission rates as settled fact, because they aren't right now.

## The important caveat: this domain moves

This is the core design decision in the skill. As of the build date (mid-May 2026), the Epic v. Apple litigation is still live — Apple filed for a Supreme Court stay around May 4, 2026, and the commission rate for US linked-out purchases is unresolved and effectively 0% pending remand.

The skill separates **durable constraints** (survived multiple appeals — safe to critique against) from **time-sensitive specifics** (fees, exact required wording, entitlement mechanics, case status — always labeled, dated, and flagged for verification). That separation is what keeps it useful instead of confidently wrong as the situation evolves.

### Refresh protocol

The skill stays current primarily by **re-verifying volatile facts at use time**, not in the background — it has no scheduler. Before any critique, if the conversation date is more than ~14 days past the skill's baseline (mid-May 2026), the skill web-searches the small volatile set (Epic v. Apple status, US linked-out commission, Apple guideline changes to §3.1.1/3.1.1(a)/3.1.3/3.1.3(a), entitlement requirement), reconciles against its time-sensitive table, and opens the critique with a short note on what moved. If search isn't available in that context, it says so and flags the time-sensitive section as unverified rather than presenting stale specifics as current. The cost is a few seconds of search at the start of critiques that need it; the benefit is no silent staleness and no pipeline to maintain.

That handles per-critique accuracy. Separately, **update the baseline in the files themselves** (so future sessions *start* current rather than re-deriving every time) when:

- Before any design goes to build.
- After the skill has reported the same change a few times — fold it into the baseline so it stops being "news."
- On a discrete trigger: a Supreme Court decision on the stay, a district court remand ruling setting a commission rate, or an Apple App Review Guidelines update to §3.1.1 / 3.1.1(a) / 3.1.3 / 3.1.3(a).

To update the baseline: re-check the live Apple App Review Guidelines and current Epic v. Apple status, then edit the "Time-sensitive specifics" section of `SKILL.md` and the as-of dates (and the matching table in `reference.md`). The durable constraints section should rarely change; if it does, that's a significant shift worth a wider heads-up to the team.

## Scope limit

US storefront only. If the in-app purchase experience is meant to ship outside the US (EU is governed by the DMA with materially different — sometimes opposite — rules), each storefront needs its own compliance pass. The skill will flag this but does not cover non-US rules.
