import { products } from "./data";
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();
// Seed the products into the database
async function main() {
    for (const product of products) {
      await prisma.product.create({
        data: product,
      });
    }
    console.log("seeded");
    
  }
  main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
