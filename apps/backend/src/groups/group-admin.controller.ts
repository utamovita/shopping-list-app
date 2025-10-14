import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Group, GroupMembership } from '@repo/database';
import { ROLES, SuccessResponse } from '@repo/types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

import { UpdateGroupDto } from './dto/update-group.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
import { GroupsService } from './groups.service';

@ApiTags('Groups')
@ApiBearerAuth()
@Controller('groups/:groupId')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(ROLES.ADMIN)
export class GroupAdminController {
  constructor(private readonly groupsService: GroupsService) {}

  @Patch()
  @ApiOperation({ summary: 'Update a group name (requires ADMIN role)' })
  async update(
    @Param('groupId') groupId: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ): Promise<SuccessResponse<Group>> {
    const group = await this.groupsService.update(groupId, updateGroupDto);
    return { success: true, data: group };
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a group (requires ADMIN role)' })
  async remove(@Param('groupId') groupId: string) {
    await this.groupsService.remove(groupId);
  }

  @Patch('members/:memberId')
  @ApiOperation({ summary: "Update a member's role (requires ADMIN role)" })
  async updateMemberRole(
    @Param('groupId') groupId: string,
    @Param('memberId') memberId: string,
    @Body() updateDto: UpdateMemberRoleDto,
  ): Promise<SuccessResponse<GroupMembership>> {
    const membership = await this.groupsService.updateMemberRole(
      groupId,
      memberId,
      updateDto,
    );
    return { success: true, data: membership };
  }

  @Delete('members/:memberId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remove a member from a group (requires ADMIN role)',
  })
  async removeMember(
    @Param('groupId') groupId: string,
    @Param('memberId') memberId: string,
  ) {
    await this.groupsService.removeMember(groupId, memberId);
  }
}
