# FlexFit — The 30 Workout Training Plan

A modern fitness tracking web app built with React + Vite. Follow a structured 30-session Bro Split program, log your weights, and track progress — no account or backend needed.

---

## What It Does

- 30 progressive workouts across Push / Pull / Legs cycles
- Sequential unlocking — complete a workout to unlock the next
- Log max weights per exercise
- Auto-saves progress to browser localStorage
- Exercise technique descriptions via modal overlay

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 8.x | Build tool & dev server |
| Font Awesome 6 | CDN | Icons |
| Google Fonts | CDN | Bebas Neue + DM Sans |
| localStorage | Browser API | Progress persistence |
| ESLint | 10.x | Code linting |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure
FlexFit/
├── index.html                  # App shell, Font Awesome CDN
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
├── LICENSE                     # MIT License
├── README.md                   # You are here
└── src/
├── main.jsx                # React root mount point
├── App.jsx                 # Root component
├── index.css               # Global design system & tokens
├── fanta.css               # FantaCSS base layer
├── assets/
│   └── hero.png            # Hero background image
├── components/
│   ├── Navbar.jsx          # Fixed frosted-glass navbar
│   ├── Layout.jsx          # Page wrapper (Navbar + Footer)
│   ├── Hero.jsx            # Hero section + program intro
│   ├── Grid.jsx            # 30-card workout grid + state
│   ├── WorkoutCard.jsx     # Expanded single workout view
│   └── Modal.jsx           # Exercise description overlay
└── utils/
└── index.js            # All 30 workout objects + exercise descriptions

---

## Training Structure

The program follows the **Bro Split** rotation:

> Push → Pull → Legs → Repeat (×10 = 30 sessions)

### The Rules
- **Rest** — take rest days where necessary
- **Reps** — every rep follows a 2-2-2 pause tempo
- **Weight** — use the max weight you can complete with good form

---

## Built By

[Pratheeksha Kajagar]