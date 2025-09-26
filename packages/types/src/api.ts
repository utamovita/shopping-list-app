import type {
  User,
  Group,
  Invitation as PrismaInvitation,
} from "@repo/database";

export type SuccessResponse<T> = {
  success: true;
  data: T;
  message?: string;
};

export type ErrorResponse = {
  success: false;
  error: {
    message: string;
    details?: any;
  };
};

export type UserProfile = Omit<
  User,
  "passwordHash" | "provider" | "createdAt" | "updatedAt"
>;

export type GroupMember = {
  user: {
    id: string;
    name: string | null;
  };
};

export type GroupWithDetails = Group & {
  _count: {
    shoppingItems: number;
  };
  members: GroupMember[];
};

export type Invitation = PrismaInvitation & {
  group: {
    id: string;
    name: string;
  };
  invitedByUser: {
    id: string;
    name: string | null;
  };
};
