
const sharp = require('sharp');
const path = require('path');

const inputFile = path.join(__dirname, '../../images/yogahall.HEIC');
const outputFile = path.join(__dirname, '../public/img/extern/debug_yogahall.jpg');

console.log(`Attempting to convert: ${inputFile}`);

sharp(inputFile)
    .jpeg({ quality: 90 })
    .toFile(outputFile)
    .then(info => {
        console.log('Success:', info);
    })
    .catch(err => {
        console.error('Error:', err);
    });
