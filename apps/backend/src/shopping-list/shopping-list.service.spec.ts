import { ForbiddenException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { EVENT_NAME } from '@repo/config';
import { ShoppingListItem } from '@repo/database';
import { PrismaService } from 'src/prisma/prisma.service';

import { ShoppingListService } from './shopping-list.service';

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
      deleteMany: jest.fn(),
      aggregate: jest.fn(),
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

  const mockItems = [
    {
      id: 'item-1',
      name: 'Milk',
      quantity: 1,
      groupId,
    },
    {
      id: 'item-2',
      name: 'Bread',
      quantity: 1,
      groupId,
    },
    {
      id: 'item-3',
      name: 'Cheese',
      quantity: 1,
      groupId,
    },
  ] as const;

  describe('addItem', () => {
    it('should add an item if user is a member (happy path)', async () => {
      const dto = { name: 'Milk', quantity: 1 };
      const expectedItem = {
        id: 'item-1',
        name: 'Milk',
        quantity: 1,
        groupId,
      } as ShoppingListItem;

      mockPrismaService.groupMembership.findUnique.mockResolvedValue({});
      mockPrismaService.shoppingListItem.aggregate.mockResolvedValue({
        _max: { order: null },
      });
      mockPrismaService.shoppingListItem.create.mockResolvedValue(expectedItem);

      const result = await service.addItem(groupId, dto, userId);

      expect(prisma.shoppingListItem.create).toHaveBeenCalledWith({
        data: {
          name: dto.name,
          quantity: dto.quantity,
          groupId,
          addedBy: userId,
          order: 0,
        },
      });
      expect(eventEmitter.emit).toHaveBeenCalledWith(
        EVENT_NAME.shoppingListUpdated,
        groupId,
      );
      expect(result).toEqual(expectedItem);
    });

    it('should throw ForbiddenException if user is not a member (sad path)', async () => {
      const dto = { name: 'Milk', quantity: 1 };

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
        orderBy: { order: 'asc' },
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

  describe('removeItems', () => {
    it('should remove an item and emit an event if user is a member', async () => {
      mockPrismaService.groupMembership.findUnique.mockResolvedValue({});
      mockPrismaService.shoppingListItem.deleteMany.mockResolvedValue({
        count: 1,
      });

      await service.removeItems([mockItems[0].id], groupId, userId);

      expect(prisma.shoppingListItem.deleteMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: [mockItems[0].id],
          },
          groupId,
        },
      });

      expect(eventEmitter.emit).toHaveBeenCalledWith(
        EVENT_NAME.shoppingListUpdated,
        groupId,
      );
    });

    it('should throw ForbiddenException if user is not a member', async () => {
      mockPrismaService.groupMembership.findUnique.mockResolvedValue(null);

      await expect(
        service.removeItems([mockItems[0].id], groupId, userId),
      ).rejects.toThrow(ForbiddenException);
      expect(eventEmitter.emit).not.toHaveBeenCalled();
    });
  });
});
