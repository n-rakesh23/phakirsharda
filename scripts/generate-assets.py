"""Generate favicons, app icons, OG image, line icons and branded placeholder images.
Usage: python gen_assets.py <project_root>
"""
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

root = sys.argv[1]
pub = os.path.join(root, "public")
icons_dir = os.path.join(pub, "icons")
img_dir = os.path.join(pub, "images")
logo_path = os.path.join(root, "src", "assets", "brand", "phakir-sarada-logo.jpeg")

NAVY, INK, GOLD, OFF, TEAL = "#10243A", "#0A1724", "#D6A64F", "#F5F6F4", "#4B8F9C"


def circle_mask(img):
    s = img.size[0]
    big = Image.new("L", (s * 4, s * 4), 0)
    ImageDraw.Draw(big).ellipse((0, 0, s * 4 - 1, s * 4 - 1), fill=255)
    out = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    out.paste(img, (0, 0), big.resize((s, s), Image.LANCZOS))
    return out


logo = Image.open(logo_path).convert("RGB")
badge = circle_mask(logo.crop((4, 4, 1276, 1276)))      # full badge, transparent corners
globe = circle_mask(logo.crop((215, 215, 1065, 1065)))  # inner globe, legible when tiny

# --- favicons (small → globe crop) ---
globe.save(os.path.join(pub, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
for s in (16, 32):
    globe.resize((s, s), Image.LANCZOS).save(os.path.join(icons_dir, f"favicon-{s}.png"))

# --- app icons (large → full badge) ---
def on_white(src, size, pad=0.06):
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    inner = int(size * (1 - 2 * pad))
    r = src.resize((inner, inner), Image.LANCZOS)
    canvas.paste(r, ((size - inner) // 2,) * 2, r)
    return canvas.convert("RGB")

on_white(badge, 180).save(os.path.join(icons_dir, "apple-touch-icon.png"))
for s in (192, 512):
    badge.resize((s, s), Image.LANCZOS).save(os.path.join(icons_dir, f"icon-{s}.png"))
on_white(badge, 512, pad=0.12).save(os.path.join(icons_dir, "icon-maskable-512.png"))

manifest = {
    "name": "Phakir Sarada Private Limited",
    "short_name": "Phakir Sarada",
    "icons": [
        {"src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
        {"src": "/icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
    "theme_color": NAVY,
    "background_color": OFF,
    "display": "standalone",
    "start_url": "/",
}
with open(os.path.join(pub, "site.webmanifest"), "w", encoding="utf-8", newline="\n") as f:
    json.dump(manifest, f, indent=2)
    f.write("\n")

# --- Open Graph / social share image 1200x630 ---
def font(names, size):
    for n in names:
        p = os.path.join(os.environ.get("WINDIR", "C:/Windows"), "Fonts", n)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

og = Image.new("RGB", (1200, 630), INK)
d = ImageDraw.Draw(og)
d.rectangle((0, 0, 1200, 8), fill=GOLD)
b = badge.resize((380, 380), Image.LANCZOS)
white_disc = Image.new("RGBA", (400, 400), (0, 0, 0, 0))
ImageDraw.Draw(white_disc).ellipse((0, 0, 399, 399), fill=(255, 255, 255, 255))
og.paste(white_disc, (70, 115), white_disc)
og.paste(b, (80, 125), b)
d.text((530, 200), "Phakir Sarada", font=font(["segoeuib.ttf", "arialbd.ttf"], 64), fill="white")
d.text((530, 278), "Private Limited", font=font(["segoeuib.ttf", "arialbd.ttf"], 40), fill=GOLD)
d.text((530, 360), "Mining · Construction · Manufacturing", font=font(["segoeui.ttf", "arial.ttf"], 28), fill="#C9D1D9")
d.text((530, 400), "Transportation · Industrial Training", font=font(["segoeui.ttf", "arial.ttf"], 28), fill="#C9D1D9")
og.save(os.path.join(img_dir, "og-image.jpg"), quality=88)

# --- line icons (24px grid, navy stroke for >=3:1 contrast on light backgrounds) ---
ICONS = {
    "mining": ['<path d="M3 21 15 9"/>', '<path d="M6.5 6Q12 2.5 17 5.5"/>', '<path d="M17 5.5Q20.5 9.5 18 17.5"/>', '<path d="m14.2 6.8 3 3"/>'],
    "construction": ['<path d="M6 21V4"/>', '<path d="M3 4h18"/>', '<path d="m6 9 5-5"/>',
                     '<path d="M17 4v6"/>', '<path d="M15 10h4v3h-4z"/>', '<path d="M3 21h7"/>'],
    "manufacturing": ['<path d="M3 21V11l5 3v-3l5 3v-3l5 3V5h3v16z"/>', '<path d="M7 17h2M12 17h2M17 17h1"/>'],
    "transportation": ['<path d="M2 6h11v10H2z"/>', '<path d="M13 9h4l4 4v3h-8"/>',
                       '<circle cx="6" cy="17.5" r="1.8"/>', '<circle cx="17" cy="17.5" r="1.8"/>'],
    "industrial-training": ['<path d="M4.5 15.5a7.5 7.5 0 0 1 15 0"/>', '<path d="M10 8.6V13M14 8.6V13"/>',
                            '<path d="M2.5 15.5h19V18h-19z"/>'],
    "community": ['<path d="M12 11.3c-1.4-2.4-5-2-5 .8 0 2 2.5 3.7 5 5.6 2.5-1.9 5-3.6 5-5.6 0-2.8-3.6-3.2-5-.8z"/>',
                  '<path d="M2 14.5 6 20h12l4-5.5"/>'],
}
svg_head = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" '
            f'fill="none" stroke="{NAVY}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">')
for name, parts in ICONS.items():
    with open(os.path.join(icons_dir, f"{name}.svg"), "w", encoding="utf-8", newline="\n") as f:
        f.write(svg_head + "".join(parts) + "</svg>\n")

# --- branded placeholder images (16:9 SVG) ---
SECTIONS = {
    "hero": ("hero", "Hero image"),
    "mining": ("mining", "Mining"),
    "construction": ("construction", "Construction"),
    "manufacturing": ("manufacturing", "Manufacturing"),
    "transportation": ("transportation", "Transportation"),
    "training": ("industrial-training", "Industrial Training"),
    "community": ("community", "Maakalarai Charitable Trust"),
}
for folder, (icon, label) in SECTIONS.items():
    glyph = "".join(ICONS.get(icon, ICONS["manufacturing"]))
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="Placeholder: {label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{NAVY}"/><stop offset="1" stop-color="{INK}"/>
    </linearGradient>
    <pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0v48" fill="none" stroke="#ffffff" stroke-opacity=".05"/>
    </pattern>
  </defs>
  <rect width="1600" height="900" fill="url(#g)"/>
  <rect width="1600" height="900" fill="url(#p)"/>
  <g transform="translate(680 250) scale(10)" fill="none" stroke="{GOLD}" stroke-opacity=".55" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">{glyph}</g>
  <text x="800" y="580" text-anchor="middle" font-family="Manrope, Segoe UI, Arial, sans-serif" font-size="56" font-weight="700" fill="#ffffff">{label}</text>
  <text x="800" y="640" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" fill="#ffffff" fill-opacity=".6">Placeholder · replace with an approved company photograph</text>
</svg>
'''
    with open(os.path.join(img_dir, folder, "placeholder.svg"), "w", encoding="utf-8", newline="\n") as f:
        f.write(svg)

print("done")
