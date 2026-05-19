# MathFlux — Play Store Listing Copy

Paste each block into the corresponding Play Console field.

---

## App identity

| Field | Value | Limit |
|-------|-------|-------|
| App name | `MathFlux — Math Battles` | 30 chars |
| Default language | English (United States) | — |
| App or game | **Game** | — |
| Free or paid | Free (with IAP) | — |
| Category | Game › Educational | — |
| Tags | Math, Educational, Multiplayer, Brain games | — |

---

## Short description (max 80)

```
Real-time competitive math battles. Up to 15 players. Any level.
```

(63 chars)

---

## Full description (max 4000)

```
MathFlux is a real-time competitive math game for every skill level — from
kindergarten arithmetic to college-level calculus. Pick a persona, pick a
level, and race to the top of the leaderboard before the timer runs out.

═══ THREE WAYS TO PLAY ═══

🎯 SOLO
Hone your skills with adaptive difficulty. Wrong answers reduce health;
streaks earn shields. Mastery tracking keeps the problem mix honest — strong
on division? You'll see harder ones next.

🏃 PRACTICE
No pressure, no penalties. Drill a specific operation, persona, or level
range until it clicks.

⚔ COMPETITION
Real-time head-to-head matches with up to 15 players. The host picks a
session length (60, 90, or 120 seconds), shares the room code, and everyone
races the same clock. Scores compare at the end — highest wins. No health
deduction, no early death, just speed and accuracy.

═══ WHAT MAKES IT DIFFERENT ═══

✦ ADAPTIVE ENGINE
The game tracks your mastery per operation and shifts the difficulty in
real time. Your sessions get harder as you get better — exactly as much as
you can handle.

✦ PERSONAS
Pick a play style — focused, fast, balanced, or precise — and the problem
pool tunes to match. Each persona surfaces a different mix of operations.

✦ STREAK SHIELDS
Earn shields as your streak grows. Each shield absorbs one wrong answer
without breaking your combo. Strategic mistakes are part of the game.

✦ SPEED BONUSES
Beat the per-question timer for streak multipliers that compound. Fast
beats safe — but only if you stay accurate.

═══ CROSS-PLATFORM ═══

MathFlux is available on both iOS and Android. Both platforms share the
same Firebase-synced multiplayer backend, so you can compete in the same
rooms regardless of device. Matches are real-time over WebSockets — your
opponent's score updates as they play.

═══ FAIR PRICING ═══

MathFlux is free to download and play. Optional token packs unlock cosmetic
themes and bonus persona unlocks. No ads. No tracking. No accounts to
create. We use anonymous authentication only.

Privacy policy: https://samuelfalade.github.io/mathflux/privacy.html
Support / contact: samuelfalade@gmail.com

Math battles. Any level. Get the app.
```

(approx 2,150 chars)

---

## Contact info

| Field | Value |
|-------|-------|
| Email | `samuelfalade@gmail.com` |
| Website | `https://samuelfalade.github.io/mathflux/` |
| Privacy policy | `https://samuelfalade.github.io/mathflux/privacy.html` |

---

## Content declarations

| Field | Value |
|-------|-------|
| Target audience | **Ages 5 and up** (Designed for Families) |
| Contains ads | **No** |
| Contains in-app purchases | **Yes** — token packs (range: $0.99 – $19.99) |
| Country availability | All countries |
| Pricing | Free with IAP |

---

## Graphics to upload

| Asset | File | Spec |
|-------|------|------|
| App icon | `MathFlux-Flutter/brand/icon/icon.png` | 512×512 PNG (32-bit) |
| Feature graphic | `FluxCore/marketing/feature-graphic.png` | 1024×500 PNG |
| Phone screenshots (6) | `FluxCore/marketing/android-screenshots/shot-1.png` … `shot-6.png` | 1080×1920 PNG portrait |

---

## In-app product list (for the IAP declaration)

Match these to the StoreKit / Play Billing products configured in code
(see `MathFlux-Flutter/lib/services/store_service.dart` for exact IDs):

- `tokens_small`  — $0.99 — 100 tokens
- `tokens_medium` — $4.99 — 600 tokens
- `tokens_large`  — $9.99 — 1,500 tokens
- `tokens_huge`   — $19.99 — 4,000 tokens

(Update prices and IDs to match the actual `store_service.dart` config before submission.)
