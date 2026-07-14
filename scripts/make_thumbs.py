"""Genera miniaturas webp de las fotos del portfolio.

Correr después de agregar fotos nuevas a fotos/<proyecto>/:

    python scripts/make_thumbs.py

Crea fotos/<proyecto>/thumbs/<mismo-nombre> a un máximo de 1000px de lado,
que es lo que usan las páginas de la revista y la grilla de la galería.
El lightbox sigue usando la resolución original.
"""
import glob
import os

from PIL import Image

MAX_SIDE = 1000
QUALITY = 80

total_in = total_out = count = 0
for src in glob.glob('fotos/*/*.webp'):
    d, name = os.path.split(src)
    if os.path.basename(d) == 'thumbs':
        continue
    out_dir = os.path.join(d, 'thumbs')
    os.makedirs(out_dir, exist_ok=True)
    dst = os.path.join(out_dir, name)
    if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        continue
    im = Image.open(src)
    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    im.save(dst, 'WEBP', quality=QUALITY, method=6)
    total_in += os.path.getsize(src)
    total_out += os.path.getsize(dst)
    count += 1
    print(f'{dst}  {im.size[0]}x{im.size[1]}  {os.path.getsize(dst)//1024} KB')

if count:
    print(f'\n{count} miniaturas · {total_in / 1e6:.1f} MB -> {total_out / 1e6:.1f} MB')
else:
    print('Nada para hacer: miniaturas al día.')
