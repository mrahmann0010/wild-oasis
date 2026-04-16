All new sections follow the established Dark Wilderness Luxury design system exactly — same CSS variables, typography trio (Cormorant Garamond / Jost / IBM Plex Mono), motion principles, and spacing philosophy. No new tokens introduced unless specified.

SECTION 1 — GUEST REVIEWS & TESTIMONIALS
Placement: app/page.js (Home, after Featured Cabins) + app/cabins/[cabinId]/page.js (below booking panel)
Visual Concept: Editorial magazine pull-quote style. Think a spread from Kinfolk — one dominant quote bleeds large, others stack modestly beside it.
Home Page Variant — "What Our Guests Say":
Layout: Asymmetric grid — 1 large featured review (60% width) left-anchored,
        2 stacked smaller reviews right (40%)

Featured Review Card:

- Background: var(--deep), left border 3px var(--gold)
- Giant opening quotation mark: Cormorant Garamond 200px var(--gold) at 8% opacity,
    absolute top-left of card, decorative only
- Quote text: Cormorant Garamond 300 italic, 28px, 1.7 line-height, var(--birch)
    Max 3 sentences — truncate with TextExpander "Read full review"
- Reviewer attribution row:
      Avatar: 40px circular, gold ring border 1.5px, var(--pine) bg fallback
      Name: Jost 500 var(--birch) 14px
      Location: IBM Plex Mono var(--stone) 11px (e.g. "Portland, OR")
      Stay label: IBM Plex Mono "Stayed in Cabin Nº 007 · 5 nights" var(--gold-muted) 10px
- Star rating: 5 thin gold star SVGs (Lucide Star filled var(--gold)),
    rendered inline after attribution
- Date: IBM Plex Mono var(--stone) 10px — right-aligned "Oct 2024"

Smaller Review Cards (stacked right):

- Same card style but compact: quote 16px, no large decorative quotemark
- All same fields, just tighter padding (24px)

Section Header (above grid):

- Eyebrow: IBM Plex Mono "GUEST EXPERIENCES" tracking-[0.4em] var(--gold) 11px, centered
- H2: Cormorant Garamond 600 italic 52px var(--birch), centered
    "Wilderness, remembered."
- Subtext: Jost 300 var(--stone) 16px, centered, max-width 480px
    "Every stay is private. Every memory, yours alone."
- Thin gold horizontal rule below (width 60px, centered, 1px)

Review Count Bar (below grid):

- Full-width var(--deep) strip, 3 columns:
    "4.97 / 5" IBM Plex Mono var(--gold) 36px + "Average Rating" Jost 300 var(--stone)
    "100%" + "Guests Who'd Return"
    "48 hrs" + "Average Response Time"
- Gold vertical hairlines between columns
- Entrance: fade up on scroll-into-view

Cabin Detail Variant:

- Title: "What Guests Say About This Cabin" Cormorant italic 28px
- Horizontal scroll row: 3 review cards side by side, snap-scroll on mobile
- Each card: same compact style above
- "See all X reviews →" gold text-link right-aligned

SECTION 2 — CABIN PHOTO GALLERY
Placement: app/cabins/[cabinId]/page.js — inserted between two-panel layout and "You Might Also Like" section
Visual Concept: Masonry photography exhibition. No captions cluttering — the images breathe. Hovering reveals a subtle gold overlay with a fullscreen icon.
Gallery Grid:

- Masonry layout: 3 columns desktop, 2 tablet, 1 mobile
- Column gap: 16px, row gap: 16px
- Each image cell:
    Aspect-ratio: first image in col 1 is always 16/9 (hero), others are 4/3
    Border-radius: 2px (consistent with card language)
    overflow: hidden on wrapper

  Image Hover State:
    - Overlay: linear-gradient(to top, rgba(13,15,11,0.7) 0%, transparent 60%)
    - Bottom-left gold hairline border slides up (::after, height 2px,
      scaleX 0→1, transform-origin left, 300ms ease-out)
    - Top-right: circular button (36px, var(--deep) 80% opacity, 1px var(--border))
      containing Lucide Expand icon var(--gold) — opens lightbox

Lightbox (CSS + JS, no library needed):

- Full-screen overlay: var(--void) 95% opacity, backdrop-filter blur(4px)
- Image: max-height 90vh, max-width 90vw, centered, border 1px var(--border)
- Left/Right navigation: thin arrow buttons, Cormorant Garamond "‹" "›" 48px
    var(--gold), positioned at viewport edges
- Bottom strip: IBM Plex Mono "Photo X of Y" var(--stone) centered
- Close: top-right ×, Jost 300 var(--stone), hover var(--rust)
- Keyboard: arrow keys navigate, Escape closes
- Enter/exit: opacity + scale 0.97→1.0 transition 300ms

Section Header:

- IBM Plex Mono "THE SPACE" tracking-[0.4em] var(--gold) 11px, left-aligned
- H2: Cormorant Garamond 600 italic 40px var(--birch) "Inside & Out"

Image Count Badge (top-right of first image):

- "⊞ 12 Photos" IBM Plex Mono var(--stone) 11px, pill var(--deep) 80% bg
- Click opens lightbox at index 0

SECTION 3 — INTERACTIVE AVAILABILITY CALENDAR (QUICK CHECK)
Placement: app/cabins/page.js — sticky bar below the filter, OR as a floating widget at bottom of the cabins listing hero
Visual Concept: Airline-style date range picker, stripped to its essence. Clean two-date display that feels like a luxury hotel's booking bar.
Quick Availability Bar:

- Full-width, var(--deep) bg, 1px bottom border var(--border)
- Sticky: sticks below the filter bar on scroll
- Layout: horizontal flex row, vertically centered

  Check-in Field:
    - Left border 1px var(--border), padding 16px 24px
    - Label: IBM Plex Mono "CHECK-IN" uppercase 10px var(--gold-muted)
    - Value: Jost 400 var(--birch) 16px — placeholder "Select date"
    - Thin gold calendar icon (Lucide, 14px) left of label
    - Click: opens date picker dropdown (mini DateSelector)

  Check-out Field:
    - Same styling, right of check-in, divider between: 1px var(--border)

  Guests Field:
    - IBM Plex Mono "GUESTS" label + Jost value "2 Guests"
    - +/− inline micro-stepper on click expand

  Search/Filter Button:
    - "Check Availability" — var(--gold) bg, var(--void) text
    - Jost 500 uppercase tracking-widest, padding 14px 32px
    - Filters CabinList below to show only available cabins for range

  Mobile: Collapses to "📅 Check Availability" pill button (var(--gold) outlined)
    → expands to a full-width overlay panel with same fields stacked

Visual Detail:

- Between fields, a thin long gold dashed line (border-style: dashed)
    connecting check-in to check-out date visually — feels like a timeline
- Active field: bottom-underline 1px var(--gold), label shifts to var(--gold)
- Transition: 200ms ease on all color changes

SECTION 4 — LOCAL AREA & SURROUNDINGS
Placement: app/cabins/[cabinId]/page.js — after photo gallery, before "You Might Also Like"
Visual Concept: Editorial travel magazine section. Atmospheric landscape photography tiles with micro-copy. Think a luxury hotel's "Explore the Area" page — evocative, not utilitarian.
Section Layout:

- Full-width section, var(--void) bg, padding 120px 0
- Section Header:
    Eyebrow: IBM Plex Mono "EXPLORE NEARBY" tracking-[0.4em] var(--gold) 11px
    H2: Cormorant Garamond 600 italic 48px var(--birch) "The World Outside Your Door"
    Subtext: Jost 300 var(--stone) 18px — cabin-specific flavor text:
    "Nestled at the edge of the Cascade foothills — hiking trails, alpine lakes,
    and ancient forest, minutes away."

Activity Cards Grid:

- 4-column desktop, 2 tablet, 1 mobile
- Each card: full-bleed image (3/2 ratio), dark gradient overlay
- No card bg — image IS the card
- Bottom text overlay (always visible, not on hover):
    Category badge: IBM Plex Mono uppercase 9px var(--gold), pill with
      1px gold border — e.g. "HIKING" / "DINING" / "ADVENTURE" / "CULTURE"
    Activity name: Jost 500 var(--birch) 15px
    Distance: IBM Plex Mono var(--stone) "4.2 mi from cabin"
- Hover:
    Overlay darkens: rgba(13,15,11,0.5) additional layer
    translateY(-4px), transition 300ms ease-out
    Right-arrow icon appears bottom-right, var(--gold)

Category Tabs (above grid):

- "All · Outdoors · Dining · Culture · Wellness"
- Same pill tab style as Filter.js — filters card grid client-side

Map Teaser Panel (below cards):

- 2-column: left 60% is a static terrain/topo map image (dark-styled,
    sepia filter applied via CSS: sepia(0.4) brightness(0.6) contrast(1.1)
    to match dark theme), right 40% is text panel
- Map has 3–4 Lucide MapPin icons positioned absolutely (gold color)
    each labeled with location name + distance badge
- Right panel:
    Heading: Cormorant italic "Location & Access"
    Details (IBM Plex Mono var(--stone) 13px):
      "Nearest town: Leavenworth, WA · 12 mi"
      "Seattle-Tacoma Airport · 2.5 hrs"
      "Elevation: 3,400 ft"
    Access note: Jost 300 var(--stone) — "Year-round access via paved road.
      4WD recommended Nov–Mar."
    "Get Directions →" gold outlined button, links to Google Maps

SECTION 5 — TRUST & POLICIES STRIP
Placement: app/cabins/[cabinId]/page.js — just above the footer. Also a condensed version on app/cabins/page.js
Visual Concept: Architectural data strip — the kind you'd see on an Aesop or Aesop-adjacent luxury product site. Cold facts, warm presentation.
Full-Width Strip: var(--deep) bg, top and bottom 1px var(--border)
Padding: 64px 0
4-column grid (2 on mobile, scroll):

  Column 1 — Cancellation Policy:
    Icon: Lucide CalendarX, 22px, var(--gold)
    Title: Jost 500 var(--birch) 14px "Free Cancellation"
    Body: Jost 300 var(--stone) 13px
    "Cancel up to 7 days before check-in for a full refund."
    Fine print: IBM Plex Mono 10px var(--stone) "After 7 days: 50% refund"

  Column 2 — Check-in Details:
    Icon: Lucide Key, 22px, var(--gold)
    Title: "Self Check-In"
    Body: "Keypad entry — your code arrives 24hrs before arrival."
    Fine print: IBM Plex Mono "Check-in: 3PM · Check-out: 11AM"

  Column 3 — House Rules:
    Icon: Lucide ScrollText, 22px, var(--gold)
    Title: "House Rules"
    Body: "No smoking. Pets welcome. Max capacity strictly enforced."
    Fine print: IBM Plex Mono "Quiet hours 10PM–8AM"

  Column 4 — Safety & Trust:
    Icon: Lucide ShieldCheck, 22px, var(--gold)
    Title: "Verified & Secure"
    Body: "Payments secured. ID verified. 24/7 support available."
    Fine print: IBM Plex Mono "Powered by Supabase Auth"

Design details:

- Gold vertical hairlines between columns (1px, 60% height centered, var(--border))
- Each icon has a 40px square var(--pine) bg tile (2px radius) as backdrop
- Heading color transitions to var(--gold) on column hover, 200ms
- Mobile: horizontal scroll snapping, each column 80vw

SECTION 6 — FAQ SECTION
Placement: app/page.js (Home, near footer) + standalone app/faq/page.js
Visual Concept: Accordion built like luxury product pages — no visual noise, just letterpress-quality typography and a gold hairline that expands.
app/page.js Variant (condensed — 5 questions):

Section Header:

- IBM Plex Mono "COMMON QUESTIONS" tracking-[0.4em] var(--gold) 11px
- H2: Cormorant Garamond 600 italic 48px "Answers, simply put."
- 2-column layout desktop: FAQ accordion left (60%), atmospheric
    forest image right (40%), dark overlay, static

FAQ Accordion Component — FAQItem.js:

- Each item: border-bottom 1px var(--border), no top border on first
- Question row:
    Question text: Jost 400 var(--birch) 16px, padding 24px 0
    Right side: thin plus/minus glyph in var(--gold)
      → on open: rotates 45deg (300ms ease), color stays gold
- Answer panel:
    max-height: 0 → auto, transition max-height 400ms ease-out,
    overflow: hidden
    Text: Jost 300 var(--stone) 15px, 1.8 line-height
    Padding-bottom: 24px
    If answer contains a link: style as inline gold, underline on hover
- Open state: question text shifts to var(--birch) from var(--stone)
- Only one open at a time (accordion behavior)

Suggested FAQ Content (cabin/booking platform relevant):
  Q: "How does the booking process work?"
  Q: "What's included with each cabin stay?"
  Q: "Can I bring my pet?"
  Q: "What's the cancellation and refund policy?"
  Q: "Is there a minimum stay requirement?"
  Q: "How do I get cabin access instructions?"
  Q: "Are the cabins suitable year-round?"
  Q: "What if I need to reach someone during my stay?"

"View all FAQs →" gold text-link below accordion

app/faq/page.js (full page):

- 50vh hero: "Frequently Asked Questions" Cormorant italic 72px,
    forest image background, same dark overlay treatment
- Full accordion below, organized in sections:
    "Booking & Payments" / "At the Cabin" / "Policies" / "Your Account"
    Section labels: IBM Plex Mono uppercase var(--gold-muted) 11px,
    separator line var(--border)
- Search bar at top: var(--moss) bg, gold focus border, Jost 400
    placeholder "Search questions..." — filters accordion client-side
    Lucide Search icon left inside input, var(--stone)

SECTION 7 — NEWSLETTER / SEASONAL OFFERS CAPTURE
Placement: app/page.js — just above footer. Also shown as a dismissible banner on first visit.
Visual Concept: Full-width editorial interstitial — no generic "subscribe" box. A whispered invitation, with texture and restraint.
Full-Width Section:

- Background: var(--moss), top/bottom 1px var(--border)
- Layout: centered, max-width 600px, generous vertical padding 100px

  Decorative element:
    A single thin pine branch SVG illustration (inline, hand-drawn quality,
    stroke: var(--gold-muted), opacity 0.3) — absolute positioned,
    overlapping top-left corner of section for texture

  Content:
    Eyebrow: IBM Plex Mono "SEASONAL DISPATCHES" tracking-[0.4em] var(--gold) 11px
    H2: Cormorant Garamond 300 italic 52px var(--birch) centered
      "The wilderness changes. Be the first to know."
    Body: Jost 300 var(--stone) 16px centered max-width 420px
      "Early access to new cabins, seasonal rate windows, and
      curated itineraries — delivered quietly to your inbox."

  Input Row:
    - Horizontal flex: email input + submit button (stacked on mobile)
    - Input: var(--deep) bg, 1px var(--border), Jost 400 var(--birch)
      padding 14px 20px, no border-radius (sharp), width: 320px
      Placeholder: "<your@email.com>" in var(--stone)
      Focus: border-color var(--gold), outline none, gold glow 0 0 0 3px rgba(201,168,76,0.08)
    - Button: "Join the List" — var(--gold) bg, var(--void) text
      Jost 500 uppercase tracking-widest, padding 14px 28px, no radius
      Loading: SpinnerMini inline
      Success state: button text fades to "You're in. ✦" IBM Plex Mono

  Fine Print:
    IBM Plex Mono 10px var(--stone) centered, margin-top 16px
    "No spam. Unsubscribe at any time. We write infrequently and only with intent."

  Privacy note: Lucide Lock 10px inline, same fine print row

SECTION 8 — "WHY WILD OASIS" COMPARISON / VALUE PROPS
Placement: app/page.js (Home, after Stats Bar) + app/about/page.js
Visual Concept: A quiet confidence table — not a feature checklist, but a story told in contrasts. Like comparing a boutique hotel to a chain, visually.
Section Layout: var(--void) bg, padding 120px max-width 1200px centered

Section Header:
  IBM Plex Mono "THE DIFFERENCE" var(--gold) tracking-[0.4em] 11px
  H2: Cormorant Garamond 300 italic 56px "Not just a cabin. A considered escape."

Three-Column Icon Feature Grid:

  Each Feature Block:
    - No card bg — just vertical rhythm, open layout
    - Icon container: 56px square, var(--pine) bg, 1px var(--border),
      Lucide icon centered, var(--gold), 24px
    - Thin gold hairline: 24px width, 1px, below icon, before title
    - Title: Cormorant Garamond 600 24px var(--birch)
    - Body: Jost 300 var(--stone) 15px, 1.8 line-height, max 3 lines

  Feature Blocks (6 total, 3-col × 2-row):
    1. Icon: Mountain — "Remote, Private Locations"
       "No neighbors. No noise. Just the sound of the forest."
    2. Icon: Sparkles — "Fully Curated Interiors"
       "Every piece chosen. Nothing generic, nothing careless."
    3. Icon: ShieldCheck — "Secure, Instant Booking"
       "No back-and-forth. Book in minutes, access sent automatically."
    4. Icon: Leaf — "Low-Impact Stays"
       "Sustainable builds, local materials, minimal footprint."
    5. Icon: Clock — "Flexible Arrival"
       "Self check-in anytime after 3PM. The cabin is yours on arrival."
    6. Icon: HeartHandshake — "Dedicated Remote Support"
       "Something feels off? We respond within the hour, always."

VS Strip (optional, below grid):

- 2-column table: "Wild Oasis" vs "Typical Rental Platforms"
- Left col header: var(--gold) logo mark · right: Jost 300 var(--stone) "Other Platforms"
- Rows: IBM Plex Mono 12px var(--stone)
    "Verified private cabins" ✦ | "Mixed, unverified listings" ✗
    "Direct booking, zero fees" ✦ | "Service fees up to 18%" ✗
    etc.
- ✦ checkmark: var(--gold) · ✗: var(--rust)
- Row bg: alternating var(--deep) / var(--void), 1px border var(--border)

SECTION 9 — CABIN COMPARISON TOOL
Placement: app/cabins/page.js — below CabinList, above footer. Also accessible from individual CabinCards via "Compare" ghost button.
Visual Concept: Structured data in the dark — a comparison panel that slides up from the bottom like a trading terminal sidebar.
Compare Bar (bottom of viewport, collapsed by default):

- Fixed bottom bar: 60px tall, var(--deep) bg, top border 1px var(--gold)
- Left: IBM Plex Mono "COMPARING 0/3 CABINS" var(--gold) 11px
- Center: 3 slots — each 120px wide, var(--moss) bg, 1px dashed var(--border)
    When cabin added: small cabin thumbnail + name appear in slot
    Remove ×: top-right of each slot, var(--stone) hover var(--rust)
- Right: "Compare Now →" gold button — disabled (opacity 0.3) until ≥2 selected

CabinCard "Add to Compare" button:

- Ghost, below existing CTA: "+ Compare" IBM Plex Mono 10px var(--stone)
- When active: "✓ Added" var(--gold)

Comparison Modal/Page (on "Compare Now"):

- Full-screen overlay OR /cabins/compare?ids=... page
- Dark table: cabin images in header row, feature rows below
- Left column labels: IBM Plex Mono uppercase 11px var(--stone)
    "CAPACITY", "PRICE / NIGHT", "BEST FOR", "CANCELLATION",
    "PET FRIENDLY", "FIREPLACE", "MOUNTAIN VIEW", "MIN NIGHTS"
- Data cells: Jost 400 var(--birch) 14px
- Best value highlight: gold column border + "Best Value" IBM Plex Mono
    badge top of column
- Mobile: horizontal scroll, sticky left label column
- "Book This Cabin" button in each column header — var(--gold) bg
- Close: top-right ×, Cormorant italic

SECTION 10 — CABIN WISHLIST / SAVED CABINS
Placement: CabinCard (heart icon), app/account/wishlist/page.js
Visual Concept: Restrained like a gallery save-list. No gamification — just a quiet bookmark.
CabinCard Heart Button:

- Absolute top-right of card image, 12px inset
- 36px circle, var(--deep) 80% opacity, 1px var(--border)
- Lucide Heart icon: outline var(--stone) default
- Saved: filled var(--gold), subtle scale(1.2) bounce animation (150ms)
- Unsave: filled → outline, reverse animation
- State persisted in localStorage client-side (or Supabase if user logged in)
- Tooltip on hover: IBM Plex Mono "Save cabin" / "Saved" var(--stone)

app/account/wishlist/page.js:

- Page heading: IBM Plex Mono "SAVED CABINS" + count badge
- H1: Cormorant Garamond italic "Your Wishlist"
- Same CabinCard grid (3-col) with saved cabins
- Empty state:
    Lucide Bookmark 40px var(--gold-muted) centered
    Cormorant italic "Nothing saved yet"
    Jost 300 var(--stone) "Tap the heart on any cabin to save it here."
    "Browse Cabins →" gold outlined CTA
- SideNavigation updated: add "Wishlist" item with Lucide Heart icon

SideNavigation.js update:

- Add "Wishlist" nav item between "Reservations" and "Guest Profile"
- Badge: small gold pill showing saved count if > 0

SECTION 11 — SEASONAL RATES & PACKAGES PAGE
Placement: app/seasons/page.js (new page) + teaser strip on Home
Visual Concept: A travel editorial calendar — each season has a full-bleed mood image, rate window, and character. Feels like a magazine feature on "The Best Time to Visit."
app/seasons/page.js:

  Hero:
    - Full-viewport, 4-quadrant split image grid (one per season)
      Each quadrant: season photo with color grade
        Winter: cold blue desaturated → CSS filter hue-rotate + sepia blend
        Spring: soft green tint
        Summer: warm, high contrast
        Autumn: amber, gold-leaning
      Each has a dark gradient overlay and season label
      On hover: quadrant expands (flex-grow 2, transition 600ms ease)
    - Centered overlay: Cormorant italic 64px "When Do You Want to Arrive?"
    - Scroll indicator

  Season Cards (below hero, 2×2 grid OR full-width stacked):

    Each Card: var(--deep) bg, full-bleed image top 50%,
      image has dark overlay + CSS color grade per season

    Content below image:
      Season badge: IBM Plex Mono "WINTER · DEC–FEB" var(--gold) pill
      Heading: Cormorant 600 italic 32px var(--birch)
        e.g. "Snowbound Solitude"
      Rate window: IBM Plex Mono var(--gold) "$280 – $420 / night"
      Peak label: if peak → "Peak Season" rust badge
                  if off-peak → "Best Value" gold badge
      Description: Jost 300 var(--stone) 15px, 3 lines
        Atmospheric flavor text about that season at the cabins
      Highlights strip: 3 IBM Plex Mono tags — "Snowfall · Hot Tub · Fireside"
      CTA: "Browse [Season] Availability →" gold outlined button

  Rate Calendar (below season cards):
    - 12-month visual calendar grid
    - Each month cell: color-coded by rate tier
      Low: var(--pine) bg
      Mid: var(--gold-muted) 20% opacity bg
      Peak: var(--gold) 30% opacity bg
    - Legend: IBM Plex Mono 10px var(--stone) "Low · Mid · Peak"
    - Month labels: Cormorant italic var(--birch) 14px
    - Cell hover: shows rate range tooltip IBM Plex Mono

Home Teaser Strip:

- var(--deep), 4-column, each season with icon + IBM Plex Mono rate
- "View Seasonal Rates →" gold link right-aligned

SECTION 12 — CONCIERGE / CONTACT PAGE
Placement: app/contact/page.js (new) + footer link + header nav (subtle)
Visual Concept: A private members club concierge desk — quiet luxury, a single point of contact. No contact form feels cold; this one feels like writing to a trusted curator.
app/contact/page.js:

  Hero:
    40vh, forest photography, dark overlay
    Heading: Cormorant italic 64px "Speak With Us"
    Subtext: Jost 300 var(--fog) 18px
    "We respond personally, within a few hours."

  Two-Panel Layout:

    LEFT (45%): Contact Form
      - Background: var(--deep), 1px var(--border), padding 48px
      - Label style: IBM Plex Mono uppercase 10px var(--stone)
      - Input style: var(--moss) bg, 1px var(--border), Jost 400 var(--birch),
        padding 14px 16px, no radius, gold focus border
      Fields:
        "Full Name" (text)
        "Email Address" (email)
        "Regarding" — custom select styled:
          Options: "A Booking Question" / "Trip Planning Help" /
                   "A Complaint or Issue" / "Partnership Inquiry" / "Other"
        "Your Message" — textarea 6 rows, same dark style
        "Preferred Response" — radio pills: "Email" / "Either"
          Pill radio: Jost 400 12px, var(--deep) bg, gold border on selected

      Submit: Full-width "Send Message" gold primary button
      Success state: inline — Lucide CheckCircle var(--gold) + Cormorant
        italic "Message received. We'll be in touch." — fade-in 300ms

    RIGHT (55%): Concierge Info
      - Background: var(--moss), padding 48px, top: thin gold line accent
      - Heading: Cormorant italic 32px var(--birch) "Your Personal Concierge"
      - Body: Jost 300 var(--stone) 17px 1.9 line-height
        "We're a small team who cares deeply about every stay.
        Whether you need trip advice, have a special request, or
        need anything at all — reach us directly."
      - Response time: IBM Plex Mono "⊙ Typically responds in < 4 hours" var(--gold)
      - Direct email: IBM Plex Mono var(--gold) "stays@wildoasis.com"
        (clicking copies to clipboard — subtle "Copied!" tooltip)
      - Hours: IBM Plex Mono var(--stone) "Mon–Sun · 8AM to 10PM PT"
      - Divider: 1px var(--border)
      - "Frequently Asked" shortcut: 3 FAQ links in Jost 300 var(--stone),
        gold → on hover, arrow icon

  Footer of page:
    IBM Plex Mono 11px var(--stone) centered
    "Wild Oasis is managed directly by our founding team.
    No bots. No outsourced support."

GLOBAL ADDITIONS
Navigation update — Header.js:
Add "Seasons" and "FAQ" to nav. On desktop these fit quietly; on mobile they appear in the overlay.
Footer update — app/layout.js:
Add to footer link columns:
  Column "Explore": Cabins · About · Seasonal Rates
  Column "Support": FAQ · Contact · Cancellation Policy
  Column "Account": My Reservations · Wishlist · Profile · Sign Out
  Legal row: IBM Plex Mono 10px var(--stone)
    "Privacy Policy · Terms of Service · Cookie Settings"
    These are non-functional display links — no new pages required unless desired
app/sitemap visual (Easter Egg):
/sitemap.js — a hidden ASCII-art style dark page showing all routes
in IBM Plex Mono with gold connecting lines — a developer-facing gift

MOTION ADDITIONS (new keyframes for new sections)
css/*Review card entrance*/
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}

/*Wishlist heart save*/
@keyframes heartBounce {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.3); }
  70%  { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/*Season card hover expand*/
@keyframes seasonExpand {
  from { flex-grow: 1; }
  to   { flex-grow: 2; }
}

/*Compare bar slide up*/
@keyframes slideUp {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}

/*Newsletter success*/
@keyframes successFadeSwap {
  0%   { opacity: 1; }
  40%  { opacity: 0; transform: translateY(-8px); }
  60%  { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}

Total new routes added: /faq, /seasons, /contact, /account/wishlist, /cabins/compare
Total new components: FAQItem.js, ReviewCard.js, GalleryGrid.js, Lightbox.js, QuickAvailabilityBar.js, ActivityCard.js, PolicyStrip.js, CompareBar.js, WishlistButton.js, NewsletterForm.js, SeasonCard.js, ContactForm.js
Preserve: All existing Supabase logic, server actions, auth, and component boundaries — these additions are purely visual/UI layers using existing data patterns.
