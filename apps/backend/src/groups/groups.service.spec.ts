import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Group, Role } from '@prisma/client';
import { createMockGroup } from 'src/test-utils/mocks';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('GroupsService', () => {
  let service: GroupsService;
  let prisma: PrismaService;

  const mockTx = {
    group: { create: jest.fn() },
    groupMembership: { create: jest.fn() },
  };

  const mockPrismaService = {
    group: { findMany: jest.fn() },
    $transaction: jest
      .fn()
      .mockImplementation(
        async (callback: (tx: typeof mockTx) => Promise<Group>) => {
          return await callback(mockTx);
        },
      ),
  };

  const mockEventEmitter = {
    emit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: EventEmitter2, useValue: mockEventEmitter },
      ],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
    prisma = module.get<PrismaService>(PrismaService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a group and assign the creator as an admin within a transaction (happy path)', async () => {
      const dto = { name: 'Test Group' };
      const userId = 'user-123';
      const createdGroup = createMockGroup({ name: dto.name });

      mockTx.group.create.mockResolvedValue(createdGroup);

      const result = await service.create(dto, userId);

      expect(prisma.$transaction).toHaveBeenCalled();
      expect(mockTx.group.create).toHaveBeenCalledWith({
        data: {
          name: dto.name,
        },
      });
      expect(mockTx.groupMembership.create).toHaveBeenCalledWith({
        data: {
          userId: userId,
          groupId: createdGroup.id,
          role: Role.ADMIN,
        },
      });
      expect(result).toEqual(createdGroup);
    });

    it('should propagate errors from the transaction (sad path)', async () => {
      const dto = { name: 'Test Group' };
      const userId = 'user-123';
      const dbError = new Error('Database transaction failed');

      mockPrismaService.$transaction.mockRejectedValue(dbError);

      await expect(service.create(dto, userId)).rejects.toThrow(dbError);
    });
  });

  describe('findAllForUser', () => {
    it('should return a list of groups for a user', async () => {
      const userId = 'user-123';
      const expectedGroups = [createMockGroup()];
      mockPrismaService.group.findMany.mockResolvedValue(expectedGroups);

      const result = await service.findAllForUser(userId);

      expect(prisma.group.findMany).toHaveBeenCalledWith({
        where: { members: { some: { userId } } },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        include: expect.any(Object),
      });
      expect(result).toEqual(expectedGroups);
    });
  });
});
