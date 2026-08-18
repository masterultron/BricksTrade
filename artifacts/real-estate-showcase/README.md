# Aperture Property Studio

A premium real-estate brochure website designed to present architectural work as an editorial, cinematic experience. The site is intentionally asset-ready: the current photography, copy, contact details, and social destinations are placeholders that can be replaced when the client materials arrive.

## What is included

- Full-screen project slideshow on the home page with crossfade transitions, pause/play controls, and slide navigation
- Shared responsive navigation with a mobile menu and a branded footer
- Studio/about page with a parallax-style hero, animated story content, principles, and portfolio projects
- Contact page with phone, email, social links, lead form, and a clickable Google Maps location block
- Scroll reveal, staggered entrance, hover, and page transition motion built with Framer Motion
- Reduced-motion support for visitors who prefer less animation
- Responsive layouts for desktop, tablet, and mobile screens

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Wouter for client-side routing
- Lucide React for interface icons
- pnpm workspace tooling

> The Replit workspace uses the React + Vite artifact template. The requested brochure routes are implemented as `/`, `/about`, and `/contact`, which provide the same user-facing routing shape as the original App Router brief.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Cinematic home page and featured project slideshow |
| `/about` | Studio story, mission, journey, and portfolio |
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
    ├── components/
    │   ├── Shell.tsx
    │   ├── error-boundary.tsx
    │   └── ui/
    │       └── ... shared scaffold components
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Contact.tsx
        └── not-found.tsx
```

## Replacing placeholder content

The current build uses fictional Aperture Property Studio branding and placeholder architectural photography for presentation. Before client delivery:

1. Replace the studio name and logo treatment in `src/components/Shell.tsx`.
2. Replace project names, locations, years, descriptions, and image URLs in `src/pages/Home.tsx` and `src/pages/About.tsx`.
3. Replace the email address, phone number, social destinations, and office address in `src/pages/Contact.tsx`.
4. Update the Google Maps query in `src/pages/Contact.tsx` to the final office location.
5. Replace the `mailto:` destination in the contact form with the client's preferred Formspree, EmailJS, or backend endpoint when a production submission service is available.
6. Review `src/index.css` for any final brand font, color, or spacing adjustments.

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

7. Start the local development server:

   ```bash
   pnpm --filter @workspace/real-estate-showcase run dev
   ```

8. Open the local URL printed by Vite in your browser.

## Useful commands

```bash
# Typecheck the brochure app
pnpm --filter @workspace/real-estate-showcase run typecheck

# Build the production bundle
pnpm --filter @workspace/real-estate-showcase run build
```

## Contact form note

The demo form validates the three requested fields and presents an intentional success state for client review. It is ready to be connected to a production email service; replace the submission handler in `src/pages/Contact.tsx` with the final Formspree, EmailJS, or API endpoint once the client supplies the destination and credentials.