import { PrismaClient } from "@prisma/client";
import { PrismaUserRepository } from "./prisma/PrismaUserRepository";

const prisma = new PrismaClient();
const prismaUserRepository = new PrismaUserRepository(prisma);

export { prismaUserRepository };
