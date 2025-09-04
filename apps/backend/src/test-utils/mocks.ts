import { Group, User } from '@prisma/client';

export const createMockUser = (
  overrides: Partial<User> = {},
): Omit<User, 'passwordHash'> => {
  const defaultUser: Omit<User, 'passwordHash'> = {
    id: 'default-user-id',
    email: 'test@example.com',
    name: 'Default User',
    provider: 'credentials',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return { ...defaultUser, ...overrides };
};

export const createMockGroup = (overrides: Partial<Group> = {}): Group => {
  const defaultGroup: Group = {
    id: 'default-group-id',
    name: 'Default Group',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return { ...defaultGroup, ...overrides };
};
