
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../../images');
const outputDir = path.join(__dirname, '../public/img/extern');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.heic') {
            const inputFile = path.join(inputDir, file);
            const outputFile = path.join(outputDir, path.basename(file, path.extname(file)) + '.jpg');

            sharp(inputFile)
                .jpeg({ quality: 90 })
                .toFile(outputFile)
                .then(() => {
                    console.log(`Converted: ${file} -> ${path.basename(outputFile)}`);
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
