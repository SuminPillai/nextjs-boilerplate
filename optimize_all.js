const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'public/img/extern');
const targetDir = path.join(__dirname, 'public/img/optimized');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to get file size in KB
const getSize = (file) => (fs.statSync(file).size / 1024).toFixed(2);

async function optimizeAll() {
    const files = fs.readdirSync(sourceDir);

    console.log(`Found ${files.length} files in ${sourceDir}`);

    for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

        const inputPath = path.join(sourceDir, file);
        const inputSize = getSize(inputPath);

        // Skip small files (under 100KB) unless explicitly targeted
        if (inputSize < 100) continue;

        const needsResize = inputSize > 500; // Only resize really big ones
        const width = needsResize ? 1920 : null;

        const destName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(targetDir, destName);

        try {
            let pipeline = sharp(inputPath);

            if (width) {
                pipeline = pipeline.resize(width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });
            }

            await pipeline
                .webp({ quality: 80, effort: 4 }) // slightly lower effort for speed
                .toFile(outputPath);

            const outputSize = getSize(outputPath);
            console.log(`✅ ${file}: ${inputSize}KB -> ${outputSize}KB`);

        } catch (error) {
            console.error(`❌ Error on ${file}: ${error.message}`);
        }
    }
}

optimizeAll();
