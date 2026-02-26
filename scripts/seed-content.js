const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const BASE_DIR = path.join(__dirname, '../../httpdocs/improvised website');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

function parseHtml(html) {
    const info = {
        title: '',
        description: '',
        image: '',
        price: 0,
        type: 'Course' // Default
    };

    // Title
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) info.title = titleMatch[1].split('|')[0].trim();

    // Description
    const descMatch = html.match(/<meta name="description"\s+content="([^"]*)"/i);
    if (descMatch) info.description = descMatch[1];

    // Image
    const imgMatch = html.match(/<meta property="og:image"\s+content="([^"]*)"/i);
    if (imgMatch) info.image = imgMatch[1];

    // Price (Look for $XXXX pattern near "Price" or just $XXXX in general, taking the first significant one)
    // This is heuristical.
    // Pattern: $1600 or $1,600
    const priceMatch = html.match(/\$\s?([0-9,]+)/);
    if (priceMatch) {
        info.price = parseFloat(priceMatch[1].replace(',', ''));
    }

    return info;
}

async function seedContent() {
    console.log(`Scanning content in: ${BASE_DIR}`);

    if (!fs.existsSync(BASE_DIR)) {
        console.error(`Directory not found: ${BASE_DIR}`);
        return;
    }

    const files = getAllFiles(BASE_DIR);
    // Filter for relevant files
    const courseFiles = files.filter(f => (f.includes('training.html') || f.includes('retreat.html')) && f.endsWith('.html'));
    const blogFiles = files.filter(f => f.includes('blog-') && f.endsWith('.html'));

    console.log(`Found ${courseFiles.length} courses and ${blogFiles.length} blog posts.`);

    // 1. Seed Courses
    for (const file of courseFiles) {
        try {
            const html = fs.readFileSync(file, 'utf8');
            const info = parseHtml(html);
            const filename = path.basename(file);

            // Distinguish type based on filename
            if (filename.includes('training')) info.type = 'Teacher Training';
            else if (filename.includes('retreat')) info.type = 'Retreat';

            if (!info.title) continue;

            const exists = await prisma.course.findFirst({ where: { title: info.title } });
            if (!exists) {
                await prisma.course.create({
                    data: {
                        title: info.title,
                        type: info.type,
                        price: info.price || 0,
                        description: info.description || '',
                        image_url: info.image || '',
                        is_active: true
                    }
                });
                console.log(`Created Course: ${info.title} ($${info.price})`);
            } else {
                // Optional: Update price if it changed? For now, skip to preserve edits.
                console.log(`Skipped (Exists): ${info.title}`);
            }
        } catch (e) {
            console.error(`Error processing ${path.basename(file)}:`, e.message);
        }
    }

    // 2. Seed Blogs
    for (const file of blogFiles) {
        try {
            const html = fs.readFileSync(file, 'utf8');
            const info = parseHtml(html);

            // Slug from filename
            const slug = path.basename(file, '.html').replace('blog-', '');

            // Content extraction (Prose)
            const contentMatch = html.match(/<div class="prose[^>]*>([\s\S]*?)<\/div>/);
            let content = contentMatch ? contentMatch[1].trim() : "";
            if (!content) {
                // Fallback for different templates
                const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
                content = articleMatch ? articleMatch[1].trim() : "<p>Content parsing failed.</p>";
            }

            if (!info.title) continue;

            const exists = await prisma.post.findUnique({ where: { slug: slug } });
            if (!exists) {
                await prisma.post.create({
                    data: {
                        title: info.title,
                        slug: slug,
                        summary: info.description || '',
                        content: content,
                        image_url: info.image || '',
                        is_published: true
                    }
                });
                console.log(`Created Post: ${info.title}`);
            } else {
                console.log(`Skipped (Exists): ${info.title}`);
            }
        } catch (e) {
            console.error(`Error processing ${path.basename(file)}:`, e.message);
        }
    }

    console.log("Seeding complete.");
    await prisma.$disconnect();
}

seedContent();
