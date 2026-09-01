#!/bin/bash
# MathFlux — generates promo-video.mp4 (1080x1920, 9:16, social-ready)
# Clean crossfade slideshow — add music/text in iMovie or CapCut
# Usage: bash make-video.sh

set -e
cd "$(dirname "$0")"
SHOTS="screenshots"
OUT="promo-video.mp4"
W=1080; H=1920; FPS=30; DUR=5; XFADE=0.6

FILES=(
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 15.10.40.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 15.10.55.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 19.45.12.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 19.46.31.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 19.49.50.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 19.47.46.png"
  "$SHOTS/Simulator Screenshot - iPhone 17 Pro Max - 2026-05-12 at 19.50.23.png"
)

N=${#FILES[@]}
INPUTS=()
FILTER=""
PREV=""

for i in "${!FILES[@]}"; do
  INPUTS+=(-loop 1 -t $DUR -i "${FILES[$i]}")
  # scale each to fill 1080x1920
  FILTER+="[$i:v]scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=${FPS},format=yuv420p[s${i}];"
done

# Chain xfade transitions
PREV="s0"
for i in $(seq 1 $((N-1))); do
  OFFSET=$(( (i * DUR) - 1 ))
  OUT_TAG="x${i}"
  FILTER+="[${PREV}][s${i}]xfade=transition=fade:duration=${XFADE}:offset=${OFFSET}[${OUT_TAG}];"
  PREV="${OUT_TAG}"
done

echo "Building $OUT ..."
ffmpeg -y \
  "${INPUTS[@]}" \
  -filter_complex "${FILTER}" \
  -map "[${PREV}]" \
  -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p -r $FPS \
  "$OUT"

echo ""
echo "✓ Done → marketing/$OUT"
echo "  Tip: import into iMovie/CapCut to add music + text overlays"
