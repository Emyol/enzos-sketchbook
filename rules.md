# Project Specifications & Constraints: The Digital Sketchbook

## 1. Project Architecture & Tech Stack

- **Framework:** React using Next.js (App Router).
- **Styling:** Tailwind CSS. Do not write custom CSS unless absolutely necessary for complex grid math. Configure the Tailwind `theme` to use our specific color palette and fonts.
- **Animations & Physics:** Framer Motion (`framer-motion`). Use this for all hover states, layout transitions, and the lightbox modal.
- **Icons:** `lucide-react` (Use sparsely, only for essential UI like a "close" or "zoom" button).

## 2. Global Aesthetics & Design System

- **Theme:** "The Playful Crayon-Box Sketchbook." Premium, buttery-smooth, yet child-like and tactile.
- **Tailwind Theme Configuration (Strict Adherence):**
  - `bg-paper`: `#FDFAF6` (Warm off-white base)
  - `text-graphite`: `#333333` (Soft dark grey for all text)
  - `accent-cherry`: `#E63946` (Primary action/hover color)
  - `accent-sunshine`: `#FFD166` (Highlights)
  - `accent-sky`: `#118AB2` (Links)

## 3. Typography Rules

- **Headings:** Must use the `Patrick Hand` font (configured via Next/Font).
  - _Styling:_ Apply a slight, permanent rotation (e.g., `-rotate-1` or `rotate-2` in Tailwind) to `h1` and `h2` elements so they feel hand-placed.
- **Body Text:** Must use the `Quicksand` font (configured via Next/Font).
  - _Styling:_ `font-medium`, `leading-relaxed`, text color must always be `text-graphite`.

## 4. Component Blueprints & Framer Motion Specs

- **Buttons:** \* _Static Styling:_ Rounded edges (`rounded-xl` or `rounded-full`), thick borders (`border-2 border-graphite`), and a hard drop shadow to mimic a sticker.
  - _Framer Motion:_ Add a `whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}` to create a playful "wiggle" effect when the user hovers over a button or link.
- **The Gallery Grid:** \* Use a Masonry layout. You can use CSS columns (`columns-2 md:columns-3 lg:columns-4 gap-4`) for a lightweight masonry effect.
  - Images must load cleanly. Use Next.js `<Image />` component with `priority` on the first few sketches.
- **The Lightbox (Animated Modal):** \* Must use Framer Motion's `<AnimatePresence>` and `layoutId` to create a seamless, "Apple-style" zoom effect where the clicked thumbnail smoothly expands into the center of the screen.
  - Background overlay: `bg-black/80` with a smooth `backdrop-blur-sm`.

## 5. Asset Management & Safety

- **Image Directory:** All sketches map to `/public/masterpieces/`.
- **Privacy:** Strictly prohibit any inclusion of location data, school names, or identifiable personal information. Only use the artist's first name.
