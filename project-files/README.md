# Vue Jobs — Trainee Project (Mock API included)

This project uses **json-server** as a mock REST API. `db.json` is already filled with 6 sample job listings so you
can start building screens right away.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the mock API server (runs on http://localhost:8000):
   ```
   npm run server
   ```

3. In a second terminal, start the Vue dev server (runs on http://localhost:3000 — set this in
   vite.config.js if not already):
   ```
   npm run dev
   ```

You now have a real REST API running locally at `http://localhost:8000/jobs` that supports
GET, POST, PUT/PATCH, and DELETE — no external accounts, no real backend needed.

## Available endpoints

| Method | Endpoint          | Purpose                        |
|--------|-------------------|---------------------------------|
| GET    | `/jobs`           | Get all jobs                    |
| GET    | `/jobs/:id`       | Get a single job by id           |
| POST   | `/jobs`           | Add a new job                    |
| PUT    | `/jobs/:id`       | Replace a job                    |
| DELETE | `/jobs/:id`       | Remove a job                     |

See the separate task brief document for what to build.
