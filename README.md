# Eppley Court Monitor

A free, live web app that shows whether the pickleball and badminton courts at the Eppley Recreation Center (University of Maryland) are open or taken, so you can check before you make the trip.

Built by [Open Sourcery @ UMD](https://opensourcery.umd.edu/).

> **Status:** 🚧 Early planning / pre-alpha. Nothing here is deployed yet. This README describes the plan, and sections will change as we learn what's feasible.

---

## Why this exists

Walking over to Eppley just to find every court occupied is a waste of time. This project aims to be a free public service for the UMD community: one page that tells you, right now, which courts are in use.

## Goals

- Show real-time (or near-real-time) court status for **pickleball** and **badminton** courts
- Stay free, open source, and accessible to any UMD student, staff member, or visitor
- Work well on mobile, since that's where people will check it
- Be honest about data quality by showing *how* a status was determined and *how fresh* it is
- Respect privacy and Eppley's policies (see [Privacy and ethics](#privacy-and-ethics))

**Possible later scope:** tennis and racquetball courts, historical "busy times" charts, and notifications when a court opens up.

## How we plan to detect court status

We don't yet know which approach (or combination) will be reliable, so the project is structured around multiple data sources feeding one status model. The order below is roughly cheapest to most involved.

| Method | Description | Status |
| --- | --- | --- |
| **Reservation scraping** | Scrape Eppley's public reservation/schedule data to show booked vs. unbooked slots | Planned |
| **Google "busy hours"** | Use Google's popular-times / busy-hours data as a rough occupancy signal | Investigating |
| **Webcam feed** | A camera on the courts, either displayed directly or analyzed with computer vision to detect players | Idea |
| **On-court sensor device** | A weatherproof embedded device (e.g. Arduino-based, possibly solar powered) mounted to the court fence | Idea |

Reservations only tell us what's *booked*, not what's actually *in use* (walk-ons, no-shows), which is why we're exploring on-site options. Any on-site hardware requires **approval from Eppley staff**, so talking to facility administrators is an early task.

## Tech stack

| Layer | Tech |
| --- | --- |
| Frontend | [Vite](https://vitejs.dev/) + [React](https://react.dev/) |
| Data fetching / client state | [TanStack](https://tanstack.com/) (Query, and Router if needed) |
| Backend | [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) |
| Database / realtime | [Supabase](https://supabase.com/) (Postgres + Realtime) |

### Planned architecture

```
 ┌────────────────────┐   ┌─────────────────────┐   ┌──────────────────────┐
 │ Data sources       │   │ Express server      │   │ Supabase             │
 │  • Eppley scraper  │──>│  • ingestion jobs   │──>│  • Postgres          │
 │  • Google busy hrs │   │  • status logic     │   │  • Realtime          │
 │  • (future) camera │   │  • REST API         │   └──────────┬───────────┘
 │  • (future) sensor │   └─────────────────────┘              │
 └────────────────────┘                                        v
                                                    ┌──────────────────────┐
                                                    │ Vite + React client  │
                                                    │  (TanStack Query)    │
                                                    └──────────────────────┘
```

This is a starting point, not a commitment. Open an issue if you think something should be done differently.

## Getting started

> The repo is still being scaffolded, so treat the commands below as the intended workflow and update them as the project takes shape.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- npm (or your preferred package manager; pick one and stick to it)
- A [Supabase](https://supabase.com/) project (free tier is fine for development)

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/<org-or-user>/eppley-court-monitor.git
cd eppley-court-monitor

# 2. Install dependencies
cd client && npm install
cd ../server && npm install

# 3. Configure environment variables
cp server/.env.example server/.env
cp client/.env.example client/.env
# then fill in the values (see below)

# 4. Run the dev servers (in separate terminals)
cd server && npm run dev
cd client && npm run dev
```

### Environment variables

Names are provisional.

**`server/.env`**

```
PORT=3001
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

**`client/.env`**

```
VITE_API_URL=http://localhost:3001
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

> ⚠️ Never commit `.env` files or the Supabase **service role** key. That key must only ever live on the server.

## Proposed project structure

```
eppley-court-monitor/
├── client/          # Vite + React app
│   └── src/
├── server/          # Express API, scrapers, ingestion jobs
│   └── src/
└── README.md
```

## Roadmap

- [ ] **Setup:** scaffold repo, set up the stack, CI, linting, and formatting
- [ ] **Feasibility:** contact Eppley staff/administration about data access and on-site hardware
- [ ] **Data ingestion:** scrape Eppley's reservation data into Supabase
- [ ] **MVP UI:** mobile-friendly page showing per-court status and last-updated time
- [ ] **Evaluate Google busy hours** as an additional signal
- [ ] **Prototype on-site detection:** webcam + computer vision and/or fence-mounted sensor
- [ ] **Launch** to the UMD community
- [ ] **Stretch:** historical busy-time trends, notifications, tennis/racquetball support

## Privacy and ethics

If we add cameras or sensors, these principles apply:

- **No storing or publishing identifiable footage.** If we use a camera, processing should happen on-device or in memory, and only the result (e.g. "court occupied: yes/no") should be kept.
- **Facility approval first.** No hardware goes up without explicit permission from Eppley/UMD.
- **Be a good scraping citizen.** Check the terms of any site we pull data from, rate-limit requests, and stop if asked to.
- **Show uncertainty.** If a status is stale or low-confidence, the UI should say so rather than guess.

## Contributing

Contributions are welcome, whether you're a UMD student, an Open Sourcery member, or just someone who wants to help.

1. Check the [issues](../../issues) for something to pick up (or open one to propose an idea)
2. Fork the repo and create a branch: `git checkout -b feature/your-feature`
3. Make your changes and commit with a clear message
4. Open a pull request describing what changed and why

Not sure where to start? Research tasks, like looking into the reservation site or testing whether busy-hours data is usable, are great first contributions.

## Project management

- **Tasks and discussion:** GitHub Issues (a Trello board may be added for planning)
- **Docs:** the [`docs/`](./docs) folder, plus a GitHub Wiki if we need one

## Contact

Maintained by Open Sourcery @ UMD. Questions, ideas, or want to help? Open an issue or reach the club through [opensourcery.umd.edu](https://opensourcery.umd.edu/).

## Disclaimer

This is a student-run project and is **not officially affiliated with or endorsed by** the University of Maryland or the Eppley Recreation Center. Court status shown here is best-effort and may be inaccurate.
