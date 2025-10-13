import { PrismaClient } from "../prisma/generated/client";

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

export { PrismaClient };

export type {
  User,
  Group,
  Invitation,
  ShoppingListItem,
  GroupMembership,
  Notification,
};
