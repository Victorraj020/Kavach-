# Kavach — Digital Health Protection for Children

## 🛡️ Overview

Kavach is a Next.js web application that helps parents and healthcare providers maintain digital health records for newborns and children. It includes vaccination schedules with reminders, health records, and a directory of vaccination centers.

## ✨ Features

- **Newborn registration**: Capture child, parent, and birth details
- **Vaccination tracker**: View schedules, mark doses, track progress
- **Health records**: Store visits, prescriptions, and growth metrics
- **Find centers**: Discover vaccination centers by location
- **Smart notifications UI**: Central place for reminders and alerts

## 🧱 Tech Stack

- **Framework**: Next.js 14 (App Router) with React 18 and TypeScript
- **Styling**: Tailwind CSS, `tailwindcss-animate`
- **UI**: shadcn/ui (Radix UI under the hood), Lucide icons
- **Forms & Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Data & Charts**: `@tanstack/react-query`, `recharts`

## 📂 Project Structure

Top-level folders of interest:

- `src/app` — App Router pages and layout
  - `page.tsx` — Landing page
  - `dashboard/page.tsx` — Main dashboard
  - `register-child/page.tsx` — Child registration
  - `vaccinations/page.tsx` — Vaccination tracker
  - `health-records/page.tsx` — Health records
  - `centers/page.tsx` — Vaccination centers
  - `notifications/page.tsx` — Notifications
- `src/components` — Reusable UI and feature components
- `src/components/ui` — shadcn/ui primitives
- `src/lib` — Utilities

## ▶️ Getting Started

### Prerequisites

- Node.js 18.17+ (recommended)
- npm

### Installation

```bash
git clone <repository-url>
cd kavach-piyush
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production build

```bash
npm run build
npm start
```

The app serves the optimized build from `.next/`.

## 🚏 Available Routes

- `/` — Landing
- `/dashboard` — Dashboard
- `/register-child` — Child registration
- `/vaccinations` — Vaccination tracker
- `/health-records` — Health records
- `/centers` — Vaccination centers
- `/notifications` — Notifications

## 🎨 Styling and Theming

Design tokens are defined in `src/app/globals.css` using CSS variables (light and dark ready). Tailwind is configured in `tailwind.config.ts` and scans `src/app`, `src/components`, and `src/pages`.

## 🚀 Deployment

- Optimized for Vercel. This repo includes `vercel.json` with:
  - build: `npm run build`
  - output directory: `.next`
  - install: `npm install`

## 🤝 Contributing

PRs are welcome. Please keep components accessible and follow the code style used across the project.

## 📄 License

MIT License. See `LICENSE` if present.

---

Kavach — Protecting your child's health, one vaccine at a time.

