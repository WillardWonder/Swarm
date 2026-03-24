# MatWalker Production Metadata Cutover Checklist

Use this once the final public domain is chosen.

## 1) Canonical + OG URL replacement
- Preferred path (automated):
  - Dry-run: `python3 scripts/matwalker-prepare-production-urls.py --domain yourdomain.com`
  - Apply: `python3 scripts/matwalker-prepare-production-urls.py --domain yourdomain.com --apply`
- Script updates canonical + `og:url` across all primary pages, plus canonical for `thank-you.html`.
- Keep `og:image` absolute and consistent (single default image is fine for v1).

## 2) Robots + sitemap host update
- The same script above updates `robots.txt` sitemap URL and rewrites all `sitemap.xml` `<loc>` entries with production absolute URLs.
- Confirm sitemap includes all live routes only.

## 3) Metadata QA pass (page-by-page)
For each route:
- One clear H1 aligned with title intent
- Unique `<title>` and `<meta name="description">`
- Matching canonical and `og:url`
- `twitter:card` present
- No placeholder domain strings remain

## 4) Analytics continuity checks
- Keep existing event names unchanged to avoid dashboard churn.
- Confirm route-view events fire on every page load.
- Confirm key CTA events still push into `window.dataLayer`.

## 5) Go-live acceptance criteria
- `curl -I` for each route returns 200
- `sitemap.xml` resolves publicly
- `robots.txt` resolves publicly
- No mixed internal/relative production URL conflicts in page source
- Run `python3 scripts/matwalker-site-audit.py` and confirm `site-audit-report.md` has 0 failed checks
- Run `python3 scripts/matwalker-accessibility-audit.py` and confirm `accessibility-audit-report.md` has 0 failed checks

## Notes
- This checklist is internal-only and does not perform external publishing.
- If domain changes later, rerun sections 1–3 and regenerate sitemap URLs.
