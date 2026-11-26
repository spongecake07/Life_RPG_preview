# River Crossing — Village UI icon assets

12 illustrated icons, each in **idle** (unclicked) and **selected** (clicked/active) states.

## Usage

Files live under `public/assets/ui/village-icons/`. Use the `.webp` assets by default; `.png` files are fallbacks.

Example: `public/assets/ui/village-icons/blacksmith-forge--idle.webp` becomes `/assets/ui/village-icons/blacksmith-forge--idle.webp` at runtime when served from the site root. Account for your deployment base path (GitHub Pages).

For each button, use `--idle` normally and `--selected` when the button is active. Do not use a transient click alone as persistent selection; active state should reflect the current screen/location. Use an accessible text label for each icon.

**Important:** These are transparent, cropped derivatives of the approved composite concept sheet, not separately re-rendered vector icons. At 256px they suit mobile UI controls, not large zoomed map buildings. Some decorative black from the original sheet remains inside the circular artwork.

No app code is included or modified.
