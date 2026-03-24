# MatWalker Day-1 Execution Brief (Internal)

Date: 2026-03-20
Owner: matwalker-lead
Scope: Internal planning and asset execution only (no outbound actions)

## Objective for Day 1
Ship a conversion-ready website baseline, tighten CRM operating rules, and prepare approval-gated sales materials so real outreach can begin immediately once approved.

## What Is Already Shipped
- Multi-page site foundation (`index`, `teams`, `pilot`, `faq`, `coaches`, `parents`)
- Core CTA and route-view analytics events in page scripts
- Initial CRM seed list + outreach draft queue (approval-gated)
- SEO keyword map and 14-day content plan
- Team order planning CSV download asset

## Day-1 Priority Stack (Ranked)
1. **Conversion integrity**
   - Ensure every high-intent CTA routes to `index.html#waitlist`
   - Ensure all conversion CTAs include `data-track` attributes
2. **Sales execution readiness**
   - Lock pipeline stage definitions and follow-up cadence document
   - Ensure CRM records always include `next_step` + `next_step_due`
3. **Measurement readiness**
   - Align analytics event names to KPI baseline rows
   - Keep local fallback tracking active for no-tool validation
4. **Content operations readiness**
   - Prepare internal content queue using SEO map clusters
   - Prioritize pages with buyer intent: Teams, Pilot, FAQ

## 48-Hour Internal Sprint Plan

### Block A — Site Quality Hardening (2–3 hrs)
- Add consistent meta blocks (title + description + social cards) to all pages
- Verify nav/footer links are internally consistent across pages
- Add FAQ schema block for richer search understanding
- Add explicit microcopy on non-binding pricing request where appropriate

### Block B — CRM + Pipeline Operations (1–2 hrs)
- Publish follow-up cadence matrix with stage-specific exit criteria
- Add lead-priority rubric references into CRM playbook notes
- Validate all current leads have an actionable next step and date

### Block C — Reporting + Decision Hygiene (45 min)
- Reconcile event spec and KPI baseline naming
- Write one-page weekly review template (wins, blockers, decisions)

## Risks to Watch
- **Traffic without capture:** avoid adding informational sections without clear CTA return paths.
- **CRM drift:** prevent leads from sitting in `new` without dated action.
- **Analytics churn:** avoid renaming events after instrumentation unless absolutely necessary.

## Done Definition (Day 1)
- Site pages are conversion-consistent and trackable
- Pipeline stages + cadence are documented and actionable
- KPI baseline can be reviewed weekly without rework
- Outreach assets remain staged for approval (not sent)

## Next Internal Deliverables
- `business/sales/pipeline-cadence-matrix.md`
- `business/automation/matwalker-weekly-review-template.md`
- metadata + schema pass across site pages
