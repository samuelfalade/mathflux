# Android Screenshot Shot List

Capture 6 portrait screenshots from a Pixel 7 emulator (or any Android 8.0+ device) running
the MathFlux Flutter build. Drop them in this folder named `shot-1.png` … `shot-6.png`.

## Capture command

```bash
adb exec-out screencap -p > shot-N.png
```

## Spec
- **Resolution**: 1080 × 1920 PNG portrait (Pixel 7 emulator default)
- **Format**: PNG, 24- or 32-bit
- **Status bar**: visible OK (Play Store accepts it; some publishers crop it)
- **Min**: 320px shortest side
- **Max**: 3840px longest side

## Shot order (matches the iOS captures in `../screenshots/`)

1. **`shot-1.png` — Menu**
   - Main menu with three mode buttons (Solo / Practice / Competition)
   - MathFlux logo at top
   - Token balance visible

2. **`shot-2.png` — Persona selection**
   - Persona picker showing 3–4 personas with their stat profiles
   - "Focused" or "Balanced" highlighted

3. **`shot-3.png` — Solo gameplay**
   - Mid-question screen showing an active problem
   - Speed timer counting down
   - Streak counter visible
   - Health bar visible (Solo mode)

4. **`shot-4.png` — Competition lobby**
   - Host view: large 6-character room code
   - 2–3 players already joined
   - Duration picker (60 / 90 / 120s) visible
   - "Start" button

5. **`shot-5.png` — Competition gameplay**
   - Mid-match: problem + answer options
   - Live leaderboard sidebar with player scores updating
   - Competition session timer (top of screen)

6. **`shot-6.png` — Game over**
   - Competition results screen
   - Ranked leaderboard with medals 🥇🥈🥉
   - User's score highlighted
   - REMATCH and MENU buttons

## After capture

1. Move files into this directory.
2. Verify dimensions: `sips -g pixelWidth -g pixelHeight shot-*.png`
3. Commit + push to FluxCore-wrapper repo.
4. They'll be reachable at `https://samuelfalade.github.io/mathflux/android-screenshots/shot-N.png`.
5. Upload to Play Console listing in order.
