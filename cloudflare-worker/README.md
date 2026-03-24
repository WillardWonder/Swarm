# Cloudflare Worker API (Swarm Control v2)

This is a secure API scaffold for off-site interactive dashboard control.

## Endpoints
- `GET /health`
- `GET /tasks`
- `GET /inbox`
- `POST /command`

All require `Authorization: Bearer <DASH_TOKEN>`.

## Deploy
See root `ONE_SHOT_DEPLOY.md`.
