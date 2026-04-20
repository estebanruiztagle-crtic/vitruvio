# CRTIC Design System

**CRTIC — Centro para la Revolución Tecnológica en Industrias Creativas**  
Art Thinking + Tecnocreatividad + Innovación

CRTIC is a Chilean non-profit foundation (sin fines de lucro) that operates at the intersection of art, technology, and creative industry R&D. It is not a startup, not a government bureaucracy — it is a cultural infrastructure institution with attitude. Its flagship positioning: *"La tecnología es compartida. El arte es del artista."*

---

## Sources

The following materials were provided to build this design system:

- `uploads/CRTIC_CNC_brand_guide.html` — Visual identity guide (colors, typography, layout principles, motifs)
- `uploads/CRTIC_voice_guide.html` — Manual de Voz v1.0 (brand voice, syntax rules, vocabulary)
- `uploads/crtic_style_refe.pdf` — Style reference PDF (provided but requires manual review)
- `uploads/logo crtic.png` — Circle logo (white on orange)
- `uploads/Logo naranjo MR.png` / `.jpg` — Orange standalone logo
- `uploads/Logo blanco MR.png` — White standalone logo
- `uploads/Logo negro MR.png` — Black standalone logo
- `uploads/asset_*.png` — Graphic motif assets (semicircles, circles, flor, etc.)
- `uploads/asset_video_tecnologias.mp4` — Brand video

---

## CONTENT FUNDAMENTALS

### Voice: Authoridad sin solemnidad

CRTIC speaks like a vanguard, not a bureaucracy. The brand tension is deliberate: *public institution + avant-garde attitude*. Never fully one, always both.

### Core Principles

1. **Declare, don't explain.** "Somos dos instituciones con una misión cultural." — not "somos un espacio donde exploramos sinergias..."
2. **Anticipate the objection.** Use square brackets to preempt doubt: `[NO SOMOS UNA EMPRESA BUSCANDO SU PRÓXIMO ÉXITO DE VENTAS]`
3. **Parity with the reader.** Use technical terms without defining them (MVP, Plug & Play, User Testing). The reader is a peer, not a student.
4. **Contained epic.** No adjective chains. One qualifying adjective max per paragraph. Data and verbs do the emotional work.

### Tone

- Direct. Institutional but never stiff.
- Declarative: sentences close, they don't open possibilities.
- Rhythmic: short sentence. Short follow-up that hits.
- Technical English mixed into Spanish is intentional and correct.

### Casing

- **ALL CAPS** in display headlines (Bebas Neue / Halvar Breit).
- **Title Case or sentence case** for body copy.
- *Lowercase italic* reserved exclusively for Playfair Display serif contrast.
- No emoji. Never.

### Syntax Patterns

| Pattern | Example |
|---|---|
| Frase. Remate corto. | "La tecnología es compartida. El arte es del artista." |
| Infinitive list | "Prototipar. Validar. Escalar." |
| Number + action + date | "Hito 12 de abril: estrenar la experiencia." |
| [Bracket negation] + affirmation | "[NO SOMOS CONSULTORES] Construimos infraestructura." |
| Technical list, no conjunctions | "MOCAP. IA generativa. Projection mapping." |

### Brand Vocabulary

**USE:** Transferencia · Prototipo · Exportar · Validar · Escalar · Hito · Autosustentable · Iteración · Arquitectura · Portabilidad · Residencia · Inmersivo · Gobernanza · Co-creador

**NEVER USE:** Sinergias · Ecosistema · Potenciar · Visibilizar · Articular · Transversal · Generar valor · Robusto · Holístico · Disruptivo · Soluciones integrales

---

## VISUAL FOUNDATIONS

### Colors

| Token | Hex | Use |
|---|---|---|
| `--orange` | `#FE440D` | Primary. Hero backgrounds, CTAs, key accents. |
| `--orange-alt` | `#FF4512` | Wide orange backgrounds variant. |
| `--ink` | `#1C1F23` | Dark backgrounds, dense content sections. |
| `--black` | `#000000` | Primary text, graphic elements. |
| `--white` | `#FFFFFF` | Text on dark/orange, clean backgrounds. |
| `--gray-light` | `#D8D6D8` | Secondary text, subtle elements. |
| `--gray-mid` | `#7D7D7D` | Labels, mid backgrounds. |
| `--yellow` | `#FFDE58` | Accent, secondary highlight, "do" labels in guides. |

**Validated combos:** White on Orange · White on Black/Ink · Orange on Black · Black on White · Light Gray on Black

**Color rhythm:** Alternate section backgrounds — Orange → Black → White → Ink → Orange. This aggressive rhythm is intentional.

### Typography

| Role | Font | Weight | Case | Notes |
|---|---|---|---|---|
| Display / Hero | **Bebas Neue** | 400/700 | UPPERCASE | Extreme scale. Text IS the graphic. Available on Google Fonts. |
| UI / Body / Subtitles | **Halvar Breit** | Regular, Bold, BoldSlanted | UPPERCASE | NOT on Google Fonts. **Substitute: Barlow Condensed** (Google Fonts). |
| Editorial contrast | **Playfair Display** | Italic 400 | lowercase / Title | Mixed inline with sans display for tension. Available on Google Fonts. |

**Scale range:** Display 200px → 16px. Body/UI 107px → 10px. Editorial contrast 109px → 28px.

**Key rule:** Text at extreme scale IS the image. Overflow text creating tension at section edges is intentional.

### Spacing & Layout

- Generous padding in content blocks. Whitespace is active design.
- Grid: modular, newspaper-style columns. Fixed elements with strong anchoring.
- Section padding: 64px desktop, 40px mobile.
- Content max-width: variable by section, ~640px for text columns.

### Graphic Motifs

The brand uses a geometric motif system (no illustrations, no photography as decoration):

- **Semicircles Right (▶▶)** — "Doble flecha" / double arrow. Represents advancement, technology, progression. Black and orange variants.
- **Semicircles Left (◀◀)** — Mirror of the above. Used for back/emphasis.
- **Semicircles Up** — Two domes stacked. Used as section decoration.
- **4 Circles grid** — 2×2 circle grid. White and orange variants. Appears in logo DNA.
- **Flor Negra** — Four quarter-circles forming a diamond/flower shape. Identitary CRTIC motif.
- **Barcode lines** — Vertical lines seen in the logo mark, used as texture.

Motifs appear in black, white, or orange depending on background.

### Photography / Imagery

- High contrast treatment. Dark vignette. Partial desaturation.
- Never "clean" photography.
- Imagery is secondary to typography and graphic motifs.
- Color vibe: dark, warm-contrast.

### Borders, Shadows, Radii

- **Cards/containers:** Minimal use of border-radius (6–8px max, often 0).
- **Borders:** Used as sharp dividers (1px solid #EEE, or colored left-border for quotes).
- **Shadows:** Not a primary tool. Layout relies on background color contrast, not shadow depth.
- **Elevation:** Communicated through background color switching, not box-shadow.

### Animations & Interactions

- No documentation of specific easing. Brand feel is sharp and decisive — transitions should be fast (200–300ms), no bounce.
- Hover states: opacity reduction or color inversion. No elaborate effects.
- Press states: slight scale down (0.97) or color darken.

### Corner Radius System

- Hero/full-bleed sections: 0px
- Compact cards: 6–8px
- Pills/tags: 100px (full round)
- CTA buttons: 100px (rounded, as seen in cta_contacto asset)

---

## ICONOGRAPHY

CRTIC does **not** use an icon font or standard icon system (Lucide, Heroicons, etc.). Instead, it relies on:

1. **Brand motifs as icons** — The semicircle, circle grid, and flor assets function as icons and decorative elements.
2. **Typographic symbols** — `◆ ◇` diamond separators, `→` arrows, `[brackets]` as structural elements.
3. **Number display** — Numbers (01, 02, 03) styled in huge orange Bebas Neue serve as section markers / "icons" for steps.
4. **Simple geometric SVG inline** — For functional UI needs (envelope in CTA button), a minimal flat outline style is appropriate.

**No emoji.** No icon packs. No illustrations. Geometry is the language.

**Assets in `assets/`:**
- `logo_circle_orange.png` — Logo on orange circle (social avatar use)
- `logo_orange.png` — Standalone orange logo (primary)
- `logo_white.png` — White logo (for dark/orange backgrounds)
- `logo_black.png` — Black logo (for white backgrounds)
- `motif_4circles_white.png` — 2×2 circles, white
- `motif_4circles_orange.png` — 2×2 circles, orange
- `motif_flor_black.png` — Flower/diamond motif, black
- `motif_semicircles_up.png` — Semicircles pointing up, black
- `motif_semicircles_right_black.png` — Double-arrow right, black
- `motif_semicircles_right_orange.png` — Double-arrow right, orange
- `motif_semicircles_left.png` — Double-arrow left, black
- `text_tecnocreativo.png` — "TECNOCREATIVO & CENTRO I+D" text asset
- `cta_contacto.png` — Contact CTA button asset

---

## FILE INDEX

```
README.md                         ← This file
SKILL.md                          ← Agent skill descriptor
colors_and_type.css               ← All CSS custom properties (colors + type)

assets/
  logo_*.png/.jpg                 ← Logo variants (orange, white, black, circle)
  motif_*.png                     ← Graphic motif assets
  text_tecnocreativo.png          ← Brand text asset
  cta_contacto.png                ← CTA button asset

preview/
  colors_primary.html             ← Primary color swatches
  colors_neutral.html             ← Neutral/gray scale
  colors_combos.html              ← Validated color combinations
  type_display.html               ← Display typography (Bebas Neue)
  type_body.html                  ← Body/UI typography (Barlow Condensed)
  type_editorial.html             ← Editorial contrast (Playfair Display)
  type_scale.html                 ← Full type scale
  spacing_tokens.html             ← Spacing/radius/shadow tokens
  motifs.html                     ← Brand graphic motifs
  logos.html                      ← Logo variants
  voice_rules.html                ← Voice & tone reference
  components_buttons.html         ← Button states
  components_tags.html            ← Tags, pills, labels
  components_cards.html           ← Card patterns

ui_kits/
  website/
    README.md                     ← Website UI kit notes
    index.html                    ← Interactive website prototype
    Header.jsx                    ← Navigation header component
    Hero.jsx                      ← Hero section component
    Section.jsx                   ← Content section patterns
    Footer.jsx                    ← Footer component
```
