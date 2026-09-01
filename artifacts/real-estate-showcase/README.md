# BricksTrade Property Developer

A premium real-estate brochure website for BricksTrade, presenting the company's developments across Abuja as an editorial, cinematic experience — paired with a "Meet the Team" page and a working contact form.

## What is included

- Full-screen project slideshow on the home page with crossfade transitions, pause/play controls, and slide navigation
- Smart-scroll navigation: the navbar hides on scroll-down, reappears on scroll-up, and gains a blurred backdrop once scrolled; nav links automatically scroll the page to top on click and close the mobile menu
- Shared responsive navigation with a mobile menu and a branded footer, using the official BricksTrade logo (icon mark in the navbar, full lockup with tagline in the footer)
- Studio/about page with a parallax-style hero, animated story content, principles, and a real portfolio of current developments
- "Meet the Team" page introducing the partners and associates behind BricksTrade
- Contact page with phone, WhatsApp, email, social links, a working lead form (see Email delivery below), and a clickable Google Maps location block
- Scroll reveal, staggered entrance, hover, and page transition motion built with Framer Motion
- Reduced-motion support for visitors who prefer less animation
- Responsive layouts for desktop, tablet, and mobile screens
- Brand color system built from BricksTrade's official brand guidelines (deep navy, orange, and gold), with green retained as a minor accent on select emphasis text

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Wouter for client-side routing
- Lucide React + react-icons for interface and social icons
- EmailJS for contact form delivery
- pnpm workspace tooling

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Cinematic home page and featured project slideshow |
| `/about` | Company story, mission, principles, and portfolio |
| `/team` | Meet the partners and associates behind BricksTrade |
| `/contact` | Contact details, enquiry form, social links, and office location |

## Folder structure

```text
artifacts/real-estate-showcase/
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── images/
    │   ├── logo-icon.png
    │   ├── logo-full.png
    │   ├── logo-only.png
    │   ├── gwarinpa-heights.jpeg
    │   ├── guzape-court.jpeg
    │   ├── jabi-lakeview-terraces.jpeg
    │   └── ... team photos
    ├── components/
    │   ├── Shell.tsx
    │   ├── error-boundary.tsx
    │   └── ui/
    │       └── ... shared scaffold components
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Team.tsx
        ├── Contact.tsx
        └── not-found.tsx
```

## Email delivery (EmailJS)

The contact form sends directly to a live inbox via EmailJS — no backend server required. This needs three environment variables set locally and in your deployment provider (e.g. Netlify):

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Add these to a local `.env` file in `artifacts/real-estate-showcase/` for development, and add the same three keys under your hosting provider's environment variables for production. The EmailJS template should read the `name`, `phone`, and `message` fields submitted by the form.

## Brand colors

Sourced from the official BricksTrade brand guidelines:

| Role | Color | Hex |
| --- | --- | --- |
| Primary (navy) | Deep Navy | `#001F3D` |
| Accent (gold) | Warm Gold | `#C28021` |
| Accent (orange) | Orange | `#F18320` |
| Secondary | Green (minor accent only) | — |

## Replacing placeholder content

A few items still need real content before final client delivery:

1. Replace placeholder team member names ("Team Member") in `src/pages/Team.tsx` with real names and roles.
2. Confirm final photography for all three current developments (Gwarinpa Heights, Guzape Court, Jabi Lakeview Terraces) in `src/pages/Home.tsx` and `src/pages/About.tsx`.
3. Confirm final social media destinations (Instagram, Facebook, TikTok, LinkedIn) in `src/pages/Contact.tsx` — currently placeholder URLs.
4. Review `src/index.css` for any final brand font or spacing adjustments.

## Download from Replit and open in VS Code

1. In Replit, open the project menu and choose **Download as zip**.
2. Save the downloaded archive and unzip it on your computer.
3. Open VS Code.
4. Choose **File → Open Folder** and select the unzipped project folder.
5. Open the integrated terminal in VS Code.
6. Install the workspace dependencies:

```bash
   pnpm install
```

   If pnpm is not installed, install it with:

```bash
   npm install --global pnpm
```

7. Create a `.env` file in `artifacts/real-estate-showcase/` with the EmailJS keys listed above, plus:

```bash
   PORT=3000
   BASE_PATH=/
```

8. Start the local development server:

```bash
   PORT=3000 BASE_PATH=/ pnpm --filter @workspace/real-estate-showcase run dev
```

9. Open the local URL printed by Vite in your browser.

## Useful commands

```bash
# Typecheck the brochure app
pnpm --filter @workspace/real-estate-showcase run typecheck

# Build the production bundle
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/real-estate-showcase run build
```

## Contact form note

The form is fully wired to EmailJS and sends real enquiries to the connected inbox on submit — no further backend work needed, as long as the three environment variables above are set correctly in both local and production environments.