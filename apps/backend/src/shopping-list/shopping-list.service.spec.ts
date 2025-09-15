import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListService } from './shopping-list.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common';
import { ShoppingListItem } from '@prisma/client';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('ShoppingListService', () => {
  let service: ShoppingListService;
  let prisma: PrismaService;
  let eventEmitter: EventEmitter2;

  const mockPrismaService = {
    groupMembership: {
      findUnique: jest.fn(),
    },
    shoppingListItem: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  const mockEventEmitter = {
    emit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShoppingListService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: EventEmitter2,
          useValue: mockEventEmitter,
        },
      ],
    }).compile();

    service = module.get<ShoppingListService>(ShoppingListService);
    prisma = module.get<PrismaService>(PrismaService);
    eventEmitter = module.get<EventEmitter2>(EventEmitter2);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const userId = 'user-123';
  const groupId = 'group-123';

  describe('addItem', () => {
    it('should add an item if user is a member (happy path)', async () => {
      const dto = { name: 'Milk' };
      const expectedItem = {
        id: 'item-1',
        name: 'Milk',
        groupId,
      } as ShoppingListItem;

      mockPrismaService.groupMembership.findUnique.mockResolvedValue({});
      mockPrismaService.shoppingListItem.create.mockResolvedValue(expectedItem);

      const result = await service.addItem(groupId, dto, userId);

      expect(prisma.shoppingListItem.create).toHaveBeenCalledWith({
        data: {
          name: dto.name,
          groupId,
          addedBy: userId,
        },
      });
      expect(eventEmitter.emit).toHaveBeenCalledWith(
        'shopping_list.updated',
        groupId,
      );
      expect(result).toEqual(expectedItem);
    });

    it('should throw ForbiddenException if user is not a member (sad path)', async () => {
      const dto = { name: 'Milk' };

      mockPrismaService.groupMembership.findUnique.mockResolvedValue(null);

      await expect(service.addItem(groupId, dto, userId)).rejects.toThrow(
        ForbiddenException,
      );

      expect(eventEmitter.emit).not.toHaveBeenCalled();
    });
  });

  describe('getItems', () => {
    it('should return items if user is a member (happy path)', async () => {
      const expectedItems = [
        { id: 'item-1', name: 'Milk', groupId },
      ] as ShoppingListItem[];

      mockPrismaService.groupMembership.findUnique.mockResolvedValue({});
      mockPrismaService.shoppingListItem.findMany.mockResolvedValue(
        expectedItems,
      );

      const result = await service.getItems(groupId, userId);

      expect(prisma.shoppingListItem.findMany).toHaveBeenCalledWith({
        where: { groupId },
      });
      expect(result).toEqual(expectedItems);
    });

    it('should throw ForbiddenException if user is not a member (sad path)', async () => {
      mockPrismaService.groupMembership.findUnique.mockResolvedValue(null);

      await expect(service.getItems(groupId, userId)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });
});
