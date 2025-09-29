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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Group, Role } from '@repo/database';
import { SuccessResponse } from '@repo/types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';

@ApiTags('Groups')
@ApiBearerAuth()
@Controller('groups/:groupId')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
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
  @ApiResponse({ status: 204, description: 'Group deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async remove(@Param('groupId') groupId: string) {
    await this.groupsService.remove(groupId);
  }
}
