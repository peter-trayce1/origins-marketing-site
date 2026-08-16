# Handoff: Known Objects marketing site tidy-up

## Overview

The homepage of `origins-marketing-site` was redesigned at some point onto a serif and cobalt design system defined in `src/app/globals.css`. The inner pages were never updated and still run an older visual language. This handoff covers two things:

1. Bringing every inner page onto the design system the homepage already uses.
2. Cutting text volume across the site without losing information.

The homepage itself also gets a set of structural changes and a trim.

## About the design files

The files in `designs/` are **design references written in HTML**. They are prototypes showing intended layout, spacing, colour and behaviour. They are not production code and should not be copied into the app.

Your task is to recreate them inside the existing Next.js 16 / React / Tailwind 4 codebase, using its established patterns: `src/app/<route>/page.tsx` route files, Tailwind utility classes, `lucide-react` icons, `framer-motion` for scroll animation, and the CSS custom properties and utility classes already defined in `src/app/globals.css`.

Each design file opens directly in a browser. `support.js` is the runtime that renders them and is included only so the files display. Ignore it.

## Fidelity

**High fidelity.** Colours, type sizes, spacing and layout are final and should be matched. Every value in the designs comes from `globals.css` tokens or from the homepage's existing type scale, so most of it maps onto utility classes that already exist in the codebase.

Two deliberate exceptions where you should follow the codebase, not the design files:

- The designs use inline `style` attributes throughout. Use Tailwind classes.
- The designs have no scroll animation. Reuse the existing `fadeUp` / `staggerContainer` / `staggerItem` helpers from `src/app/page.tsx` so the new pages animate like the current ones.

## Scope of changes

| Design file | Replaces | Action |
| --- | --- | --- |
| `Homepage tidied.dc.html` | `src/app/page.tsx` | Restructure and trim |
| `Product.dc.html` | `src/app/platform/page.tsx` | Restyle and trim |
| `Solutions.dc.html` | `src/app/solutions/page.tsx` | Restyle and trim |
| `Customer experience.dc.html` | `src/app/customer-experience/page.tsx` | Restyle and trim |
| `Compliance.dc.html` | `src/app/compliance/page.tsx` | Restyle and trim |
| `About.dc.html` | `src/app/about/page.tsx` | Restyle and trim |
| none | `src/app/resources/` | **Delete the route** |

Not covered by this handoff and left alone: `src/app/pricing/`, `src/app/book-demo/`, `src/app/login/`.

## Design tokens

All of these already exist in `src/app/globals.css`. Use the CSS variables or Tailwind arbitrary values consistently; do not introduce new colours.

| Token | Value | Use |
| --- | --- | --- |
| `--ko-black` | `#111111` | Body text, primary buttons, dark sections |
| `--ko-white` | `#ffffff` | Page background, alternating sections |
| `--ko-warm-gray` | `#F6F4F2` | Alternating section background |
| `--ko-border` | `#E6E6E2` | All hairlines, card borders, grid gaps |
| `--ko-muted` | `#72726D` | Body copy, labels, secondary text |
| `--ko-cobalt` | `#164ED8` | Links, tick marks, step numbers, active states |
| `--ko-cobalt-pale` | `#EAF1FF` | Secondary button hover |
| (no token) | `#C4C4C0` | Disabled and de-emphasised text, third timeline marker |

Typography:

- Serif: Instrument Serif, weight 400 only, applied via the existing `.font-serif` utility. Used for all `h1` and `h2`, occasional large `h3`. Frequently ends a headline on an italic word.
- Sans: Inter. Weights 300 (large numerals), 400 (body), 500 (labels, buttons, nav), 600 (small headings).
- Letter-spacing on serif headings: `-0.02em`.

Type scale used across the new pages:

| Role | Size | Line height |
| --- | --- | --- |
| Homepage h1 | 72px | 1.0 |
| Inner page h1 | 64px | 1.05 |
| Section h2 | 48px | 1.12 |
| Sub-section h2 | 44px | 1.12 |
| Card h3 serif | 26–34px | 1.15–1.2 |
| Card h3 sans | 14–16px, weight 600 | — |
| Lead paragraph | 18px | 1.65 |
| Body paragraph | 16px | 1.7–1.75 |
| Small body, bullets | 13–14px | 1.65–1.75 |
| Eyebrow | 11px, weight 500, uppercase, `0.12em` tracking | — |

Spacing:

- Container: `max-w-7xl` (1280px) with `px-6`.
- Section padding: 128px vertical on the homepage, 112px on inner pages.
- Hairline grids: `gap-px` over an `#E6E6E2` background, cells filled with the section's own background colour. This is the site's dominant card pattern. No shadows, no rounded corners.
- Border radius: 4px on buttons only. Nothing else is rounded.

Buttons, all 4px radius:

- Primary: `#111111` background, white text, 13px/500, hover `#2a2a2a`. Height 40px in the nav, 44px in page body.
- Inverted primary on dark sections: white background, `#111111` text.
- Secondary: white background, `#E6E6E2` border, hover background `#EAF1FF` with `#c5d6f5` border.
- Text link: cobalt, 14px/500, 5px gap before a 13px `ArrowRight`.

## Shared navigation

Every page uses the same header. Update `src/components/layout/Nav.tsx`:

- Remove the **Resources** link.
- Add **Compliance** and **Customers** (pointing at `/customer-experience`).
- Final order: Product, Solutions, Customers, Compliance, Pricing, About.
- Everything else about the nav is unchanged: sticky, white, 56px tall, `#E6E6E2` bottom border, 13px/500 links in `#72726D` going to `#111111` on hover, `Logo` at 26px, "Log in" text link, "Book a demo" primary button.

The current page's nav link is `#111111` rather than `#72726D`.

## Page specifications

### Homepage — `src/app/page.tsx`

Keep all existing sections and their order except where noted. Four structural changes and one content change.

**1. Trust strip becomes a benefits band.** The six brand names are invented and the product has not launched, so they are removed along with the "Trusted by forward-thinking brands" heading. The marquee stays, running the same 32s linear animation with pause on hover, but now scrolls seven benefit phrases separated by 3px `#C4C4C0` dots:

Live in minutes · No consultants required · ESPR-ready data structure · Evidence-backed claims · Accessible and easy pricing · QR codes that never change · No app for customers to download

Phrases are 13px/500 in `#72726D`, 28px horizontal padding each. The list is duplicated once for the seamless loop. Band padding is 18px vertical.

**2. Passport builder becomes interactive.** Replace the four-card grid with a two-column layout, `380px 1fr` at 56px gap (the design uses `340px 1fr`; either reads correctly).

Left column is a vertical list of the four steps as buttons. Each carries a 2px left border and 24px left padding, 20px vertical padding. Active step: border and number `#164ED8`, title `#111111`, body at full opacity. Inactive: border `#E6E6E2`, number `#C4C4C0`, title `#72726D`, body at 55% opacity. Below the list, 40px down, the "Start building free" primary button and the "No credit card required" note.

Right column shows one screenshot at a time, swapping with the selected step, no card or border around it, `mix-blend-multiply` against the `#F6F4F2` section, `min-height: 520px`.

Step content is unchanged from the current `PassportSteps` array, except step 3's body drops "manufacturing" to read "Add suppliers and facilities, or send requests for suppliers to complete directly." Step 4 uses `/screenshot-passports-list.png` rather than repeating the step 1 image.

**3. Merge supplier collection and bulk upload.** `SupplierCollection` and `BulkUpload` become one section on white, eyebrow "Supply chain & scale", h2 "Get the data in *without the spreadsheets.*" with the italic on the second clause. Below it a two-column hairline grid, each cell 40px padded containing a 28px-padded `#F6F4F2` image well, then the original h3, paragraph and bullets. Both bullet lists cut from four items to three. The left cell keeps its "Start for free" cobalt link.

**4. Compliance becomes a timeline.** Replace the three-cell hairline grid with three columns at 48px gap sitting under a single 1px `#111111` rule. Each column has a 7px dot straddling the rule and a 40px serif year. Dots and years are colour-coded by status: 2026 `#111111`, 2027 `#164ED8`, 2028–30 `#C4C4C0`. Milestone copy is unchanged. Section moves to the `#F6F4F2` background.

**5. Cut the Solutions section.** `SolutionsGrid` (Prepare / Connect / Engage) is removed from the homepage. The content survives as the `/solutions` page.

**6. Pricing gains Enterprise.** Already added in the repo. The design shows three equal columns at 16px gap across the full container, with no `max-w-3xl` constraint. Enterprise is a white card matching Essentials, price "Custom" with no period, CTA "Talk to us". Its feature list is aligned to `PricingToggle.tsx`: Custom publication allowance, Everything in Growth, ERP & PLM integration, API access, Supplier portal, Dedicated success manager, White-label options.

**7. Hero.** Layout unchanged, but the grid is `items-start` with the image column pushed down 48px so the top of the image lines up with the "Make every" headline rather than the eyebrow. Container top padding 80px, gap 48px. Also swap the two secondary links: "See how it works" becomes `#111111` text with a hover fade, and "See example passport (best viewed on mobile)" becomes cobalt.

**8. Copy trims.** Intro paragraphs shortened, bullet lists cut from four items to three where the fourth restated the third, FAQ answers tightened. See the design file for exact strings.

### Product — `src/app/platform/page.tsx`

Currently five full feature sections, each with a hand-built fake UI mockup, plus a compliance block and a six-card grid. Reduced to three feature sections, a six-card grid and a CTA.

**Delete all the hand-built visual components**: `BuilderVisual`, `QRVisual`, `AIVisual`, `AnalyticsVisual`, `IntegrationsVisual`. They contain invented data that reads badly pre-launch: a "12,841 scans, up 24% this month" chart, named customer products, per-country scan breakdowns, and emoji flags. Replace with the real product screenshots already in `/public`.

**Delete the compliance section.** It duplicates `/compliance`.

Sections, alternating white and `#F6F4F2`:

1. **Hero.** Eyebrow "Product", h1 "Everything you need to build verified passports *at scale.*", lead paragraph, primary button plus "Book a demo" text link. 96px top padding.
2. **Passport builder.** Two columns `1fr 1.15fr` at 72px. Copy left, `/screenshot-passport-builder.png` right with `mix-blend-multiply`. Three bullets.
3. **QR codes.** Two equal columns. Left is a `#F6F4F2` panel, 64px padded, holding `/qr-example.png` at 160px inside a white bordered box, with PNG / SVG / PDF chips beneath. Copy right, three bullets.
4. **Integrations.** Copy left with an "Read the API docs" cobalt link, a 2×3 hairline grid right listing Shopify, GOTS, EcoVadis, REST API as available and Klaviyo, WooCommerce in `#C4C4C0` marked "Coming soon".
5. **Also included.** Six-cell hairline grid, each with a cobalt lucide icon at 20px, a 15px/600 title and a 13px body. Covers AI passport builder, Scan analytics, Embeddable widgets, Passport templates, Bulk import, Team workspace. Scan analytics and the AI generator move here from their former full sections.
6. **CTA.** `#111111`, "Ready to build your first *passport?*"

### Solutions — `src/app/solutions/page.tsx`

Keeps all five audience segments. Two significant cuts.

**Remove all five customer quotes.** They are attributed to unnamed roles at unnamed companies and are not real. The quote card column goes with them.

**Each segment becomes one row rather than a full-height alternating block.** The five sit in a single vertical hairline stack on `#F6F4F2`, each 48px padded, split `1fr 1.2fr` at 64px gap. Left holds the eyebrow and a 34px serif headline. Right holds the paragraph and a two-column bullet grid. Feature lists cut from five or six items to four. The per-segment "Get started free" links are removed; a single CTA closes the page.

Headlines are shortened where they ran long, for example "EU DPP compliance infrastructure for large teams" becomes "Passport infrastructure for large teams."

The closing compliance callout loses its centred layout, pill badge and amber dot, becoming a left-aligned block on white with a primary button and a cobalt link through to `/compliance`.

### Customer experience — `src/app/customer-experience/page.tsx`

Currently four full-height sections that each repeat `/screenshot-certifications-mobile.png` with only the alt text changing, plus a two-card gallery and a verification section.

**Stop repeating the phone screenshot.** It appears once, in the hero.

**Delete the two-card screenshot gallery.** Both images are used elsewhere.

Sections:

1. **Hero.** Two columns `1.2fr 1fr`. Copy left, phone screenshot right at 280px. Drops the pill badge. h1 "Turn every product into a customer *experience.*"
2. **What a passport carries.** The four themes as a 2×2 hairline grid on `#F6F4F2`, each cell 44px padded: cobalt eyebrow, 32px serif h3, one paragraph, three bullets. Each theme loses its second "detail" paragraph and one bullet.
3. **Verification.** Two equal columns, copy left with three bullets, `/screenshot-impact-builder.png` right. Condensed from two paragraphs to one. The "AUTHENTIC badge" wording is softened to "verification badge" since the phrase does not appear elsewhere on the site.
4. **CTA.** `#111111`, "Every product deserves a *story.*"

### Compliance — `src/app/compliance/page.tsx`

The most information-dense page and the one that changes least, because the content is reference material rather than marketing copy. Restyled throughout, with three changes.

1. **Hero** drops the amber pill badge. h1 "The simplest path to ESPR *readiness.*"
2. **What is ESPR** keeps its three paragraphs and the six-row specification table. The table loses its card treatment and becomes plain rows divided by `#E6E6E2` hairlines, label left in `#72726D` 13px, value right in `#111111` 14px/500.
3. **Timeline** becomes four columns under a single `#111111` rule with dots and serif years, matching the homepage treatment. 2026 black, 2027 cobalt, 2028 and 2030 `#C4C4C0`. The caveat about delegated acts is retained at 12px.
4. **What brands need** keeps all eight requirements but drops the individual white cards, becoming a plain two-column tick list.
5. **How Known Objects helps** keeps all six items in a hairline grid, tick badges removed.
6. **FAQ** keeps all five entries and becomes an accordion matching the homepage: plus and minus glyph, one open at a time. Currently always-expanded.
7. **CTA** unchanged in content.

### About — `src/app/about/page.tsx`

Restyled and lightly trimmed. Structure holds.

1. **Hero.** Eyebrow and h1 only. "Every product should have a trusted digital *identity.*"
2. **Mission.** Two columns `1.2fr 1fr`. Left has a 32px serif lead paragraph and two body paragraphs. Right is a bordered white "What we do" card listing six capabilities with cobalt ticks.
3. **Values.** Three-cell hairline grid. Titles become 26px italic serif rather than bold sans.
4. **Why now.** Two columns `1fr 1.4fr`, heading left, two paragraphs right. Condensed.
5. **Team.** Unchanged in substance, secondary button.

## Copy rules applied

Worth preserving if you edit further:

- No em dashes anywhere. Existing ones were rewritten into separate sentences or commas.
- No "not just X, but Y" constructions. Several were rewritten.
- Product name is "Known Objects" in body copy. The logo wordmark carries the trailing full stop; body copy does not need it.
- British spelling throughout: customisable, organisation, labelled, prioritise.
- Placeholder and unverifiable claims removed: invented brand names, invented customer quotes, invented analytics figures.

## Assets

All already in `/public`, all referenced by the designs:

`hero-jacket-full-white.png`, `known_objects_logo_primary_fixed_web.png`, `qr-example.png`, `screenshot-passport-builder.png`, `screenshot-impact-builder.png`, `screenshot-supply-chain-builder.png`, `screenshot-supplier-request.png`, `screenshot-bulk-import.png`, `screenshot-certifications-mobile.png`, `screenshot-passports-list.png`

Screenshots sit on `#F6F4F2` with `mix-blend-multiply` so they read as flat against the page. Keep that treatment.

Unused after this work and safe to remove: `logo-dark.png` (an older Origins mark), `hero-jacket white background.png` and `hero-jacket-white.png` (duplicates of each other at 1.8MB apiece), `product-preview.png - 2.png`, `turtleneck.webp`, `Sustainability screenshot.png`.

## Existing issues to fix alongside

These are pre-existing and not caused by the redesign, but they are cheap to fix in the same pass.

**Consolidate the button system.** `src/components/ui/Button.tsx` is a parallel implementation nothing on the homepage uses. It has a different black (`#0A0A0A` against `#111111`), a different border (`#E8E8E6` against `#E6E6E2`) and `rounded-lg` against the 4px radius everywhere else. Only `about/page.tsx` and `resources/page.tsx` import it, and the latter is being deleted. Either bring it in line with the `.btn-primary` / `.btn-secondary` utilities and adopt it everywhere, or delete it and use the utilities. The homepage currently hand-rolls buttons with one-off overrides such as `btn-primary bg-white text-[#111111]`, and the pricing CTAs are fully inline, so the same button exists in three forms.

**Fix the footer's dead links.** `src/components/layout/Footer.tsx` links to `/privacy`, `/terms` and `/cookies`. None of those routes exist in `src/app`. They 404 today.

**Use the tokens.** Colours are hardcoded as Tailwind arbitrary values throughout, `text-[#72726D]` and similar, rather than referencing the CSS variables that already exist. Worth normalising as you touch each file.

**De-duplicate the pricing data.** Plans are defined twice, in `src/app/page.tsx` and `src/app/pricing/PricingToggle.tsx`, and they had drifted: the homepage Enterprise tier was missing API access, White-label options and Custom onboarding. The designs align the homepage to `PricingToggle.tsx`. Better still, lift the plan data into a shared module both import.

**Split `page.tsx`.** At 34KB with twelve section components inline it is the largest file in the app. Extracting sections into `src/components/home/` would make the restructure easier to review.

## Files in this bundle

```
designs/
  Homepage tidied.dc.html
  Product.dc.html
  Solutions.dc.html
  Customer experience.dc.html
  Compliance.dc.html
  About.dc.html
  support.js          runtime only, ignore
```

Open any design file directly in a browser to see it rendered. The passport builder steps on the homepage and the FAQ accordions on the homepage and compliance page are interactive.
