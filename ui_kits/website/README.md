# CRTIC Website UI Kit

Interactive click-through prototype of the CRTIC institutional website.

## Pages

- **Hub / Home** — Orange hero, technologies grid, residency phases, contact CTA
- **Residencias** — Dark hero, application section, past projects
- **Tecnologías** — Black hero, full technology grid

## Components

| File | Export | Description |
|---|---|---|
| `Header.jsx` | `Header` | Sticky nav header, 3 themes: orange / dark / white |
| `Hero.jsx` | `Hero` | Full-bleed hero with Bebas+Playfair mix, 3 variants |
| `Section.jsx` | `Section`, `TechCard`, `QuoteBlock` | Content section blocks; alternating bg variants |
| `Footer.jsx` | `Footer` | Orange footer with logo, nav links, email CTA |

## Design notes

- Color rhythm: Orange → Black → White → Ink — never two same bg colors adjacent
- Display numbers (01, 02…) in Bebas Neue orange = section anchors / visual icons
- Headline structure: Bebas Neue caps + Playfair italic inline = brand tension
- No shadow depth — section color contrast IS the elevation system
- CTA buttons: border-radius 100px always (pill shape)
- Body copy max-width: 640px

## Font note

Halvar Breit (proprietary) is substituted by **Barlow Condensed** throughout.
Request font files from client to achieve exact brand fidelity.
