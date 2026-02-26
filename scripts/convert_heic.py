
import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

input_dir = os.path.join(os.path.dirname(__file__), '../../images')
output_dir = os.path.join(os.path.dirname(__file__), '../public/img/extern')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"Scanning directory: {input_dir}")

for filename in os.listdir(input_dir):
    if filename.lower().endswith('.heic'):
        input_path = os.path.join(input_dir, filename)
        output_filename = os.path.splitext(filename)[0] + '.jpg'
        output_path = os.path.join(output_dir, output_filename)

        try:
            image = Image.open(input_path)
            image.convert('RGB').save(output_path, "JPEG", quality=90)
            print(f"Converted: {filename} -> {output_filename}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
