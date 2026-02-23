# Next.js Multi-Zone Micro Frontend

A micro frontend architecture using Next.js multi-zone to connect two independent apps with bidirectional data communication.

## Architecture

| App | Role | Port | Base Path |
|-----|------|------|-----------|
| `device-app` | Primary | 3000 | `/` |
| `web-app` | Secondary | 3001 | `/webapp` |

The **device-app** is the main entry point. It proxies requests to `/webapp/*` to the **web-app** using Next.js rewrites and middleware with a health-check fallback.

### Data Flow

- **Device App -> Web App**: Sets cookies (`fromApp`, `message`, `timestamp`) and redirects to `/webapp`
- **Web App -> Device App**: Sends URL search params (`from`, `message`, `timestamp`) to `/`

## Getting Started

### 1. Install dependencies

```bash
cd device-app && npm install
cd ../web-app && npm install
```

### 2. Start both apps

```bash
# Terminal 1 - Primary app (port 3000)
cd device-app
npm run dev

# Terminal 2 - Secondary app (port 3001)
cd web-app
npm run dev
```

### 3. Open in browser

- Device App (primary): [http://localhost:3000](http://localhost:3000)
- Web App (via multi-zone): [http://localhost:3000/webapp](http://localhost:3000/webapp)

If the web-app is not running, navigating to `/webapp` will show an unavailable fallback page.

## Project Structure

```
mfe-nextjs/
├── device-app/                # Primary app (port 3000)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx               # Landing page, receives URL params
│   │   │   ├── send-to-webapp-button.tsx  # Sends data via cookies
│   │   │   ├── setting/page.tsx       # Device settings page
│   │   │   └── webapp-unavailable/page.tsx  # Fallback page
│   │   └── middleware.ts              # Health-checks web-app
│   └── next.config.ts                 # Rewrites /webapp/* to port 3001
│
└── web-app/                   # Secondary app (port 3001)
    ├── src/
    │   └── app/
    │       └── page.tsx               # Reads cookies, sends URL params back
    └── next.config.ts                 # basePath: /webapp
```

## Environment Variables

| Variable | App | Default | Description |
|----------|-----|---------|-------------|
| `WEBAPP_URL` | device-app | `http://localhost:3001` | URL of the web-app instance |
