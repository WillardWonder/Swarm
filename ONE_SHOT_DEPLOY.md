# One-shot deploy (Swarm interactive v2)

Run these commands locally once:

```bash
cd /home/josh/.openclaw/workspace/publish/swarm-dashboard

# 1) Install wrangler if needed
npm i -g wrangler

# 2) Login Cloudflare
wrangler login

# 3) Set API token secret
cd cloudflare-worker
wrangler secret put DASH_TOKEN
# paste a strong random token when prompted

# 4) Deploy worker
wrangler deploy

# 5) Commit + push latest dashboard scaffolding
git add .
git commit -m "Scaffold cloud interactive v2 (Cloudflare Worker API)"
git push
```

## Then update frontend
In GitHub Pages dashboard JS, set:
- `API_BASE` = your worker URL from deploy output
- `DASH_TOKEN` = token stored in browser localStorage/session (not hardcoded in git)

## Quick test
```bash
curl -H "Authorization: Bearer <DASH_TOKEN>" https://<worker-url>/health
```
