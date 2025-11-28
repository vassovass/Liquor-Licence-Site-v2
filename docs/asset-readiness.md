# Asset Readiness Checklist

Baseline reference: [Canva site](https://bjliquorlicence.my.canva.site/bj-liquor-licence) and exported assets under `old site/Beverly LIQUOR LICENCE_files`.

## Brand Signals Observed

- **Palette:** charcoal `#000`, warm white `#E1DDD8`, muted copper `#B4816B`, taupe gray `#3B3937`. These appear consistently across hero, typography, and dividers.
- **Typography:** serif monogram “JB” paired with a high-contrast serif for headings and narrow all-caps sans for subtext. We should pair this with web-safe equivalents (e.g., Playfair Display + Inter) and host via `next/font`.
- **Motifs:** overlapping editorial photos, gold divider bars, numbered mini-cards, and badge-style icons establish trust and authority.

## Exported Assets Inventory

| File | Section / Usage | Dimensions | Status | Notes |
| --- | --- | --- | --- | --- |
| `c16314dc92a3527bedfac6fa260dd7be.jpg` | Hero background photo | 2400×1600, 750 KB | Reuse w/ optimization | High-quality portrait; convert to WebP + multiple breakpoints (hero, about). |
| `b0a53b6f7af658f43db5993057c4135a.png` | Hero abstract swirl overlay | 2400×2351, 31 KB | Reuse | Lightweight accent PNG; can also be inlined as SVG after cleanup. |
| `c85c400d48b6375871badf9126cf0f0c.png` | Small badge icon (hero trust tag) | 225×225, 10 KB | Recreate as SVG | Raster shows faint blur; redraw as vector to keep sharp on retina. |
| `3b04f821ffea09965c37f459b14cd0ad.jpg` | Secondary badge/photo tile | 400×400, 29 KB | Optional reuse | Works for testimonial avatars; crop tighter if needed. |
| `9e93aa7b3fb8c11e0f3bc6fa7808fe86.png` | Authority crest icon (About) | 264×299, 166 KB | Optimize | Transparent PNG with heavy data; rebuild as SVG or compress aggressively. |
| `504a07eb68ccaf759c113a0b1369d595.jpg` | Areas collage photo 1 | 1600×1067, 497 KB | Reuse w/ compression | Lifestyle shot; export responsive WebP sizes. |
| `72c2237ee5db739611b87c6040122e88.jpg` | Areas collage photo 2 | 2400×1013, 249 KB | Reuse w/ compression | Wide pano; will need art-directed crops for mobile. |
| `8927f5a69020250409580b94494389da.jpg` | Areas collage photo 3 | 1600×1068, 307 KB | Reuse w/ compression | Similar style; keep consistent color grading. |
| `149af36943905e084fbf3ef342dcacb6.png` | Collage frame / divider | 1600×900, 731 KB | Rebuild | Large PNG of simple geometry—prefer CSS/SVG shapes to save weight. |
| `348c6f94d5538b6a0d0b1b728a4b989c.png` | WhatsApp/contact icon | 300×300, 6.7 KB | Replace with font icon | Easier to manage via SVG/icon font; ensures consistent stroke weight. |

> Source data generated via `python scripts/asset_audit.py` → `scripts/asset_audit.json`.

## Missing / Low-Quality Assets

- Service grid icons export as `blob:` URLs in the Canva HTML and are **not present** locally. We need to recreate a consistent icon set (outlined stroke, 48×48) for the 10 services.
- Testimonials currently have placeholder brackets—no client headshots or logos are available.
- No explicit map graphic for “Areas Served”; consider producing a simple SVG outline map with highlighted provinces.

## Reuse vs. Replace Summary

- **Keep (with optimization):** hero portrait, editorial lifestyle photos, hero swirl overlay. Process via `next/image` with multiple sizes + WebP/AVIF.
- **Recreate as vector/SVG:** badge icons, divider bars, WhatsApp button, numbered chips. This avoids blurry scaling and reduces network weight.
- **Replace entirely:** PNG collage frame (`149af…`) and any text rendered inside images. Rebuild them using semantic HTML + CSS for SEO/accessibility.

## Optimization Recommendations

1. **Responsive exports:** Generate `@1x/@2x` crops for hero (desktop 1600w, tablet 1024w, mobile 768w) and for collage tiles (square + portrait variants).
2. **Color consistency:** Apply a warm LUT or CSS overlay to ensure all photos share the same copper tint as the Canva design.
3. **Asset naming:** Rename files descriptively (e.g., `hero-beverly.jpg`) for maintainability and better CMS references.
4. **SVG sprites:** Combine icons/badges into a sprite or component library for reuse across hero, about, and CTA strips.

## Next Actions for Approval

- Confirm the above reuse/replace decisions.
- Provide any missing originals (service icons, Beverly headshot variations) if higher fidelity versions exist.
- Once approved, proceed to **Step 2 – Global Layout & Theme Foundations** using these assets as the canonical source set.

