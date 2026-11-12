from rembg import remove, new_session
from PIL import Image
import os

src = 'C:/Users/Adhya/.gemini/antigravity/brain/3108f3e8-0627-42db-b416-8e181a219a3b/.user_uploaded/media_1794336364400_f18b75b6.jpg'
dst_dir = 'c:/Users/Adhya/Desktop/aditi-portfolio/public/assets'

print('Loading image...')
img = Image.open(src).convert('RGBA')
print(f'Original size: {img.size}')

print('Creating CPU session...')
session = new_session('u2net')

print('Removing background...')
result = remove(img, session=session)
print('Done! Saving...')

# Save transparent PNG for backup
result.save(os.path.join(dst_dir, 'portrait-cutout.png'))
print('Saved portrait-cutout.png')

# Save WebP versions with transparency preserved
for w in [420, 720, 1100]:
    ratio = w / result.width
    h = int(result.height * ratio)
    resized = result.resize((w, h), Image.LANCZOS)
    out = os.path.join(dst_dir, f'portrait-{w}.webp')
    resized.save(out, 'WEBP', quality=90, lossless=False)
    print(f'Saved portrait-{w}.webp ({w}x{h})')

print('All done!')
