const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrateBookings() {
    console.log("Migrating bookings from 'admin2.bookings' to 'dbo.bookings'...");
    try {
        // 1. Read from legacy table
        const legacyBookings = await prisma.$queryRaw`
      SELECT * FROM [admin2].[bookings]
    `;

        console.log(`Found ${legacyBookings.length} legacy bookings.`);

        // 2. Insert into new table (Prisma model 'Booking' maps to 'dbo.bookings' by default or 'bookings' in default schema)
        // My schema maps Booking to "bookings". Inspect showed "dbo.bookings" exists.

        for (const b of legacyBookings) {
            // Check if already exists to avoid dupes (basic check by email+date)
            const exists = await prisma.booking.findFirst({
                where: {
                    email: b.email,
                    date_booked: b.date_booked,
                }
            });

            if (!exists) {
                await prisma.booking.create({
                    data: {
                        customer_name: b.customer_name,
                        email: b.email,
                        phone: b.phone,
                        class_name: b.class_name,
                        date_booked: b.date_booked,
                        status: b.status || 'Pending',
                        experience_level: b.experience_level,
                        message: b.message,
                        created_at: b.created_at ? new Date(b.created_at) : new Date(),
                    }
                });
                console.log(`Migrated: ${b.email}`);
            } else {
                console.log(`Skipped (exists): ${b.email}`);
            }
        }
        console.log("Migration complete.");

    } catch (e) {
        console.error("Migration failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

migrateBookings();
