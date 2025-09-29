import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { createMockGroup } from 'src/test-utils/mocks';

import { GroupAdminController } from './group-admin.controller';
import { GroupsService } from './groups.service';

describe('GroupAdminController', () => {
  let controller: GroupAdminController;
  let service: GroupsService;

  const mockGroupsService = {
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupAdminController],
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

    controller = module.get<GroupAdminController>(GroupAdminController);
    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('update', () => {
    it('should call service.update with correct params and return the updated group', async () => {
      const groupId = 'group-123';
      const dto = { name: 'New Group Name' };
      const expectedGroup = createMockGroup({ id: groupId, name: dto.name });
      mockGroupsService.update.mockResolvedValue(expectedGroup);

      const result = await controller.update(groupId, dto);

      expect(service.update).toHaveBeenCalledWith(groupId, dto);
      expect(result).toEqual({ success: true, data: expectedGroup });
    });
  });

  describe('remove', () => {
    it('should call service.remove with the correct group id', async () => {
      const groupId = 'group-123';
      mockGroupsService.remove.mockResolvedValue(undefined);

      await controller.remove(groupId);

      expect(service.remove).toHaveBeenCalledWith(groupId);
    });
  });
});
