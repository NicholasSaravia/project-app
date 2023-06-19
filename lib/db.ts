import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    prisma = new PrismaClient();
  } else {
    prisma = cachedPrisma;
  }
}

export const db = prisma;
