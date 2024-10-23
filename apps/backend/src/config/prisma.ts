import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient();  // Shared Prisma Client

// Connect to the database
export async function dbConnect() {
    try {
        await prisma.$connect();
        console.log('Prisma connected');
    } catch (error) {
        console.error('Error connecting to Prisma', error);
    }
}

// Disconnect the database
export async function dbDisconnect() {
    await prisma.$disconnect();
    console.log('Prisma disconnected');
}

