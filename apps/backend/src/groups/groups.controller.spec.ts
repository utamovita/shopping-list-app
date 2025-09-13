import { Test, TestingModule } from '@nestjs/testing';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { createMockGroup, createMockUser } from 'src/test-utils/mocks';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';

describe('GroupsController', () => {
  let controller: GroupsController;
  let service: GroupsService;

  const mockGroupsService = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [
        {
          provide: GroupsService,
          useValue: mockGroupsService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<GroupsController>(GroupsController);
    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call GroupsService.create with correct data and return a new group', async () => {
      const dto = { name: 'Test Group' };
      const mockUser = createMockUser({ id: 'user-123' });
      const mockRequest = { user: mockUser };
      const expectedGroup = createMockGroup({ name: dto.name });

      mockGroupsService.create.mockResolvedValue(expectedGroup);

      const result = await controller.create(dto, mockRequest);

      expect(service.create).toHaveBeenCalledWith(dto, mockUser.id);
      expect(result).toEqual({ success: true, data: expectedGroup });
    });
  });
});
