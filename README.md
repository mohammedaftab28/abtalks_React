# ABTalks — Redesign (React)

Same redesign as the static HTML version, rebuilt as a React app (Vite + React Router). Mobile-first (390px). All data is mocked in `src/data.js`; nothing calls a real backend.

## Route map

```text
/
/dashboard
/day/12
```

`/login` also exists as a standalone route (linked from the landing page's "Log in" and "Start Day 1" actions, and from the dashboard's "Log out") — a sliding sign-in/sign-up card matching the reference AsmrProg-style login layout, reskinned to ABTalks' tokens, with a mobile tab-switcher fallback below 880px.

`/day/:dayNumber` is a real dynamic route — visiting any day other than 12 shows a "not built in this demo" fallback with a link back to Day 12, since only Day 12 has mocked task content.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serves the production build locally
```

## Deploy

This is a client-side-routed SPA, so the host needs to fall back to `index.html` for `/dashboard` and `/day/12` on a direct load/refresh — otherwise those return 404.

- **Vercel:** `vercel.json` (included) already handles this — deploy with no extra config.
- **Netlify:** `public/_redirects` (included) handles this — deploy with no extra config.
- **GitHub Pages / other static hosts:** enable SPA fallback / 404→index.html rewriting, or the two nested routes won't resolve on a hard refresh.

## Structure

```
src/
  data.js              mocked student, streak scenarios, day 12 task, badges
  storage.js           localStorage helpers (day-12 submission + dashboard demo-scenario)
  components/
    StreakGrid.jsx      the 60-tile signature element (contribution-graph re-skin)
  pages/
    Landing.jsx          "/" — hero, inline sign-up/sign-in auth card, how-it-works, FAQ
    Dashboard.jsx         "/dashboard" — streak, today's task, progress, standing, demo switch
    Day.jsx               "/day/:dayNumber" — task detail + GitHub/LinkedIn submission
  App.jsx                react-router routes
  index.css              design tokens + all component styles
```

## Notable behavior

- **Dashboard demo switch** — a "Preview" row lets you flip between four states (Normal / Day 1 / Missed day / Empty profile) to see all the required edge cases without separate mock accounts. It's clearly out-of-band from the real product UI.
- **Day 12 submission** persists to `localStorage` via `storage.js`, so the success state survives a refresh.
- **Grace period** — a missed day shows a live countdown banner on the dashboard instead of silently resetting the streak to zero (students are using this late at night, per the brief).
- **LinkedIn draft-assist** on the Day page — generates an editable caption from the day's task data, since writing the post (not doing the work) is the actual friction point for most students.
