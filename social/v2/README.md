# MathFlux Social Media Kit — v2

The **`launch/`** set is the active kit. MathFlux is **live on the App Store**:
https://apps.apple.com/us/app/mathflux/id6762221667

The pre-launch **`coming-soon/`** teasers have been **retired and removed** — the
app has shipped, so the "coming soon" messaging no longer applies.

## Folder structure

```
v2/
└── launch/        ← ACTIVE — use these
    ├── facebook-cover.png    1640×624
    ├── instagram-post.png    1080×1080
    ├── story.png             1080×1920
    ├── og-share.png          1200×630
    └── linkedin-cover.png    1584×396
```

No URLs are baked into the graphics on purpose — add your App Store share link
at post-time, where it belongs.

## Format → platform mapping

| File | Size | Where to post |
|------|------|----------------|
| `facebook-cover.png` | 1640 × 624 | Facebook page cover photo |
| `instagram-post.png` | 1080 × 1080 | Instagram feed · Facebook square · WhatsApp status · Threads |
| `story.png` | 1080 × 1920 | Instagram story · Facebook story · WhatsApp status · TikTok |
| `og-share.png` | 1200 × 630 | Facebook share preview · LinkedIn post · X/Twitter post |
| `linkedin-cover.png` | 1584 × 396 | LinkedIn personal profile banner |

## Profile picture

For the Facebook page profile picture (and all "round" / square avatar contexts),
use the existing 1024×1024 app icon at:

```
~/Documents/Game Dev/MathFlux Flutter rewrite/brand/icon/icon.png
```

## ⚠️ Platform messaging

The `launch/` graphics carry a "Free on iOS & Android" callout from when a
simultaneous launch was planned. **Only iOS is live today** — Android is planned
for a future release. Until Android ships, regenerate the callout as iOS-only (or
avoid the platform claim) before posting. Same note applies to any iOS/Android
wording in `../CAPTIONS.md`.
