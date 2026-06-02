# Rwamps Tours

Multi-route React app for Rwamps Global Tours & Consult — a premium travel agency platform showcasing destinations across UAE, Saudi Arabia, Oman, and Qatar.

## Tech Stack

- **React 18** (JSX)
- **Vite** — build tool & dev server
- **React Router DOM** — multi-page routing
- **SCSS Modules** — scoped, modular styles
- **Framer Motion** — animations
- **Lucide React** — icon library
- **React Leaflet** — interactive maps

## Project Structure

```
src/
├── assets/              # images, svg, fonts
├── components/          # reusable components, one folder per component
│   ├── Navbar/
│   ├── Footer/
│   ├── Button/
│   ├── DestinationCard/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   ├── FAQItem/
│   ├── MapView/
│   └── ...
├── pages/               # route-level pages
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Tours/
│   ├── TourDetail/
│   ├── Contact/
│   ├── FAQs/
│   └── NotFound/
├── layouts/             # shared layouts (with navbar + footer)
├── data/                # static data (destinations, faqs, testimonials)
├── hooks/               # custom hooks
├── styles/              # global styles, variables, mixins
├── App.jsx              # routes setup
└── main.jsx             # entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Home
- `/about` — About Us
- `/services` — Our Services
- `/tours` — All Tours / Destinations
- `/tours/:id` — Tour Detail
- `/contact` — Contact
- `/faqs` — FAQs

## License

© 2026 Rwamps Tours. All rights reserved.
