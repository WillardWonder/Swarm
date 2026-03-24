# MatWalker Pipeline Cadence Matrix

## Stage Definitions + Exit Criteria

| Stage | Goal | Exit Criteria | Max Time in Stage | Owner |
|---|---|---|---|---|
| `new` | Capture and classify lead | Segment + city + source logged; next step dated | 24h | sales-ops |
| `contacted` | First touch delivered (approval-gated draft ready) | Touch logged in notes; follow-up date set | 2 days | outbound owner |
| `replied` | Confirm active conversation | Buyer intent/pain captured in notes | 2 days | outbound owner |
| `qualified` | Confirm fit + buying path | Athlete count range + timeline + decision role known | 3 days | sales lead |
| `offer-sent` | Deliver pricing path | Offer type logged; follow-up scheduled | 4 days | sales lead |
| `negotiation` | Resolve objections | Objection category + resolution plan documented | 7 days | founder/sales lead |
| `won` | Confirm order | Revenue estimate + fulfillment handoff noted | n/a | ops |
| `lost` | Capture loss reason | Loss reason tagged (price/timing/fit/other) | n/a | sales-ops |
| `nurture` | Revisit later | Re-entry trigger + date set | 30–90 days | sales-ops |

## Follow-Up Cadence (Default)

- **Day 0:** Initial contact draft prepared/sent (when approved)
- **Day 2:** Value reminder + one specific use-case
- **Day 5:** Team pricing prompt + pilot option
- **Day 10:** Close-loop message + nurture option
- **Day 30+:** Nurture reactivation if season timing changes

## Objection Tags (for CRM notes)
- `price_sensitivity`
- `timing_not_now`
- `needs_coach_buy_in`
- `needs_parent_buy_in`
- `unknown_sizing_confidence`
- `brand_trust`

## Minimum Note Quality Standard
Each touched lead note should include:
1. Last action summary (1 sentence)
2. Current blocker/objection tag
3. Next action + due date

## SLA Guardrails
- No lead can stay `new` for more than 24 hours.
- No lead can stay `contacted` without a dated follow-up.
- Any lead without `next_step_due` is considered out-of-compliance.
