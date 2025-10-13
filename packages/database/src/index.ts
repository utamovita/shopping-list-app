import { PrismaClient } from "../prisma/generated/client";

export * from "@prisma/client";

export const prisma = new PrismaClient();
export default prisma;
