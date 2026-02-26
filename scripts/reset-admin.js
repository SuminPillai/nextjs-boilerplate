const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function resetAdmin() {
    const username = 'admin';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(`Resetting password for user: ${username}`);

    try {
        const user = await prisma.admin.upsert({
            where: { username },
            update: { password_hash: hashedPassword },
            create: {
                username,
                password_hash: hashedPassword,
            },
        });
        console.log('Success! Admin user updated:', user);
    } catch (e) {
        console.error('Error resetting password:', e);
    } finally {
        await prisma.$disconnect();
    }
}

resetAdmin();
