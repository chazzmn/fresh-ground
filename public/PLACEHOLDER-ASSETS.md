# Placeholder assets

Everything in `public/img`, `public/video` and `public/og` is a **temporary,
generated placeholder** so the site renders cleanly before real footage lands.
They are dark, cinematic stand-ins — not final creative.

Swap in the real files using the **same filenames** (or point
`content/placeholders.ts` at new paths — that is the single source of truth).

| File | Replace with |
| --- | --- |
| `video/PLACEHOLDER_SHOWREEL_VIDEO.mp4` | Real showreel (H.264 MP4, muted-friendly, ~1080p, <8 MB ideally) |
| `img/PLACEHOLDER_SHOWREEL_POSTER.jpg` | First frame / hero still of the showreel |
| `video/PLACEHOLDER_PORTFOLIO_VIDEO_1…6.mp4` | Per-project films |
| `img/PLACEHOLDER_PORTFOLIO_POSTER_1…6.jpg` | Per-project poster stills |
| `img/PLACEHOLDER_FOUNDER_PORTRAIT.jpg` | Portrait of Ross Gill |
| `img/PLACEHOLDER_TEAM_PHOTO.jpg` | Team / on-location photo |
| `img/PLACEHOLDER_BTS_PHOTO_1.jpg`, `_2` | Behind-the-scenes stills |
| `img/PLACEHOLDER_LOGO.png` | Real logo (used in JSON-LD schema) |
| `og/PLACEHOLDER_OG_IMAGE.jpg` | 1200×630 social share image |

Tip: keep hero/showreel video short and well-compressed — it is the single
biggest lever on load speed. On mobile it only loads when the visitor taps play.
