import { PrismaClient } from "@prisma/client";
import { PrismaUserRepository } from "./prisma/PrismaUserRepository";

const prisma = new PrismaClient()
const userRepository = new PrismaUserRepository(prisma)

export {
  userRepository
}