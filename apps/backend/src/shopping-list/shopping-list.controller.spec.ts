import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingListService } from './shopping-list.service';
import { createMockUser } from 'src/test-utils/mocks';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';

describe('ShoppingListController', () => {
  let controller: ShoppingListController;
  let service: ShoppingListService;

  const mockShoppingListService = {
    getItems: jest.fn(),
    addItem: jest.fn(),
    removeItem: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingListController],
      providers: [
        {
          provide: ShoppingListService,
          useValue: mockShoppingListService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<ShoppingListController>(ShoppingListController);
    service = module.get<ShoppingListService>(ShoppingListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const mockUser = createMockUser({ id: 'user-123' });
  const mockRequest = { user: mockUser };
  const groupId = 'group-123';
  const itemId = 'item-123';

  describe('getItems', () => {
    it('should call service.getItems with correct params and return items', async () => {
      const mockItems = [{ id: 'item-1', name: 'Milk' }];
      mockShoppingListService.getItems.mockResolvedValue(mockItems);

      const result = await controller.getItems({ groupId }, mockRequest);

      expect(service.getItems).toHaveBeenCalledWith(groupId, mockUser.id);
      expect(result).toEqual({ success: true, data: mockItems });
    });
  });

  describe('addItem', () => {
    it('should call service.addItem with correct params and return the new item', async () => {
      const dto = { name: 'Bread' };
      const newItem = { id: 'item-2', name: 'Bread' };
      mockShoppingListService.addItem.mockResolvedValue(newItem);

      const result = await controller.addItem({ groupId }, dto, mockRequest);

      expect(service.addItem).toHaveBeenCalledWith(groupId, dto, mockUser.id);
      expect(result).toEqual({ success: true, data: newItem });
    });
  });

  describe('removeItem', () => {
    it('should call service.removeItem with correct params', async () => {
      mockShoppingListService.removeItem.mockResolvedValue(undefined);

      await controller.removeItem({ groupId, itemId }, mockRequest);

      expect(service.removeItem).toHaveBeenCalledWith(
        itemId,
        groupId,
        mockUser.id,
      );
    });
  });
});
