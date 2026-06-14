# Vlore — Homepage MVP

A scroll-driven, immersive homepage for Vlore, built with React, Tailwind CSS, and GSAP ScrollTrigger — following the Ascent V2 concept, the Growth Ecosystem (Bedrock, Beacon, Confluence, Lattice, Ecosystem), the Messaging System, and the Visual Identity System.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## What's here

- **Hero** — the Spark, the opening line, "Designed to Be Inevitable," and the primary CTA.
- **Problem** — fragmentation, with a scattered/unconnected-nodes visual.
- **Five Growth System sections** (Bedrock, Beacon, Confluence, Lattice, Ecosystem) — each with its own gold SVG/GSAP animation, caption, and services list, alternating left/right layout.
- **Confluence Signature Moment** — a pinned, scroll-scrubbed section showing attention converging into value (and some of it leaking away).
- **Ecosystem View** — all five systems shown as one connected, breathing network.
- **Why Vlore** — the four differentiators.
- **Packages** — Foundation / Growth / Scale cards plus the Ongoing Growth Partnership banner.
- **Epilogue / Contact** — the dual-close ("intimacy" line, then the confidence beat), two Sparks settling beside each other, and a contact form.

## Editing copy

All text lives in `src/data/content.js` — edit it there rather than in components.

## Notes for next steps

- **Contact form**: `Epilogue.jsx` currently shows a "Thank you" state on submit but doesn't send anywhere. Wire `handleSubmit` to an email service (e.g. Formspree, Resend) or your own API endpoint.
- **Fonts**: Cormorant Garamond (serif/display), Inter (sans/body), and IBM Plex Mono (accent/data) are loaded via Google Fonts in `index.html`.
- **Reduced motion**: `prefers-reduced-motion` is respected globally via CSS (animation/transition durations collapse to ~0). If you want GSAP's ScrollTrigger animations to also be skipped entirely for reduced-motion users, wrap the relevant `gsap.fromTo`/`gsap.to` calls in a `window.matchMedia('(prefers-reduced-motion: reduce)')` check.
- **Case studies / portfolio**: intentionally left out of this MVP — the brief's 8 sections didn't call for one. Could be added later as a "Living Network" section between Ecosystem View and Why Vlore.
- **Growth rail**: the right-edge dot navigation (desktop only) links to the five system sections. The full-screen Spark menu (top right) links to every section including Packages and Contact.
