# CRM Field Dictionary — MatWalker

Purpose: keep CRM entries consistent so pipeline reports are usable.

## Core Fields (required on every active lead)
- `lead_id`: immutable id (`MW-xxxx`)
- `created_at`: date lead first entered CRM (`YYYY-MM-DD`)
- `source`: where lead came from (directory, referral, inbound form)
- `org_name`: club/school/group name
- `segment`: one of `club`, `high-school`, `parent-group`
- `status`: one of pipeline stages in `crm-playbook.md`
- `next_step`: plain-language action sentence
- `next_step_due`: due date for next action (`YYYY-MM-DD`)

## Qualification Fields (fill by stage: replied/qualified)
- `contact_name`
- `role`
- `email`
- `phone`
- `athlete_count`
- `pain_point`
- `budget_estimate`
- `timeline`

## Activity Hygiene
- `last_contact`: most recent outbound or inbound touch (`YYYY-MM-DD`)
- `notes`: short factual notes only, newest note first, separated by ` | `

## Lightweight Lead Scoring (internal)
Use this when deciding follow-up priority in queue docs:

- +3 Decision-maker identified (head coach, director, admin)
- +3 Athlete count known
- +2 Clear pain point captured
- +2 Timeline within 90 days
- +2 Budget comfort known
- +2 Replied at least once

Score bands:
- `10-14`: High priority (follow-up every 2–3 days)
- `6-9`: Medium priority (follow-up weekly)
- `0-5`: Low priority (nurture cadence)

Note: Keep scoring in notes/queue docs for now; avoid changing CSV schema until automation expects it.

## Inbound Form Intake
- Canonical mapping for website form ingestion: `business/sales/site-waitlist-to-crm-mapping.md`
- Raw submissions should land in: `business/sales/inbound-waitlist-intake.csv`
- Promote to `crm.csv` only after dedupe + `lead_id` assignment.
