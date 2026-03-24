# MatWalker Site Architecture + Page Map (v1)

## Goal
Convert wrestling program buyers (coaches/directors/parents) into qualified waitlist leads for pilot and team pricing.

## Primary Conversion
- **Main conversion:** `form_submit_waitlist`
- **Secondary conversions:** pricing CTA clicks, team-section engagement, pilot-interest checkbox selections.

## Current Sitemap (live v1)
1. `/` — Landing page (single-page flow)
   - Hero (value prop + primary CTA)
   - Proof strip (3 benefit pillars)
   - Product gallery
   - Team pricing tiers section
   - ICP section (“Who This Is For”)
   - Pilot rollout explanation
   - FAQ
   - Waitlist form

## v1.1 Page Map (implemented)
1. `/` — Home / conversion page (keep concise)
2. `/teams` — Team pricing explainer + order planning worksheet
3. `/pilot` — 2–3 week pilot program details + eligibility checklist
4. `/faq` — Expanded objections handling (durability, sizing, timeline)
5. `/coaches` — Coach-focused use cases + practice-flow outcomes
6. `/parents` — Parent-friendly budget + ease-of-use messaging

## Section-Level UX Requirements
- Above-fold value prop must include:
  - Product category clarity (“training wrestling footwear”)
  - Core differentiation (“laceless slip-in”)
  - Economic angle (“team-friendly pricing”)
- Every section should contain one action path:
  - Scroll-to-form CTA or pricing request CTA
- Form should ask only qualification-critical fields:
  - role, pair_count, team_name, pain_point, pilot_interest

## Internal Link Strategy (for split pages)
- Home links to `/teams`, `/pilot`, `/faq` in top nav and footer.
- `/teams` links directly to `/pilot` and form CTA.
- `/parents` links to FAQ sizing section and waitlist form.
- All pages share one global CTA label for consistency: **“Get Team Pricing”**.

## Content Governance
- Messaging hierarchy:
  1. Practice flow speed (no lace friction)
  2. Budget fit (team tiers)
  3. Pilot safety (start small)
- Tone: straightforward, coach-respectful, no hype claims.
- Avoid claims requiring external proof unless evidence is attached in docs.

## Measurement Hooks
Required events (already available on landing page):
- `cta_join_waitlist_hero`
- `cta_view_team_pricing_hero`
- `cta_request_pricing_card`
- `form_submit_waitlist`

Planned when multipage launches:
- `view_page_teams`
- `view_page_pilot`
- `view_page_faq`
- `cta_nav_get_team_pricing`

## Exit Criteria for Architecture Task
- Page roles defined
- Conversion path documented
- Event instrumentation requirements listed
- Ready for implementation without additional strategy clarification
