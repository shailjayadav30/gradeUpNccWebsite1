# GradeUp.Shop — NCC Uniforms Landing Page

A Next.js 14+ (App Router) recreation of the GradeUp.Shop NCC Uniforms landing page, built with TypeScript and Tailwind CSS.

## What's included

- **Header** — logo, nav links, "Get NCC Bulk Pricing" and WhatsApp CTA buttons
- **Hero** — headline, feature chips, CTAs, and a stylised cadet illustration
- **The Complete NCC Range** — product cards (Uniform, Tracksuit, T-Shirts, Shoes) with a page indicator, next to a sticky **Get Your NCC Bulk Quote** form (fully interactive, client-side)
- **Details Matter** — shirt anatomy with labelled callouts
- **Comfort Meets Performance** — dark feature-grid section
- **From Cadet Count to Complete Kit** — 5-step process + "Size Panga? Sorted." callout card
- **Customisation & Institutional Support + FAQs** — accordion FAQ, customisation options list
- **Footer** — address, phone, tagline

All product/cadet imagery is built as inline SVG illustrations (no stock photography), so the project has zero external image dependencies.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Notes

- This build uses system font stacks (no external Google Fonts calls) so it builds in network-restricted environments. If you have access to Google Fonts, you can swap the font stack in `tailwind.config.ts` for `next/font/google` (Inter for body text, Caveat for the handwritten accents) to match the reference design even more closely.
- The bulk-quote form is a front-end only form (no backend wired up yet). Hook up the `onSubmit` handler in `components/QuoteForm.tsx` to your CRM/API endpoint or an email service to start receiving real leads.
- WhatsApp links currently point to a placeholder number (`888-47-55555` from the design) — update the `wa.me` links in `components/Header.tsx`, `components/Hero.tsx`, and `components/QuoteForm.tsx` with your real number.
- Replace the SVG illustrations in `components/CadetIllustration.tsx` and `components/ProductIllustration.tsx` with real product/campus photography whenever you have licensed images ready.

## Project structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Assembles all sections
  globals.css        # Tailwind + shared utility classes
components/
  Header.tsx
  Hero.tsx
  CadetIllustration.tsx
  ProductRange.tsx
  ProductIllustration.tsx
  QuoteForm.tsx
  DetailsMatter.tsx
  ComfortPerformance.tsx
  ProcessSteps.tsx
  CustomisationFaq.tsx
  Footer.tsx
```
