import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingListService } from './shopping-list.service';
import { createMockUser } from 'src/test-utils/mocks';

describe('ShoppingListController', () => {
  let controller: ShoppingListController;
  let service: ShoppingListService;

  const mockShoppingListService = {
    getItems: jest.fn(),
    addItem: jest.fn(),
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
    }).compile();

    controller = module.get<ShoppingListController>(ShoppingListController);
    service = module.get<ShoppingListService>(ShoppingListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const mockUser = createMockUser({ id: 'user-123' });
  const mockRequest = { user: mockUser };
  const groupId = 'group-123';

  describe('getItems', () => {
    it('should call service.getItems with correct params and return items', async () => {
      const mockItems = [{ id: 'item-1', name: 'Milk' }];
      mockShoppingListService.getItems.mockResolvedValue(mockItems);

      const result = await controller.getItems(groupId, mockRequest);

      expect(service.getItems).toHaveBeenCalledWith(groupId, mockUser.id);
      expect(result).toEqual({ success: true, data: mockItems });
    });
  });

  describe('addItem', () => {
    it('should call service.addItem with correct params and return the new item', async () => {
      const dto = { name: 'Bread' };
      const newItem = { id: 'item-2', name: 'Bread' };
      mockShoppingListService.addItem.mockResolvedValue(newItem);

      const result = await controller.addItem(groupId, dto, mockRequest);

      expect(service.addItem).toHaveBeenCalledWith(groupId, dto, mockUser.id);
      expect(result).toEqual({ success: true, data: newItem });
    });
  });
});
