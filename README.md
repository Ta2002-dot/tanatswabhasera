# Tanatswa's Portfolio — Netlify Serverless

This React + Tailwind portfolio is deployable as a static site with a Node.js
serverless API on Netlify. The old long-running Express server build has been
replaced by one Netlify Function that wraps the Express application with
`serverless-http`.

## Development

```bash
pnpm install
pnpm dev
```

`pnpm dev` serves the frontend and mounts the same API at `http://localhost:8080/api`.
Use `pnpm dev:netlify` after installing the Netlify CLI when you specifically
need Netlify's local redirect/function runtime.

```bash
pnpm build
```

The client build is written to `dist/spa`. Netlify runs this command during a
deploy and bundles TypeScript functions from `netlify/functions` automatically.

## API

- `GET /api/ping`
- `GET /api/demo`

Add Express routes in `netlify/functions/lib/app.ts`. The Netlify redirect in
`netlify.toml` maps `/api/*` to the `api` function, keeping client requests
same-origin.

## Database helpers

- `netlify/functions/lib/database/mongodb.ts` provides `connectMongo()` with a
  cached Mongoose connection for MongoDB Atlas.
- `netlify/functions/lib/database/mysql.ts` provides `getMysqlPool()` with a
  cached `mysql2` pool for managed MySQL.

Copy `.env.example` to `.env` for local development. Add the same secret values
in Netlify's Environment variables dashboard; do not commit `.env`.
