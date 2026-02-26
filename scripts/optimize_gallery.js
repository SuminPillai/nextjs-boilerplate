const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/img/extern');
const outputDir = path.join(__dirname, '../public/img/optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToOptimize = [
    // Gallery Images
    'IMG-20260125-WA0033.jpg',
    'IMG-20260125-WA0034.jpg',
    'IMG-20260125-WA0035.jpg',
    'IMG-20260125-WA0038.jpg',
    'IMG-20260125-WA0040.jpg',
    'IMG-20260125-WA0041.jpg',
    'IMG-20260125-WA0042.jpg',
    'yogahall2.jpg',

    // Philosophy & Others
    'meditation.jpg',
    'pranayama.jpg',
    'advanced pranayama.jpg',

    // Potential missing assets
    'havan.jpg',
    'outdoor-yoga-5.jpg',
    'outdoor-yoga-6.jpg',
    'outdoor-yoga-7.jpg',
    'outdoor-yoga-8.jpg',

    // New Assets
    'advancedpranayama3.jpg'
];

async function optimizeImages() {
    console.log(`Starting optimization of ${imagesToOptimize.length} images...`);

    const inputDirs = [
        path.join(__dirname, '../public/img/extern'),
        path.join(__dirname, '../public/img/new-assets')
    ];

    for (const image of imagesToOptimize) {
        let inputPath = null;

        // Find the image in one of the input directories
        for (const dir of inputDirs) {
            const potentialPath = path.join(dir, image);
            if (fs.existsSync(potentialPath)) {
                inputPath = potentialPath;
                break;
            }
        }

        const outputFilename = parseFilename(image).name + '.webp';
        const outputPath = path.join(outputDir, outputFilename);

        if (inputPath) {
            try {
                // Resize logic: If > 1MB or > 1920px width, resize. 
                // However, let's keep it simple: just convert to WebP with good quality.
                // We'll resize only if it's huge.

                const metadata = await sharp(inputPath).metadata();
                let pipeline = sharp(inputPath);

                if (metadata.width > 1920) {
                    pipeline = pipeline.resize({ width: 1920 });
                }

                await pipeline
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`✅ Optimized: ${image} -> ${outputFilename}`);
            } catch (err) {
                console.error(`❌ Error optimizing ${image}:`, err.message);
            }
        } else {
            console.log(`⚠️ Skipped (not found): ${image}`);
        }
    }
    console.log('Done.');
}

function parseFilename(filename) {
    const ext = path.extname(filename);
    return {
        name: path.basename(filename, ext),
        ext: ext
    };
}

optimizeImages();
