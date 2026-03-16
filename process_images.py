from PIL import Image
import os

source_path = r"C:/Users/zhuma/.gemini/antigravity/brain/10e227dd-a303-4a0e-93d4-0547e00c379a/uploaded_image_1769155755355.png"
dest_dir = r"c:/Antigravity/spina-clinic/public/images"

img = Image.open(source_path)
width, height = img.size

# Assuming side-by-side layout.
# Crop logic: Split in half vertically, then trim borders if needed.
# Visual inspection of recent artifacts suggests they are distinct cards.

# Left Image (Kinesio)
left_crop = img.crop((0, 0, width // 2, height))
# Right Image (Acupuncture)
right_crop = img.crop((width // 2, 0, width, height))

# Optional: Center crop or trim white space? 
# For now, simplistic split is safest unless we use CV to find bounding boxes.
# Only risk is if there is meaningful padding.

left_crop.save(os.path.join(dest_dir, "kinesio.png"))
right_crop.save(os.path.join(dest_dir, "acupuncture.png"))

print("Images processed and saved.")
