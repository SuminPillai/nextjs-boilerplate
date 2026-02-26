const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Checking database...");
    try {
        const counts = {
            admins: await prisma.admin.count(),
            bookings: await prisma.booking.count(),
            courses: await prisma.course.count(),
            gallery: await prisma.galleryImage.count(),
            posts: await prisma.post.count(),
        };
        console.log('Data Counts:', counts);

        if (counts.courses > 0) {
            const courses = await prisma.course.findMany({ take: 3 });
            console.log('Sample Courses:', JSON.stringify(courses, null, 2));
        }
    } catch (e) {
        console.error("Error connecting or counting:", e);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
