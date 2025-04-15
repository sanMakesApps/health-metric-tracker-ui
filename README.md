# 🩺 Health Metric Tracker UI

A responsive web application to help users track their health metrics and medications from anywhere.

## 🚀 Live Demo

<!-- Change these on your own prerogative -->
- **Frontend:** [Netlify Deployment](https://your-netlify-url.com)
- **Backend API:** [Render Deployment](https://your-render-url.com)

---

## 📋 Table of Contents

<!-- These are mostly based on your issues and current README -->

- [Features](#features)
- [Stretch Goals](#stretch-goals)
- [Known Issues](#known-issues)
- [Screenshots or Demo Instructions](#screenshots-or-demo-instructions)
- [Wireframe Alignment](#wireframe-alignment)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✅ Features

### 🔐 Authentication
- Login
- Logout
- Token expiration handling

### 📊 Health Metrics
- Track health metrics (e.g., blood pressure, glucose)
- Handle empty state views
- Chart view and reports (`Reports.tsx`)

### 💊 Medications
- Medication tracking
- Handle empty state views

### 🛠 General UI
- Final UI polish
- Mobile responsiveness
- Button spacing and alignment
- Link to all pages from dashboard
- Placeholder pages: `Reminders.tsx`, `Reports.tsx`

### 🧭 Routing
- All pages routed via `App.tsx`
- Working frontend routing
- Proper routing even with no data

---

## 🌱 Stretch Goals

- Dark mode toggle
- Static caregiver/doctor views
- Static reminder form

---

## 🧪 QA Checklist

- Test login, logout, and expired token flow
- Test app behavior with:
  - No metrics
  - No medications
- Test deployed frontend and backend routing/endpoints

---

## 🧩 Accessibility

- ARIA labels added where necessary
- Accessibility enhancements reviewed

---

## 🖼️ Screenshots or Demo Instructions

<!-- Include screenshots or instructions on how to demo the app locally and through deployed URLs. -->


---

## 🗂️ Wireframe Alignment

| Page             | Wireframe Match | Notes                      |
|------------------|------------------|----------------------------|
| Dashboard        | ✅                |                            |
| Reports          | ✅                | Moved chart section        |
| Reminders        | ✅                | Placeholder only for now   |

---

## 🐞 Known Issues

- [ ] Feature A is partially implemented
- [ ] Placeholder pages need backend integration

---

## 🧰 Getting Started

```bash
git clone https://github.com/Chiloplacus/health-metric-tracker-ui.git
cd health-metric-tracker-ui
npm install
npm run dev
