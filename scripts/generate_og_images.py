#!/usr/bin/env python3
"""
Generate OG / social preview PNGs (sage + warm cream + mustard).
From repo root: python3 scripts/generate_og_images.py
"""

from __future__ import annotations

import os

from PIL import Image, ImageDraw, ImageFilter, ImageFont

CREAM_100 = (245, 239, 228)
CREAM_50 = (250, 246, 238)
MUSTARD_SOFT = (216, 176, 110)
SAGE_SOFT = (107, 127, 110)
SAGE_DEEP = (93, 112, 96)
INK = (45, 53, 48)
FOREST_900 = (45, 61, 51)
MUSTARD_ACCENT = (184, 137, 59)


def _try_font(path: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    if os.path.isfile(path):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            pass
    return ImageFont.load_default()


def render_og(w: int, h: int) -> Image.Image:
    bar = max(10, int(round(h * 0.022)))
    img = Image.new("RGB", (w, h), CREAM_100)
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)

    r1 = int(max(w, h) * 0.42)
    cx1, cy1 = int(w * 0.88), int(h * 0.1)
    ld.ellipse([cx1 - r1, cy1 - r1, cx1 + r1, cy1 + r1], fill=(*MUSTARD_SOFT, 72))

    r2 = int(max(w, h) * 0.38)
    cx2, cy2 = int(w * 0.92), int(h * 0.88)
    ld.ellipse([cx2 - r2, cy2 - r2, cx2 + r2, cy2 + r2], fill=(*SAGE_SOFT, 55))

    r3 = int(min(w, h) * 0.55)
    cx3, cy3 = w // 2, h // 2
    ld.ellipse([cx3 - r3, cy3 - r3, cx3 + r3, cy3 + r3], fill=(*CREAM_50, 100))

    blur_r = max(28, int(min(w, h) * 0.065))
    layer = layer.filter(ImageFilter.GaussianBlur(blur_r))
    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
    draw = ImageDraw.Draw(img)

    draw.rectangle([0, 0, w, bar], fill=SAGE_DEEP)
    draw.rectangle([0, h - bar, w, h], fill=SAGE_DEEP)

    scale = min(w / 1200, h / 630)
    title_size = max(28, int(round(52 * scale)))
    sub_size = max(14, int(round(23 * scale)))

    georgia = "/System/Library/Fonts/Supplemental/Georgia.ttf"
    arial = "/System/Library/Fonts/Supplemental/Arial.ttf"
    title_font = _try_font(georgia, title_size)
    sub_font = _try_font(arial, sub_size)

    title = "Dr. Veronika Kieslingová"
    subtitle = "Dětská psychoterapie  ·  Praha 6"

    tw, th = draw.textbbox((0, 0), title, font=title_font)[2:]
    sw, sh = draw.textbbox((0, 0), subtitle, font=sub_font)[2:]

    gap_small = max(6, int(round(8 * scale)))
    gap_mid = max(8, int(round(12 * scale)))
    line_h = max(2, int(round(3 * scale)))
    accent_w = min(max(tw, sw) + int(40 * scale), w - 80)

    block_h = th + gap_small + line_h + gap_mid + sh
    y_title = (h - block_h) // 2
    tx = (w - tw) // 2
    sx = (w - sw) // 2

    halo = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    hd = ImageDraw.Draw(halo)
    for dx, dy in ((1, 1), (-1, -1), (1, -1), (-1, 1), (0, 2), (2, 0)):
        hd.text((tx + dx, y_title + dy), title, font=title_font, fill=(255, 255, 255, 140))
    img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
    draw = ImageDraw.Draw(img)

    draw.text((tx, y_title), title, font=title_font, fill=FOREST_900)

    line_y = y_title + th + gap_small
    lx0 = (w - accent_w) // 2
    draw.rectangle([lx0, line_y, lx0 + accent_w, line_y + line_h], fill=MUSTARD_ACCENT)

    sub_y = line_y + line_h + gap_mid
    draw.text((sx, sub_y), subtitle, font=sub_font, fill=INK)

    return img


def main() -> None:
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out1200 = os.path.join(root, "og-share-1200.png")
    out1024 = os.path.join(root, "og-share.png")

    render_og(1200, 630).save(out1200, "PNG", optimize=True)
    render_og(1024, 513).save(out1024, "PNG", optimize=True)
    print("Wrote", out1200)
    print("Wrote", out1024)


if __name__ == "__main__":
    main()
