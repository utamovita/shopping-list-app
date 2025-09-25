import { Group, User } from '@repo/database';

export const createMockUser = (overrides: Partial<User> = {}): User => {
  const defaultUser: User = {
    id: 'default-user-id',
    email: 'test@example.com',
    name: 'Default User',
    passwordHash: 'default-hashed-password',
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
