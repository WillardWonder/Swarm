# MatWalker Analytics Event Spec (v1)

## Purpose
Define a simple event model that works immediately on static hosting and maps cleanly to GA4/Plausible/Mixpanel later.

## Tracked Events (implemented in `site-matwalker/*.html` via shared `site-matwalker/analytics.js`)

1. `cta_join_waitlist_hero`
   - Trigger: click on hero primary CTA
   - KPI tie-in: top-of-funnel intent

2. `cta_view_team_pricing_hero`
   - Trigger: click on hero secondary CTA
   - KPI tie-in: team buyer interest

3. `cta_request_pricing_card`
   - Trigger: click on coach starter offer card CTA
   - KPI tie-in: high-intent pricing request behavior

4. `form_submit_waitlist`
   - Trigger: waitlist form submit
   - Captured properties:
     - `role`
     - `pilot_interest` (`yes`/`no`)
     - `pair_count_provided` (`yes`/`no`)
     - `experiment_id` (`home_headline_v1`)
     - `variant` (`team`/`athlete`)
     - `utm_source`, `utm_medium`, `utm_campaign`
     - `referrer_present` (`yes`/`no`)
   - KPI tie-in: primary conversion + experiment outcome attribution + channel-level lead quality attribution

5. `cta_nav_get_team_pricing`
   - Trigger: click on top-nav "Get Team Pricing"
   - KPI tie-in: global CTA effectiveness across pages

6. `view_page_home`
7. `view_page_teams`
8. `view_page_pilot`
9. `view_page_faq`
10. `view_page_coaches`
11. `view_page_parents`
12. `view_page_thank_you`
   - Trigger: page load for each route
   - KPI tie-in: page-level engagement + funnel leakage checks and post-submit confirmation completion

13. `cta_view_pilot_from_teams`
14. `cta_start_pilot_waitlist`
15. `cta_faq_get_team_pricing`
16. `cta_coaches_request_pricing`
17. `cta_parents_get_pricing`
18. `cta_download_order_template`
19. `cta_view_team_pricing_from_thank_you`
20. `cta_update_request_from_thank_you`
21. `cta_download_pilot_scorecard`
   - Trigger: key cross-page conversion-path buttons, Teams worksheet/Pilot scorecard CSV downloads, and post-submit navigation/update actions from thank-you page
   - KPI tie-in: progression from info pages back to primary conversion, resubmission intent from post-submit users, and mid-funnel buyer qualification intent

22. `calc_team_budget`
   - Trigger: click on Teams page “Calculate Budget Range” estimator
   - Captured properties:
     - `pair_count`
     - `planning_path` (`pilot`/`full`)
     - `base_price`
     - `applied_discount_pct`
     - `pricing_version` (from `pricing-assumptions.json`, e.g., `pricing_v1`)
   - KPI tie-in: qualification depth signal from buyers doing planning math before requesting pricing, segmented by pricing-assumption version

23. `calc_pilot_readiness`
   - Trigger: click on Pilot page “Calculate Readiness” estimator
   - Captured properties:
     - `sizing_data`
     - `point_person`
     - `feedback_loop`
     - `budget_timing`
     - `readiness_score`
     - `readiness_band` (`low`/`medium`/`high`)
   - KPI tie-in: pilot feasibility signal to separate ready-now teams from nurture-later teams

24. `experiment_home_headline_exposure`
   - Trigger: home page load when headline variant is resolved (`?ab=athlete` or default `team`)
   - Captured properties:
     - `experiment_id` (`home_headline_v1`)
     - `variant` (`team`/`athlete`)
   - KPI tie-in: experiment exposure denominator for conversion-by-variant analysis

## Data Layer Format
Each event pushes an object to `window.dataLayer`:

- `event` (string)
- `page` (from `body[data-page-id]`, e.g., `matwalker_home_v3`, `matwalker_teams_v3`, `matwalker_pilot_v2`, `matwalker_faq_v2`, `matwalker_coaches_v2`, `matwalker_parents_v2`, `matwalker_thank_you_v2`)
- `ts` (ISO timestamp)
- optional event-specific properties

## Local Fallback Counter
For no-tool debugging, event counts are persisted in localStorage key:
- `matwalker_analytics_local`

First-touch attribution snapshot is also persisted in:
- `matwalker_attribution_v1`

This allows quick sanity checks in browser devtools even before analytics tooling is connected.

## KPI Definitions

- **Landing CTR to Waitlist** = (`cta_join_waitlist_hero` + `cta_request_pricing_card`) / sessions
- **Team Pricing Interest Rate** = `cta_view_team_pricing_hero` / sessions
- **Waitlist Conversion Rate** = `form_submit_waitlist` / sessions
- **Headline Variant Conversion Rate** = `form_submit_waitlist` by `variant` / `experiment_home_headline_exposure` by same `variant`
- **Coach/Director Lead Share** = submits where `role in {Coach, Program Director}` / total submits
- **Pilot Intent Rate** = submits where `pilot_interest = yes` / total submits

## Recommended Benchmarks (starting targets)
- Waitlist conversion rate: 4–8%
- Team pricing interest rate: 8–15%
- Pilot intent rate: 30%+

## Next Integration Step
When analytics platform is selected, map each event 1:1 to platform events and preserve event names to avoid reporting churn.
