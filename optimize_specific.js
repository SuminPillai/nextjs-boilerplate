const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public/img/extern');
const targetDir = path.join(__dirname, 'public/img/optimized');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToOptimize = [
    { src: 'yogahall.jpg', dest: 'yogahall.webp', width: 1920 },
    { src: 'retreats.jpg', dest: 'retreats.webp', width: 1200 },
    { src: 'advancedpranayama3.jpg', dest: 'advancedpranayama3.webp', width: 1200 },
    { src: 'yoga-hall.jpg', dest: 'yoga-hall.webp', width: 1200 },
    { src: 'yogahall2.jpg', dest: 'yogahall2.webp', width: 1200 },
    { src: 'clients (2).jpg', dest: 'clients-2.webp', width: 1200 },
    { src: 'clients (3).jpg', dest: 'clients-3.webp', width: 1200 }
];

async function optimizeImages() {
    console.log('Starting optimization...');

    for (const img of imagesToOptimize) {
        const inputPath = path.join(sourceDir, img.src);
        const outputPath = path.join(targetDir, img.dest);

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize(img.width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: 80, effort: 6 })
                    .toFile(outputPath);

                const statsIn = fs.statSync(inputPath);
                const statsOut = fs.statSync(outputPath);

                console.log(`Optimized ${img.src}: ${(statsIn.size / 1024).toFixed(2)}KB -> ${(statsOut.size / 1024).toFixed(2)}KB`);
            } catch (error) {
                console.error(`Error processing ${img.src}:`, error.message);
            }
        } else {
            console.warn(`Source not found: ${img.src}`);
        }
    }
}

optimizeImages();
