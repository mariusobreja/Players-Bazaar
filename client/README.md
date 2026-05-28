# Players Bazaar Client

Frontend for the Players Bazaar marketplace app. It uses React 17, React Router v5, Auth0 authentication, and Stripe payments via the Railway backend API.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a local env file:

```bash
cp .env.example .env
```

3. Fill in all required values in `.env`.

4. Start the app:

```bash
npm start
```

## Build for Production

```bash
npm run build
```

`NODE_OPTIONS=--openssl-legacy-provider` is already included in npm scripts because this project uses Create React App 4.

## Netlify Deployment

- `netlify.toml` is configured in this folder.
- Set these environment variables in Netlify:
  - `REACT_APP_AUTH_DOMAIN`
  - `REACT_APP_CLIENT_ID`
  - `REACT_APP_STRIPE_PUBLIC_KEY`
  - `REACT_APP_API_URL` (your Railway backend URL, no trailing slash)

Checkout uses `POST /api/checkout/intent` on the backend. Set `STRIPE_SECRET_KEY` on Railway, not Netlify.

