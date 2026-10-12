# Dr. Maya Reynolds, PsyD — Santa Monica Therapy Website

Next.js 14 (App Router) + Tailwind CSS. Single-page homepage built for the
Grow My Therapy internship assignment.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```
Versions are pinned (Next 16.4.0, React 19, **Tailwind 3.4.19**).
Do NOT run `npm audit fix --force`: it upgrades Tailwind to v4 and breaks the styling.

## Where things live
| What | File |
| --- | --- |
| All copy (every line from the profile) | `lib/content.ts` |
| Colour palette (primary / secondary / accent) | `app/globals.css` (`:root` variables) |
| Fonts | `app/layout.tsx` (Google Fonts) + `--font-*` in `globals.css` |
| Sections | `components/*.tsx` |

## Palette
- Primary: eucalyptus teal `#2F6F6A` (deep: `#1C4A46`)
- Secondary: sea-glass mist `#E3EEEB`
- Accent: golden hour `#E2A64B`
- Text `#1C2B28`, muted text `#4B5F5B`, background `#F7FAF9`

## Images
Real photos (provided with the assignment):
- `public/images/maya-reynolds.jpg`: Dr. Reynolds' portrait (About section)
- `public/images/office-1.jpg`, `office-2.jpg`: "Our Office" section

Illustrations (generated for this draft, same coastal teal / sea-glass / golden palette):
`hero-1`, `hero-2`, `intro-coast`, `who-anxiety`, `who-burnout`, `who-trauma`,
`services-side`, `cta-coast` (all `.jpg`).

To swap any image for a photo, overwrite the file in `public/images/` using the
**same file name** (or change the `src` in `lib/content.ts > images`) and update
its `alt` text there. Keep file names lowercase, with no spaces.

## Things to finish before submitting
1. (Optional) swap the illustrations for photos if you prefer.
2. Set `site.url` in `lib/content.ts` to your deployed URL.
3. The contact form is front-end only. Connect it (Formspree, Resend, or a
   Next.js route) if you want it to really send.
4. Compare with https://www.conejovalleycounseling.com/home side by side at
   desktop / tablet / mobile widths and adjust spacing and fonts to match.
5. Run Lighthouse (SEO + accessibility) after deploying.

## Deploy
```bash
git init && git add . && git commit -m "Initial site"
# create an empty public repo on GitHub, then:
git remote add origin <your-repo-url>
git push -u origin main
```
Then import the repo at vercel.com/new (framework: Next.js, no extra settings).
