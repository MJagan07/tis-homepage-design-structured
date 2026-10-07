# Tulas International School — Homepage Redesign

Responsive animated homepage concept built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

> Before submission, verify official TIS copy, logo, brand palette, programmes, facilities, contact details and admissions links at https://tis.edu.in/. Replace illustrative copy and remote images with approved assets where available.

## Features
- Responsive navigation and page sections
- Scroll-triggered reveals and scroll progress indicator
- Custom cursor for fine-pointer devices
- Animated light/dark theme switcher with saved preference
- Responsive styles and reduced-motion support

## Run locally
Recommended: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy
Push to GitHub, import the repository into Vercel, use `npm run build` as the build command and `dist` as the output directory.

## Project structure
```text
src/
├── components/
│   ├── ui/               # Reveal, Button, SectionEyebrow
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Programs, Campus, Testimonials, CTA
│   └── animation/        # ScrollProgress, CustomCursor, AnimatedToggle
├── hooks/                # useTheme, useMousePosition, useScrollProgress
├── data/                 # Navigation and school content data
├── styles/               # Global CSS and theme variables
├── App.jsx               # Composes sections and theme state
└── main.jsx              # React entry point
```

## Before submitting
- Confirm content and image licensing/approval.
- Test at 375px, 768px and 1280px+ widths.
- Check browser console and run `npm run build`.
- Ensure all CTA links point to the correct destination.
