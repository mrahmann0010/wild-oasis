You are doing a complete, ground-up visual redesign of **Wild Oasis** — a luxury
single-tenant cabin booking platform built on Next.js + Supabase. Every component,
page, layout, and style file must be redesigned with a unified, production-grade
aesthetic. Preserve all logic, data fetching, auth flows, and Server/Client component
boundaries. Only change visuals.

---

## DESIGN DIRECTION: "DARK WILDERNESS LUXURY"

Concept: The feeling of arriving at a remote luxury lodge at dusk — dramatic,
quiet, and indulgent. Think: Amangiri Resort × Kinfolk Magazine × Hinterland
architecture photography. Nature-forward, high-end, deeply atmospheric.

Palette:
  --void:        #0D0F0B   /*near-black forest floor */
  --deep:        #141810   /* card/surface background */
  --moss:        #1E2419   /* elevated surfaces, sidebar */
  --pine:        #2D3D28   /* hover states, secondary surfaces */
  --gold:        #C9A84C   /* primary accent — warm antique gold */
  --gold-muted:  #8A6E32   /* secondary gold, borders */
  --stone:       #A09070   /* body text, muted labels */
  --birch:       #E8E0D0   /* headings, primary text */
  --fog:         #F5F2EC   /* light text on dark */
  --rust:        #7A3D2A   /* danger/delete accent */
  --border:      rgba(201,168,76,0.15)  /* subtle gold-tinted borders*/

Typography:

- Display/Headings: 'Cormorant Garamond' — high-contrast serif, aristocratic
- Body/UI: 'Jost' — geometric humanist sans, clean and airy
- Data/Labels: 'IBM Plex Mono' — dates, prices, IDs, codes
  Import: @import url('<https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Jost:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap>');

Visual Language:

- Backgrounds: var(--void) base with SVG noise grain overlay (opacity 0.04)
- Photography: full-bleed cabin images with dark gradient overlays
- Gold hairline accents: 1px gold borders, gold underlines on active nav
- Texture depth: subtle inner shadows, layered surface elevations
- Spacing: generous — sections breathe, content never feels crowded
- Typography scale: large and confident — h1 at 64–80px, section titles 40px+
- Motion: slow, deliberate — ease-out curves, 400–600ms transitions
- Iconography: thin-stroke line icons only (Lucide or Heroicons outline)
- Cards: no heavy border-radius — 4px max. Sharp, architectural corners.

---

## GLOBAL STYLES — _styles/globals.css

Complete rewrite:

- CSS variables for full design token system (all colors, spacing, radius, shadow)
- body: background var(--void), color var(--birch), font-family Jost
- Cormorant Garamond on all h1–h4 elements
- IBM Plex Mono on .mono class, time/date elements, price displays
- Custom scrollbar: thin, var(--pine) track, var(--gold-muted) thumb
- ::selection: background var(--gold) at 30% opacity, text var(--void)
- Focus-visible ring: 1.5px solid var(--gold), offset 3px
- Smooth scroll, -webkit-font-smoothing: antialiased
- Global link style: var(--gold), no underline, hover underline fade-in
- @keyframes: fadeUp (opacity+translateY), shimmer (skeleton), slowZoom (hero image)

---

## COMPONENT REDESIGNS

### logo.js

- Wordmark: "Wild Oasis" in Cormorant Garamond 600, var(--birch)
- "WILD" small-caps tracking-[0.3em], "OASIS" regular italic
- Preceding glyph: a thin gold tree/pine SVG icon (~18px)
- No background, works on dark surfaces

### Header.js

- Full-width, sticky, no background by default
- On scroll > 60px: dark glass bg (backdrop-filter blur(12px),
    background rgba(13,15,11,0.85)), thin gold bottom border (1px)
- Left: logo.js component
- Right: Navigation links + auth button
- Transition: all properties 400ms ease

### Navigation.js

- Links: Jost 400, var(--stone), uppercase tracking-[0.1em], 12px
- Active/hover: color transitions to var(--gold), gold underline
    slides in from left (::after pseudo, scaleX 0→1, transform-origin left)
- Links: "Cabins", "About", "Account"
- On mobile: hamburger → full-screen overlay nav, links centered in
    Cormorant Garamond italic 48px

### SignInButton.js

- Style: outlined — 1px border var(--gold), text var(--gold), Jost 500
- Padding: 10px 24px, border-radius 2px
- Google icon: left-aligned, var(--gold) tinted
- Hover: bg var(--gold), text var(--void), transition 300ms

### SignOutButton.js  

- Ghost style: text var(--stone), hover text var(--rust)
- Small arrow-right icon preceding text
- No border, minimal footprint

### Spinner.js + SpinnerMini.js

- Custom ring spinner: thin gold arc on transparent ring
- Animation: spin 1s linear infinite
- Spinner: 48px centered in container with full overlay (bg void 60% opacity)
- SpinnerMini: 18px inline, used inside buttons

### Filter.js (cabin size filter)

- Pill tab group: "All", "Small", "Medium", "Large"
- Default: var(--deep) bg, var(--stone) text, gold border
- Active: var(--gold) bg, var(--void) text
- Transition: background 200ms
- Positioned below CabinList heading, right-aligned
- Label above: "Filter by capacity" in IBM Plex Mono var(--stone) 11px

### CabinCard.js

- Full-bleed image top (60% of card height)
- Image: dark gradient overlay on bottom half
    (linear-gradient transparent → var(--void))
- Over the image bottom: cabin name in Cormorant Garamond 700 italic
    28px, white
- Below image: var(--deep) surface
  - Capacity row: 🌲 icon + "Up to X guests" in Jost 300 var(--stone)
  - Price row: IBM Plex Mono var(--gold) — "$XXX / night", strikethrough
      original if discounted
  - Short description: Jost 300 var(--stone) 13px, 2-line clamp
  - CTA: full-width button "View Cabin →"
      outlined gold → filled gold on hover
- Card border: 1px solid var(--border)
- Hover: translateY(-6px), shadow 0 20px 60px rgba(0,0,0,0.5),
    image scales to 1.04 (overflow hidden on image wrapper)
- Stagger entrance: each card fades up with 80ms delay offset

### CabinList.js

- Section heading: "Our Cabins" — Cormorant Garamond 600 italic, 52px,
    var(--birch), centered
- Subheading: "Each retreat is a world unto itself" — Jost 300 italic
    var(--stone), centered, below heading
- Grid: responsive — 1 col mobile, 2 col tablet, 3 col desktop
- Gap: 32px
- Full-width section with generous vertical padding (120px top/bottom)

### Cabin.js (single cabin detail)

  Two-panel layout (desktop):

  LEFT PANEL (55%):
    - Full-height image with slow CSS zoom animation on load (slowZoom keyframe)
    - Gradient overlay on bottom 40%
    - Bottom-left text overlay: cabin name in Cormorant 700 italic 64px
    - Capacity badge: IBM Plex Mono, gold pill, top-right corner of image

  RIGHT PANEL (45%):
    - Background: var(--deep), left border: 1px solid var(--border)
    - Padding: 56px
    - Breadcrumb: "Cabins › Cabin Name" IBM Plex Mono 11px var(--stone)
    - Price: IBM Plex Mono var(--gold) 32px + "/night" in stone
    - Divider: 1px var(--border)
    - Description: Jost 300 18px 1.9 line-height var(--stone)
    - TextExpander: "Read more" toggle in gold, animated max-height reveal
    - Amenities/features list (if data available): thin checkmark icons var(--gold)
    - Divider
    - DateSelector + ReservationForm embedded below

### DateSelector.js

- Dark calendar widget — background var(--moss), border var(--border)
- Day cells: var(--deep), hover var(--pine), selected var(--gold) text var(--void)
- Range highlight: var(--pine) bg, gold endpoints
- Blocked/unavailable days: strikethrough, var(--rust) tint, not-allowed cursor
- Month navigation arrows: thin Jost, gold color
- Month/year header: Cormorant Garamond 500 italic var(--birch)
- Labels (check-in / check-out): IBM Plex Mono uppercase 10px var(--stone)

### ReservationForm.js

- Background: var(--moss), border 1px var(--border), padding 32px, radius 4px
- Guest count selector: custom +/− stepper, gold buttons
- Special requests textarea: dark input, gold focus border
- Price summary box: IBM Plex Mono table layout
  - Nights × price
  - Any discounts
  - Divider
  - Total: var(--gold) 600 weight
- Submit button: full-width, var(--gold) bg, var(--void) text,
    Jost 500 uppercase tracking-widest
    Loading state: gold spinner inline, "Reserving..." text

### FormButton.js

- Primary variant (default): var(--gold) bg, var(--void) text
- Loading: opacity 0.7, spinner icon, disabled
- Hover: var(--gold-muted) bg, scale(0.99) active

### Reservation.js (cabin page booking panel)

- Container card: var(--deep), 1px border var(--border)
- Section title: "Reserve Your Stay" Cormorant Garamond italic 30px
- Login prompt (if not authenticated): centered, gold lock icon,
    brief message, SignInButton
- Seamless integration of DateSelector above ReservationForm

### ReservationCard.js (in account/reservations)

- Horizontal card: image left (25% width), details right
- Image: cabin photo, radius 2px, slight zoom on hover
- Details:
  - Cabin name: Cormorant Garamond 600 24px var(--birch)
  - Date range: IBM Plex Mono var(--stone), calendar icon
  - Guest count: Jost 300 var(--stone)  
  - Price: IBM Plex Mono var(--gold) 20px
  - Status badge: "Upcoming" (gold), "Past" (stone), "Tonight" (rust)
- Action buttons: "Edit" ghost + "Delete" ghost rust — right-aligned
- Border-bottom: 1px var(--border), last-child no border

### DeleteReservation.js

- Danger ghost button: var(--rust) text, thin rust border on hover
- Confirmation: inline expansion (not modal) — "Are you sure? Yes / Cancel"
- SpinnerMini during deletion

### ReservationReminder.js

- Fixed bottom-right toast/banner (non-intrusive)
- Background: var(--deep), left border 3px var(--gold)
- "Your stay is coming up in X days" — Jost 400 var(--birch)
- Cabin name + date — IBM Plex Mono var(--stone)
- Dismiss ×  button top-right
- Slide-in from right on mount (CSS transform + transition)

### LoginMessage.js

- Centered card: var(--deep) bg, border var(--border), padding 48px
- Gold lock icon (Lucide) 40px, centered
- Heading: Cormorant Garamond italic "Sign in to continue"
- Subtext: Jost 300 var(--stone) explaining auth requirement
- SignInButton component below

### SelectCountry.js

- Custom styled select: var(--moss) bg, var(--border) border, gold focus ring
- Flag emoji visible in selected value
- Dropdown styled to match dark theme
- Label: IBM Plex Mono uppercase 10px var(--stone)

### UpdateProfileForm.js

- Two-column form grid on desktop
- Field groups: label (IBM Plex Mono 10px uppercase var(--stone)) +
    input (Jost 400 var(--birch), var(--moss) bg, gold focus border)
- Avatar section: circular preview (80px), gold ring border,
    "Change photo" ghost link
- Save button: primary FormButton, right-aligned
- Success/error state: inline below button, fade animation

### SideNavigation.js (account section)

- Left sidebar: var(--moss) bg, full height, border-right 1px var(--border)
- Width: 240px desktop, collapsible on mobile
- Section label: IBM Plex Mono "ACCOUNT" uppercase 10px var(--gold-muted)
- Nav items: Jost 400 var(--stone), 14px, padding 12px 20px
    Icon (Lucide outline, 16px) + label
    Active: bg var(--pine), text var(--birch), left border 2px var(--gold)
    Hover: bg var(--pine), text var(--birch), transition 200ms
- Items: "Dashboard", "Reservations", "Guest Profile", "Sign Out"
- Sign Out at bottom, separated by top border, rust hover

### TextExpander.js

- Default: 3-line clamp with gradient fade to void at bottom
- "Show more ↓" in gold, Jost 400 12px
- Expand: max-height animation 500ms ease-out
- Collapse: "Show less ↑"

### count.js (guest counter)

- Custom stepper: [−] count [+]
- Buttons: gold border, var(--deep) bg, var(--gold) text, 32px square
- Count: IBM Plex Mono 20px centered
- Min/max enforcement with disabled state (opacity 0.3)

---

## PAGE REDESIGNS

### app/page.js — HOME

  HERO (100vh):
    - Full-viewport background: dramatic cabin photography, dark overlay
      (linear-gradient 135deg, rgba(13,15,11,0.7) 40%, rgba(13,15,11,0.3) 100%)
    - Noise grain texture overlay (SVG, 4% opacity)
    - Center-aligned content:
      - Eyebrow: IBM Plex Mono "LUXURY CABIN RETREATS" var(--gold)
        tracking-[0.4em] 11px
      - H1: Cormorant Garamond 300 italic, 88px: "Escape to the Wild"
      - Subheading: Jost 300 var(--fog) 20px, max-width 560px centered
        "Hand-picked luxury cabins in the most breathtaking corners of nature."
      - CTA: "Explore Cabins →" gold outlined button → gold filled on hover
    - Scroll indicator: thin gold line pulsing downward, bottom-center
    - Subtle text fade-up animation on load (staggered 200ms delays)
  
  STATS BAR (below hero):
    - Full-width var(--deep) strip
    - 4 columns: "8 Cabins" · "Exclusive Access" · "All Seasons" · "Google Auth"
    - IBM Plex Mono numbers in gold, Jost 300 labels in stone
    - Gold vertical dividers between columns

  FEATURED CABINS PREVIEW:
    - 3-cabin grid teaser with CabinCard components
    - "View All Cabins →" text link, gold, right-aligned

  NATURE SECTION (about teaser):
    - Asymmetric layout: large image left (60%), text right (40%)
    - Image: forest/nature photography with dark overlay
    - Text: eyebrow + Cormorant Garamond heading + Jost body + link to /about

  BOOKING PROCESS STRIP:
    - 3-step horizontal flow: "1. Browse Cabins" · "2. Pick Your Dates" ·
      "3. Confirm & Relax"
    - Each step: thin gold number, Cormorant heading, Jost description
    - Connected by thin gold dashed lines on desktop

### app/cabins/page.js — CABINS LISTING

- Hero banner: full-width 40vh image with dark overlay
    Title: "Our Cabins" Cormorant Garamond 700 italic 72px centered white
    Subtitle: "Every stay is private, every setting extraordinary"
- Filter bar (Filter.js) below hero, sticky on scroll
- CabinList grid below
- Section: "Not sure which to choose?" — comparison teaser or size guide
    in gold-bordered info card

### app/cabins/[cabinId]/page.js — CABIN DETAIL

- Full implementation of Cabin.js two-panel layout (see above)
- Below the fold: "You Might Also Like" — 2 other cabin cards

### app/login/page.js — LOGIN

- Full-screen centered layout on dark background with forest photo behind
    (blurred, dark overlay)
- Card: var(--deep) 480px wide, padding 56px, border var(--border),
    subtle glow shadow (0 0 60px rgba(201,168,76,0.08))
- Wild Oasis logo at top, centered
- Heading: Cormorant Garamond italic "Welcome Back"
- Subtext: Jost 300 var(--stone) "Sign in to manage your reservations"
- SignInButton: full-width
- Below: "No account needed — sign in with Google to get started"
    IBM Plex Mono 11px var(--stone)

### app/about/page.js — ABOUT

  HERO: 50vh full-width image (nature/forest), overlay, "Our Story" heading
  
  SECTIONS (alternating image/text layout):
    1. "The Wild Oasis Philosophy" — left text, right image
    2. "Built for Nature Lovers" — right text, left image  
    3. "The Locations" — centered text, full-width atmospheric image
  
  Each section: Cormorant Garamond headings, Jost 300 body, generous padding
  
  TEAM/VALUES strip: 3 gold-icon cards, var(--deep) bg

### app/account/page.js — ACCOUNT DASHBOARD

- Sidebar layout using SideNavigation.js
- Main area:
  - Welcome banner: "Welcome back, [Name]" Cormorant italic 48px
  - User avatar + name + email in var(--deep) card with gold ring avatar
  - Quick stats: upcoming reservations count, nights stayed
  - "Your Upcoming Stay" ReservationReminder prominent card

### app/account/reservations/page.js — RESERVATIONS LIST

- Page heading with total count: IBM Plex Mono "X RESERVATIONS"
- Segmented filter: "Upcoming · Past · All" pill tabs
- ReservationCard list (vertical stack)
- Empty state: Cormorant italic "No reservations yet" +
    "Browse Cabins" gold CTA button

### app/account/reservations/edit/[reservationId]/page.js — EDIT RESERVATION

- Back link: "← Back to Reservations" IBM Plex Mono var(--stone)
- Heading: "Edit Reservation" Cormorant 600 italic
- Form: ReservationForm pre-filled with existing data
- Save/Cancel action row

### app/account/profile/page.js — GUEST PROFILE

- Heading: "Guest Profile"
- UpdateProfileForm component (see above)

### app/error.js

- Full-screen centered, dark bg
- Large "!" or warning icon in gold (Lucide AlertTriangle)
- Heading: Cormorant "Something went wrong"
- Error message: Jost 300 var(--stone), monospace error details collapsed
- "Try again" gold button + "Go home" ghost

### app/not-found.js + app/cabins/not-found.js

- Full-screen centered
- Large "404" Cormorant Garamond 200 weight, 180px, var(--pine) — decorative
- "Page Not Found" heading over it
- Brief Jost message
- "Back to Home" and "Browse Cabins" buttons

### app/loading.js + app/cabins/loading.js  

- Full-screen centered Spinner.js
- Subtle "Loading..." IBM Plex Mono var(--stone) below
- Fade-in after 200ms (prevent flash on fast loads)

### app/layout.js — ROOT LAYOUT

- Dark base: var(--void) bg on html/body
- Header.js at top
- <main> with padding-top for sticky header height
- Footer at bottom:
  - var(--deep) bg, top border 1px var(--border)
  - Left: Wild Oasis logo
  - Center: nav links (Cabins, About, Account) in Jost 300 var(--stone)
  - Right: IBM Plex Mono "© 2024 Wild Oasis. All rights reserved."
  - Below divider: "Powered by Supabase · Next.js · OpenLibrary"
      in IBM Plex Mono 10px var(--gold-muted)

### app/account/layout.js — ACCOUNT LAYOUT

- Two-column: SideNavigation (240px fixed left) + main content area
- Mobile: top tab navigation instead of sidebar
- Account page header: thin full-width gold top border

---

## FEATURE DETAILS TO ADD IN UI (non-functional, display only)

1. **Availability Badge** on CabinCard: "Available" (green dot) / "Booked"
   (red dot) / "Limited Dates" (gold dot) — driven from existing data

2. **Price Discount Display**: if cabin has discount > 0, show original price
   crossed out in stone, new price in gold with "X% OFF" IBM Plex Mono badge

3. **Cabin Capacity Visual**: icon row of person silhouettes (Lucide Users),
   gold for filled, stone for empty — shows at a glance on card and detail page

4. **Booking Summary Sidebar**: on cabin detail, show floating summary card
   that sticks as user scrolls: "X nights · $XXX total" with gold bottom line

5. **Reservation Status Timeline**: in ReservationCard, a small 3-dot
   progress line: "Booked → Check-in → Check-out" with current position gold

6. **Cabin Amenity Icons**: in Cabin detail, a horizontal strip of Lucide
   icons + labels (Wifi, Fireplace, Mountain View, Private Deck, Pet Friendly)
   — pull from cabin description keywords or hardcode tastefully

7. **Season Indicator**: on DateSelector, a thin banner showing current
   season ("Winter Rates · Peak Season") based on selected month,
   in IBM Plex Mono gold

8. **"Guests Love This" Micro-stat**: below cabin name on detail page,
   a gold star icon + "Exclusive retreat · X bookings this season" —
   adds social proof aesthetics without needing real data

---

## MICRO-INTERACTIONS & MOTION

- Page transitions: fadeUp (translateY 20px → 0, opacity 0→1, 500ms ease-out)
- CabinCard entrance: stagger 80ms per card, same fadeUp
- Hero image: slowZoom keyframe on load (scale 1.0 → 1.04, 8s ease-out,
  forwards) — subtle life to static image
- Nav underline: scaleX transition 250ms ease-out
- DateSelector day selection: ripple on click (CSS radial-gradient animation)
- ReservationReminder: slideInRight 400ms ease-out on mount
- Buttons: scale(0.97) on :active, transition 150ms
- Image hovers on cards: scale(1.04) with overflow hidden parent, 400ms ease
- All color transitions: 200ms ease on interactive elements

---

## RESPONSIVE BREAKPOINTS

  Mobile  (<640px):  1-col grid, stacked hero text, hamburger nav,
                     top tab account nav, condensed DateSelector
  Tablet  (640–1024): 2-col grid, sidebar at 200px, reduced hero padding
  Desktop (>1024px):  3-col grid, full sidebar, two-panel cabin detail,
                      full hero typography scale

---

## DO NOT

- Use any light/white backgrounds anywhere
- Use blue, purple, or cold-toned accents
- Use Inter, Roboto, or geometric sans without character
- Use heavy border-radius (max 4px on cards, 2px on inputs)
- Use card shadows in warm colors — shadows are always dark/void tones
- Use Material UI defaults or Bootstrap
- Break Next.js Server Component boundaries or auth logic

## PRESERVE EXACTLY

- All Supabase queries and server actions in _lib/
- NextAuth configuration and Google OAuth flow
- Server/Client component 'use client' boundaries
- Dynamic routing ([cabinId], [reservationId])
- ReservationContext state management
- All form server actions (actions.js)
- Image domains/next.config settings
