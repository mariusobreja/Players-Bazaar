# Players Bazaar

A full-stack demo marketplace for browsing, filtering, and purchasing football players — built as a portfolio project to show end-to-end delivery across frontend, API, auth, and payments.

**Live app:** [https://players-bazaar-mariusobreja.netlify.app](https://players-bazaar-mariusobreja.netlify.app)  
**Repository:** [https://github.com/mariusobreja/Players-Bazaar](https://github.com/mariusobreja/Players-Bazaar)

## Architecture

```text
Browser (React SPA)
    │
    ├─► Netlify  ── static frontend (client/)
    │
    └─► Railway  ── Express API (server/)
            │
            ├─► GET  /api/health
            ├─► GET  /api/players
            ├─► GET  /api/players/:id
            └─► POST /api/checkout/intent  ──► Stripe (server-side secret)

Auth0 handles login in the browser (SPA).
Stripe PaymentIntent is created on the backend only.
```

| Layer | Stack | Hosting |
|-------|--------|---------|
| Frontend | React 17, React Router, Styled Components, Auth0, Stripe.js | Netlify |
| Backend | Node.js, Express, Zod | Railway |
| Auth | Auth0 (SPA) | Auth0 cloud |
| Payments | Stripe test mode | Stripe + Railway API |

## Features

- Browse and filter players (search, category, sort, grid/list views)
- Featured players on the home page
- Shopping cart with local persistence
- Auth0 login for checkout
- Stripe test checkout via backend PaymentIntent API

## Project structure

```text
Players-Bazaar/
├── client/          # React frontend (Netlify)
│   ├── src/
│   └── netlify.toml
└── server/          # Express API (Railway)
    └── src/
```

## Local development

### 1. Backend

```bash
cd server
cp .env.example .env
# Add STRIPE_SECRET_KEY and CLIENT_ORIGIN=http://localhost:3000
npm install
npm run dev
```

API runs at `http://localhost:4000`.

### 2. Frontend

```bash
cd client
cp .env.example .env
# Add Auth0, Stripe public key, and:
# REACT_APP_API_URL=http://localhost:4000
npm install
npm start
```

App runs at `http://localhost:3000`.

## Environment variables

### Frontend (`client/.env` → Netlify)

| Variable | Purpose |
|----------|---------|
| `REACT_APP_API_URL` | Railway backend URL (no trailing slash) |
| `REACT_APP_AUTH_DOMAIN` | Auth0 tenant domain |
| `REACT_APP_CLIENT_ID` | Auth0 SPA client ID |
| `REACT_APP_STRIPE_PUBLIC_KEY` | Stripe publishable key (`pk_test_...`) |
| `SKIP_PREFLIGHT_CHECK` | `true` (CRA 4 + modern Node) |

### Backend (`server/.env` → Railway)

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_test_...`) — never in frontend |
| `CLIENT_ORIGIN` | Frontend origin for CORS (e.g. Netlify URL) |
| `PORT` | Optional; Railway sets this automatically |

## Deployment

- **Frontend:** Netlify, base directory `client`, build `npm run build`, publish `build`
- **Backend:** Railway, root directory `server`, start `npm start`, enable public domain

After deploy, set Auth0 callback/logout/web origins to your Netlify URL (no trailing slash).

## Roadmap

- [ ] Player data from a public football API (via backend proxy)
- [ ] PostgreSQL persistence
- [ ] UI polish and accessibility pass
- [ ] Order history after purchase

## Owner

[@mariusobreja](https://github.com/mariusobreja)
