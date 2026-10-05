---
name: Con Giovanni ODV
description: The printed programma di sala of the Premio Giovanni Capanna, one ink on white card.
colors:
  ink: "#020e7e"
  paper: "#f2f3f1"
  ink-2: "#3e479b"
  paper-2: "#b6bad4"
  rule: "#aaaece"
  rule-ink: "#565ea6"
typography:
  cover:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(3.75rem, 2rem + 8.4vw, 9.5rem)"
    fontWeight: 850
    lineHeight: 0.84
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 62"
  numeral:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(7rem, 4rem + 14vw, 17rem)"
    fontWeight: 850
    lineHeight: 0.74
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 62"
  display:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.6vw, 5.75rem)"
    fontWeight: 850
    lineHeight: 0.88
    fontVariation: "'wdth' 66"
  headline:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2.125rem)"
    fontWeight: 750
    lineHeight: 1.05
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
    fontVariation: "'wdth' 75"
  lead:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'wdth' 96"
  body:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "0.8125em"
    fontWeight: 650
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 90"
  typed:
    fontFamily: "Courier Prime, Courier New, Courier, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0"
rounded:
  none: "0px"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "clamp(3.5rem, 7vw, 6rem)"
  space-6: "clamp(5rem, 11vw, 9rem)"
  gutter: "clamp(1.25rem, 4.5vw, 3.5rem)"
  page: "84rem"
  measure: "36rem"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-on-ink:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
  button-on-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem"
    width: "min(100%, 21rem)"
  running-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.typed}"
  folio:
    textColor: "{colors.ink-2}"
    typography: "{typography.typed}"
  giving-box:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

# Design System: Con Giovanni ODV

## Overview

**Creative North Star: "The Programma di Sala"**

The site is the printed programme of the Premio evening: a one-ink job in Giovanni's ultramarine on cool, uncoated white card, in the manner of Italian modernist theatre programmes. Covers and inserts are drenched in ink; interior pages are card printed in ink. There is no second colour, no gradient, no tint that a single printing plate could not make by screening.

Type does the work. Archivo, a variable-width grotesque, is squeezed to its condensed, heavy end for titles and opened to normal width for reading; Courier Prime is the stage manager's typewriter for notes, captions, credits and page furniture, echoing the typewriter ring of the logo. Structure comes from print devices, not from boxes: hairline rules, heavier opening rules, dotted leaders, a typed running head at the top of each page and a folio at its foot.

The page sequence reads like the object in hand: ink cover, card pages, a full-bleed duotone plate, an ink insert, card back pages, an ink back cover with the colophon. The one tactile moment is the paper ticket on the cover, which tears along its perforation when used.

**Key Characteristics:**
- Two materials only: ultramarine ink and white card; every photograph a one-ink duotone.
- Condensed heavy uppercase Archivo for titles, normal-width Archivo for text, Courier Prime for typed notes.
- Square corners everywhere; rules, leaders and running heads instead of cards.
- Ink and card surfaces alternate like the spreads of a programme.
- Display type runs very large on covers only; interior headings stay at or under 6rem.

## Colors

One ink on one card: every value is either the ink, the card, or a screen of one over the other.

### Primary
- **Giovanni's Ultramarine** (ink): the only ink. Text and rules on card; the full background of covers, the insert and the back cover. Taken from the logo ring; it is the identity.

### Neutral
- **Uncoated White Card** (paper): the page surface, and the text colour on ink surfaces. Cool, faintly grey, never cream.
- **Ink Screened 75%** (ink-2): secondary text on card: typed notes, captions, credits, running head, folio (7.3:1 on card).
- **Card Screened over Ink** (paper-2): secondary text on ink surfaces (8:1 on ink).
- **Ink at 30%** (rule): hairlines between rows on card; also the placeholder fill behind loading photos.
- **Card at 35% over Ink** (rule-ink): hairlines between rows on ink, and under the masthead.

### Named Rules
**The One Ink Rule.** Nothing on the site may need a second plate. New colours are forbidden; a new value is only admissible as a screen of ink on card or card on ink, and must hold at least 4.5:1 for text.

**The Drenched Cover Rule.** Covers, inserts and the back cover are full ink surfaces with card-coloured type; interior pages are card with ink type. Selection colour inverts with the surface.

## Typography

**Display Font:** Archivo Variable (with Arial Narrow, Arial), width axis 62–100%
**Body Font:** Archivo Variable at 100% width
**Label/Mono Font:** Courier Prime (with Courier New, Courier)

**Character:** A condensed, heavy grotesque shouts the titles like a theatre bill; the same family at normal width reads quietly; the typewriter face annotates, as if typed onto the programme by the stage manager.

### Hierarchy
- **Cover** (850, 62% width, up to 9.5rem, line-height 0.84, uppercase): the Premio title on the home cover only.
- **Numeral** (850, 62% width, up to 17rem, line-height 0.74): the edition's Roman numeral on edition covers only. Smaller numerals of the same cut (up to 5rem) number the editions list.
- **Display** (850, 64–66% width, up to 5.75rem; the dedication heading up to 6rem; line-height 0.88, uppercase): section titles on pages and inserts.
- **Headline** (750, 78–80% width, 1.5–2.5rem, line-height 1.05): performer names in the running order, winner names, the cover date line.
- **Title** (800, 72–75% width, 1.5rem, uppercase for headings): ticket action, giving-box heading, giving-method terms, edition browse links.
- **Lead** (400–500, 94–96% width, 1.25–1.75rem, line-height 1.35–1.45): opening paragraph of a page, max 36rem.
- **Body** (400, 100% width, 1.0625–1.1875rem, line-height 1.6): running text, max measure 36rem.
- **Label** (650, 90% width, 0.8125em, 0.04em tracking, uppercase): composer names above a work in the running order.
- **Typed** (Courier Prime 400, 0.8125–0.9375rem, line-height 1.45): notes, captions, tempo markings, credits, disciplines, running head, folio, colophon.
- Titles of works are set in Archivo italic.

### Named Rules
**The Display Ceiling Rule.** Interior headings stay at or under 6rem. Only the two cover elements may exceed it: the home cover title (9.5rem) and the edition numeral (17rem). This override belongs to the programme-cover world and does not extend to any other element.

**The Typewriter Rule.** Courier Prime is for annotation only (notes, captions, credits, page furniture). It never sets a heading, a button or body text.

## Layout

A single centred page (max 84rem) with a fluid gutter (1.25–3.5rem). Interior pages use a two-column spread, 5fr text column against 7fr content column, with a 2–6rem gap; it collapses to one column below 60rem. Reading text is held to a 36rem measure.

Vertical rhythm uses the six spacing steps; the two fluid steps (space-5, space-6) separate page furniture from content and major sections. Every printed page opens with the running head (followed by space-5) and closes with the folio (preceded by space-5).

The home cover fills the first viewport (up to 58rem tall): masthead top, title left at about 60% with the logo roundel right, a band under a 1.5px card rule at the bottom with date, venue, typed note and the ticket. The dedication album is a 12-column photo grid (6 columns below 60rem) with staggered spans and a pull line set in uppercase condensed type. The plate is full-bleed, up to 88svh tall, 4:3 below 60rem. Breakpoints in use: 60rem, 40rem, plus 64rem/34rem on the back cover and 30rem on the masthead.

### Named Rules
**The Page Furniture Rule.** Each card page and the ink insert carries a typed running head ("Programma di sala" left, edition and Premio name right) and a centred folio ("— n —"). The running head content is fixed; it never becomes a per-section label.

## Elevation & Depth

The system is flat print. Depth comes from the alternation of ink and card surfaces and from the full-bleed plate, not from shadows. The single exception is the cover ticket, which sits on the ink like a real card stub and casts one soft paper shadow.

### Shadow Vocabulary
- **Paper ticket** (`filter: drop-shadow(0 0.6rem 1.2rem rgb(0 0 20 / 0.35))`): the ticket only, because it is a separate piece of card resting on the cover.

### Named Rules
**The Flat Print Rule.** Surfaces, buttons, photos and boxes cast no shadow. The ticket's drop shadow is the only one, and it is soft and diffuse.

## Shapes

Square corners throughout (0 radius); the only curves are the ticket's half-moon notches where the perforation meets its edges, and the logo roundel. Borders are print rules: 1.5px opening rules in full ink or card at the top of lists, boxes and cover bands; 1px hairlines (rule / rule-ink) between rows; 2px dotted lines for leaders and the ticket perforation.

## Components

### Buttons
Ruled boxes, ink on card or card on ink.
- **Shape:** square (0), 1.5px border in the current colour, min height 3rem, padding 0 1.25rem.
- **Type:** Archivo 650 at 90% width; optional 1.1em stroke SVG icon before the label.
- **Hover:** fills solid with the current colour and inverts the text (0.2s, ease-out). On ink surfaces the fill is card.
- **Done state:** after a successful action (e.g. "Copia IBAN") the button stays filled.
- **Focus:** 2px outline in the current colour, 4px offset.

### Links
Underlined in the current colour (1px, offset 0.22em), thickening to 2px on hover; on ink the underline is paper-2 until hover. Navigation links in the masthead are not underlined at rest; a 1.5px rule draws in from the left on hover.

### Navigation (Masthead)
Typed "Con Giovanni ODV presenta" left (the "presenta" in paper-2, hidden below 30rem), section links right in Archivo 600 at 88% width; 1px rule-ink hairline below. Lives on the ink cover of every page. Touch targets at least 2.75rem.

### Ticket ("Segna la data")
The cover's primary action: a card ticket that downloads the evening's calendar file. A body (action in condensed 800 at 1.75rem, date in tabular figures, typed note in ink-2) and a stub carrying the edition numeral (850, 62% width, 2.5rem), separated by a 2px dotted perforation with half-moon notches. On hover the stub lifts slightly; on activation it tears away along the perforation (shifts and rotates 9deg, perforation disappears) and stays torn while the typed note changes to "file scaricato". Reduced motion jumps straight to the torn state.

### Running Order
The programme of the evening: a list opened by a 1.5px ink rule, each act separated by hairlines. Performer in headline type; composer in the uppercase label style; work title in italic, joined by a 2px dotted leader (50–55% opacity) to the typed tempo or detail in ink-2; typed credit below. Below 40rem the leader drops and the detail wraps beneath.

### Editions List
On the ink insert: rows under a 1.5px card opening rule with rule-ink hairlines; condensed Roman numeral, date with typed time, winners with typed discipline, and an arrow that slides right on hover while the row takes a faint card wash.

### Photographs
Duotones in ink on card, in WebP at two widths, captioned in typed ink-2 below. A full-bleed plate ("tavola") sits between the dedication pages and the ink insert, captioned in typed card-coloured text over its foot.
- **Open item:** the album captions are provisional until the family confirms them; do not add identifying detail beyond what is confirmed.

### Back Cover
An ink footer on every page: logo, association name in condensed display type, contacts; the giving box (1.5px card border, square, 1.5rem padding, uppercase heading, IBAN in 650 at 85% width with copy button); a typed colophon across the full width under a rule-ink hairline, stating the ink, paper, typefaces and photo credit.
- **Open item:** the logo source is only 500px (shipped as logo-300 and logo-500 WebP). The cover renders it up to 27rem, so it is already upscaled on high-density screens; do not show it any larger until a bigger master is supplied.

## Do's and Don'ts

### Do:
- **Do** keep every colour to ink, card, or one of the four screens (ink-2, paper-2, rule, rule-ink).
- **Do** convert every photograph to a one-ink duotone (ink #020e7e on card #f2f3f1) before it ships, and note its provenance in public/foto/README.txt.
- **Do** set titles in Archivo at 62–80% width and 750–850 weight, and text at 100% width.
- **Do** use Courier Prime for notes, captions, credits, running head, folio and colophon.
- **Do** separate content with rules and dotted leaders: 1.5px opening rules, 1px hairlines between rows.
- **Do** open each printed page with the running head and close it with the folio.
- **Do** keep interior headings at or under 6rem; reserve larger sizes for the home cover title and the edition numeral.
- **Do** keep touch targets at least 2.75rem tall.

### Don't:
- **Don't** introduce a second hue, a gradient, or a cream or warm paper.
- **Don't** round corners or put content in shadowed cards; the ticket's paper shadow is the only shadow.
- **Don't** show a full-colour photograph; the logo roundel is the one full-colour image, because it is the identity mark.
- **Don't** use Courier Prime for headings, buttons or body text.
- **Don't** turn the running head into a per-section label or put small typed labels above headings.
