# Playwright TypeScript Starter

Minimal Playwright setup in TypeScript with an example smoke test.

## Prerequisites

- Node.js 18+ recommended

## Setup

```bash
npm install
npx playwright install
```

`npx playwright install` downloads browsers. If you want system dependencies too (Linux CI), run `npx playwright install --with-deps`.

## Running tests

- Headless default: `npm test`
- Headed for debugging: `npm run test:headed`
- UI mode: `npm run test:ui`
- Codegen helper: `npm run codegen`

You can override the target app with `PLAYWRIGHT_BASE_URL`:

```bash
PLAYWRIGHT_BASE_URL=http://localhost:3000 npm test
```

## Files of interest

- `playwright.config.ts` – global test config (baseURL, retries, reporters).
- `tests/example.spec.ts` – sample smoke test hitting the Playwright docs.
- `tsconfig.json` – TS settings for tests and config.

