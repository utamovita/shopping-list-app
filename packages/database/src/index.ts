import { PrismaClient, Prisma } from "../prisma/generated/client";

import type {
  User,
  Group,
  Invitation,
  ShoppingListItem,
  GroupMembership,
  Notification,
} from "../prisma/generated/client";

const prisma = new PrismaClient();

export default prisma;

export { PrismaClient, Prisma };

export type {
  User,
  Group,
  Invitation,
  ShoppingListItem,
  GroupMembership,
  Notification,
};
