import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Group, Role } from '@prisma/client';

describe('GroupsService', () => {
  let service: GroupsService;
  let prisma: PrismaService;

  const mockTx = {
    group: {
      create: jest.fn(),
    },
    groupMembership: {
      create: jest.fn(),
    },
  };

  const mockPrismaService = {
    $transaction: jest
      .fn()
      .mockImplementation(
        async (callback: (tx: typeof mockTx) => Promise<Group>) => {
          return await callback(mockTx);
        },
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
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
      const createdGroup = { id: 'group-123', name: dto.name } as Group;

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
});
