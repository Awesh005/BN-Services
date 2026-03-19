# BN IntelHub Services

BN IntelHub Services is a Vite + React single-page website for presenting the company's service offerings, company information, portfolio, ecosystem, insights, testimonials, and lead-generation flows.

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- React Router DOM 7
- Motion
- Three.js / React Three Fiber / Drei

## Features

- Responsive marketing site with desktop and mobile navigation
- Dynamic service detail pages at `/services/:serviceId`
- Company pages such as About Us, Founder Message, and Our Projects
- Contact, Ecosystem, Hire Us, Insights, and Testimony pages
- Animated UI with motion effects, preloaders, and interactive elements
- Floating WhatsApp button and chatbot UI components

## Project Structure

```text
src/
  components/   Reusable UI such as Navbar, Footer, Hero, ChatBot, Preloader
  data/         Static data including services and projects
  pages/        Route-level screens
  router/       Alternate router helpers
  App.tsx       Main app shell and route registration
```

## Available Routes

- `/`
- `/services/:serviceId`
- `/about-us`
- `/founder-message`
- `/our-projects`
- `/contact`
- `/ecosystem`
- `/hire-us`
- `/insights`
- `/testimony`

## Environment Variables

Create a `.env.local` file in the project root if you need Gemini-backed features.

```env
GEMINI_API_KEY=your_api_key_here
APP_URL=http://localhost:3000
```

Reference values are also documented in `.env.example`.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app is configured to start on port `3000`. If that port is already occupied, Vite may automatically move to the next available port.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs TypeScript type-checking with `tsc --noEmit`

## Build Status

Latest reported production build completed successfully on March 19, 2026.

Noted warning:

- The main JavaScript bundle is larger than 500 kB after minification, so future optimization may include route-based code splitting or manual chunking.

## Notes

- `src/router/AppRouter.tsx` exists, but the active route setup currently lives in `src/App.tsx`.
- Some packages such as `better-sqlite3` and `express` are present in dependencies, but this repository currently behaves as a frontend Vite app.


content added