
# 🚀 Izone Technologies — Official Website

A premium, fully responsive corporate website for **Izone Technologies**, an Information Technology company based in Tiruchirappalli, Tamil Nadu.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Router v6** | Client-side routing |
| **Lucide React** | Icon library |
| **shadcn/ui** | Base UI component primitives |

---

## 🎨 Color System

The design uses a CSS HSL variable system with full **light** and **dark** mode support. All colors are defined in `src/index.css` and accessed via Tailwind utility classes.

### Light Mode Palette (`:root`)

| Token | CSS Variable | HSL Value | Hex Equivalent | Usage |
|---|---|---|---|---|
| Background | `--background` | `210 20% 98%` | `#F8FAFC` | Page background |
| Foreground | `--foreground` | `221 39% 11%` | `#0F1729` | Body text |
| Card | `--card` | `0 0% 100%` | `#FFFFFF` | Card backgrounds |
| **Primary** | `--primary` | `261 83% 58%` | **`#7C3AED`** | Purple — CTAs, buttons, accents |
| Primary Text | `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary bg |
| **Secondary** | `--secondary` | `350 89% 60%` | **`#F43F5E`** | Rose/Pink — highlights, hover states |
| Secondary Text | `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on secondary bg |
| **Accent** | `--accent` | `38 92% 50%` | **`#F59E0B`** | Amber/Gold — stars, badges, accents |
| Accent Text | `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent bg |
| Muted | `--muted` | `220 13% 91%` | `#E4E7EE` | Subtle backgrounds |
| Muted Text | `--muted-foreground` | `215 16% 47%` | `#6B7FA3` | Secondary/helper text |
| Border | `--border` | `220 13% 91%` | `#E4E7EE` | Dividers, card borders |
| Ring | `--ring` | `261 83% 58%` | `#7C3AED` | Focus rings |
| Radius | `--radius` | — | `16px` | Base border radius |

### Dark Mode Palette (`.dark`)

| Token | CSS Variable | HSL Value | Hex Equivalent | Usage |
|---|---|---|---|---|
| Background | `--background` | `240 13% 6%` | **`#0F0F13`** | Page background |
| Foreground | `--foreground` | `210 20% 98%` | `#F9FAFB` | Body text |
| Card | `--card` | `240 10% 12%` | **`#1C1C22`** | Card backgrounds |
| Surface | `--surface` | `240 10% 9%` | **`#15151A`** | Section backgrounds |
| Surface Hover | `--surface-hover` | `240 10% 14%` | `#1F1F28` | Hovered surfaces |
| **Primary** | `--primary` | `258 90% 66%` | **`#8B5CF6`** | Violet — CTAs, buttons |
| **Secondary** | `--secondary` | `351 95% 71%` | **`#FB7185`** | Pink-red — highlights |
| **Accent** | `--accent` | `43 96% 56%` | **`#FBBF24`** | Amber — badges, stars |
| Muted Text | `--muted-foreground` | `240 5% 65%` | `#A1A1AA` | Helper text |
| Border | `--border` | `240 8% 19%` | **`#2A2A32`** | Card borders |

### Hardcoded Brand Colors (used in service page cards & components)

| Name | Hex | Usage |
|---|---|---|
| Brand Purple | `#7C3AED` | Icons, accents — Development & Services pages |
| Brand Rose | `#F43F5E` | Icons, CTAs — alternate accent |
| Brand Amber | `#F59E0B` | Icons, star ratings |
| Gradient Start | `#0BB3D1` | Legacy glow text / glow border gradient |
| Gradient End | `#7B2CE7` | Legacy glow text / glow border gradient |

### CSS Utility Classes for Colors

```css
/* Gradient text using brand gradient */
.gradient-text { background: linear-gradient(to right, #0BB3D1 → #7B2CE7); }

/* Glow border effect */
.glow-border   { border: 1px solid transparent; background: linear-gradient(#0BB3D1, #7B2CE7) border-box; }

/* Glassmorphism card */
.glass-card    { backdrop-filter: blur(20px); background: rgba(255,255,255,0.7); }
```

---

## 📁 Project Structure

```
izonesite/
├── public/                    # Static assets
│   ├── hero_it_team.png       # Hero collage — team image
│   ├── hero_it_dashboard.png  # Hero collage — dashboard image
│   └── ...
├── src/
│   ├── components/
│   │   ├── Layout.jsx         # Global layout wrapper (Navbar + Footer)
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── Footer.jsx         # Site footer
│   │   ├── PageHeader.jsx     # Shared hero section for all inner pages
│   │   └── ui/                # shadcn/ui primitives + custom components
│   │       ├── button.jsx
│   │       ├── FlipCard.jsx
│   │       ├── TestimonialCarousel.jsx
│   │       └── ScrollWorksSection.jsx
│   ├── context/
│   │   └── AdminContext.jsx   # Global state: clients, testimonials, popups
│   ├── hooks/
│   │   ├── useTheme.js        # Dark/light mode toggle
│   │   └── use-toast.js       # Toast notification hook
│   ├── lib/
│   │   └── animations.js      # Shared Framer Motion variants
│   ├── pages/
│   │   ├── Index.jsx          # Home page
│   │   ├── About.jsx          # About page
│   │   ├── Services.jsx       # Services listing
│   │   ├── Development.jsx    # Development services
│   │   ├── Clients.jsx        # Clients & testimonials
│   │   ├── Career.jsx         # Career / jobs / internships
│   │   ├── Contact.jsx        # Contact form + map
│   │   ├── GetStarted.jsx     # Get started / onboarding
│   │   ├── Portfolio.jsx      # Portfolio showcase
│   │   └── admin/             # Admin dashboard pages
│   ├── index.css              # Global styles + CSS variables (color system)
│   └── main.jsx               # React entry point
├── tailwind.config.js         # Tailwind theme + color token mappings
├── vite.config.js             # Vite build configuration
├── vercel.json                # Vercel deployment config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Services, Why Us, Stats, Testimonials, Portfolio, CTA |
| `/about` | About | Company story, mission, vision, team |
| `/services` | Services | Bulk SMS, WhatsApp, Voice SMS, Marketing |
| `/development` | Development | Web, App, Software, AI/ML, Graphic Design |
| `/clients` | Clients | Client logos, stats, testimonials |
| `/career` | Career | Job openings, internships, student training |
| `/contact` | Contact | Contact form, location map, social links |
| `/get-started` | Get Started | Onboarding / inquiry flow |
| `/portfolio` | Portfolio | Project showcase |

---

## ✨ Design System

- **Font**: `Inter` (Google Fonts) — weights 100–900
- **Border Radius**: Base `--radius: 16px` → cards use up to `rounded-[3rem]` (48px)
- **Shadows**: `shadow-premium-glow` → `0 20px 40px -15px rgba(11,179,209,0.25), 0 0 20px rgba(123,44,231,0.15)`
- **Animations**: Framer Motion — `fadeInUp`, `staggerContainer`, `cardHover`, `buttonHover`
- **Dark Mode**: Class-based via `useTheme` hook toggling `.dark` on `<html>`

---

## 📦 Deployment

Deployed on **Vercel**. The `vercel.json` rewrites all routes to `index.html` for SPA routing:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

---

## 🏢 Company Info

**Izone Technologies**
5th Cross, Thillainagar, Tiruchirappalli – 620018, Tamil Nadu
📧 innovativezone.tech@gmail.com
📞 +91-9943077284
🕐 Mon–Sat: 10:00 AM – 6:30 PM

# Izone-site2
everything is done
