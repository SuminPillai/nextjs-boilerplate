const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const heicDecode = require('heic-decode');

const sourceDir = 'c:/Users/sumin/Ananthadristy/images';
const targetDir = 'c:/Users/sumin/Ananthadristy/web-nextjs/public/images';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const imageMapping = [
    { src: 'advanced pranayama.HEIC', dest: 'advanced-pranayama.webp' },
    { src: 'advancedpranayama2.HEIC', dest: 'advanced-pranayama-2.webp' },
    { src: 'advancedpranayama3.jpg', dest: 'advanced-pranayama-3.webp' },
    { src: 'clients (2).HEIC', dest: 'client-2.webp' },
    { src: 'clients (3).HEIC', dest: 'client-3.webp' },
    { src: 'clients.HEIC', dest: 'client-1.webp' },
    { src: 'IMG_0230.HEIC', dest: 'img-0230.webp' },
    { src: 'IMG_0236.HEIC', dest: 'img-0236.webp' },
    { src: 'meditation.HEIC', dest: 'meditation.webp' },
    { src: 'pranayama.HEIC', dest: 'pranayama.webp' },
    { src: 'pranayamareteat.jpg', dest: 'pranayama-retreat.webp' },
    { src: 'retreats.jpg', dest: 'retreats.webp' },
    { src: 'yogahall.HEIC', dest: 'yoga-hall.webp' },
    { src: 'yogahall2.HEIC', dest: 'yoga-hall-2.webp' }
];

async function convertImages() {
    console.log('Starting image conversion with HEIC support...');

    for (const img of imageMapping) {
        const inputPath = path.join(sourceDir, img.src);
        const outputPath = path.join(targetDir, img.dest);
        const isHeic = img.src.toLowerCase().endsWith('.heic');

        try {
            if (fs.existsSync(inputPath)) {
                // Check if file already exists to avoid reprocessing if costly, but user wants overwrite likely
                // Actually, let's reprocess to be safe.
                console.log(`Converting ${img.src} to ${img.dest}...`);

                if (isHeic) {
                    const buffer = fs.readFileSync(inputPath);
                    const { data, width, height } = await heicDecode({ buffer });
                    await sharp(data, {
                        raw: {
                            width,
                            height,
                            channels: 4
                        }
                    })
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                } else {
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                }
                console.log(`Success: ${img.dest}`);
            } else {
                console.error(`Error: Source file not found - ${inputPath}`);
            }
        } catch (error) {
            console.error(`Failed to convert ${img.src}:`, error.message);
        }
    }
    console.log('Conversion complete.');
}

convertImages();
