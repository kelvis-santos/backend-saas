// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "johndoe@example.com",
            password: "password123",
            active: true,
            firstname: "John",
            lastname: "Doe",
            birthdate: new Date("1990-01-01"),
            phone: "1234567890",
            phone2: "0987654321",
            zip: "12345",
            number: 123,
            address: "123 Main St",
            city: "New York",
            state: "NY",
            country: "USA",
        },
    });
    console.log("User created:", user);
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });