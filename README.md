# Horizon — Personal Loan Application Prototype

A clickable front-end prototype of a retail bank's personal loan application journey, built for the Finovrr Product Engineer Assessment (Part 1).

**Live customer journey (10 screens):**
Login → Dashboard → Apply for Loan → Loan Details → Personal Info → Employment & Income → Review Application → Eligibility Result → Submit → Confirmation

## Design concept — "The Running Ledger"

Instead of a generic step wizard, the prototype frames the application as a bank ledger being filled in real time. A persistent left rail tracks progress step-by-step, and from the moment loan details are entered, a live "ledger strip" at the bottom of the rail shows the loan type, amount, tenure, and estimated EMI updating instantly — so the applicant always sees the running cost of their decision, the way a banker would.

- **Type:** Source Serif 4 (headings) + Inter (body) + IBM Plex Mono (all monetary figures, tabular numerals) — numbers read like a statement, not UI chrome.
- **Color:** deep navy ink, cool paper background, a muted brass accent for primary actions and approvals, emerald for the eligibility decision.
- **No backend, database, APIs, or real authentication** — all data is mocked in `src/data/mockData.js` and application state is held in React Context (`src/context/ApplicationContext.jsx`) for the duration of the session only.

## Tech stack

- React 18 + Vite
- react-router-dom (HashRouter, so it also works from a static file server / GitHub Pages without server-side routing config)
- Plain CSS with design tokens (no UI framework) — see `src/index.css`

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`). Log in with anything — the login form accepts any input.

## Project structure

```
src/
  components/     LedgerRail, PageShell (layout shell used by every screen)
  context/        ApplicationContext — in-memory state for the loan application
  data/           mockData.js (users, loan types, EMI calculator), steps.js (journey config)
  pages/          one component per screen in the journey
```

## Notes

- EMI is calculated with a standard reducing-balance formula (`estimateEMI` in `mockData.js`) for realism, but no real underwriting logic is implied — the "eligibility" decision is always approved for demonstration purposes.
- Built with AI-assisted development (Claude) for both the design system and component implementation.
