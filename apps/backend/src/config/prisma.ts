import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export async function dbConnect() {
    try {
        await prisma.$connect();
        console.log('Prisma connected');
    } catch (error) {
        console.error('Error connecting to Prisma', error);
    }
}

export async function disconnect() {
    await prisma.$disconnect();
}