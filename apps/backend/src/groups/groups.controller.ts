import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Group } from '@repo/database';
import { Role } from '@repo/database';
import type {
  GroupWithDetails,
  SuccessResponse,
  UserProfile,
} from '@repo/types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';

@ApiTags('Groups')
@ApiBearerAuth()
@Controller('groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new group' })
  @ApiResponse({ status: 201, description: 'Group created successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async create(
    @Body() createGroupDto: CreateGroupDto,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<Group>> {
    const group = await this.groupsService.create(createGroupDto, req.user.id);
    return { success: true, data: group };
  }

  @Get()
  @ApiOperation({ summary: 'Get all groups for the current user' })
  @ApiResponse({ status: 200, description: 'Returns a list of groups.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async findAllForUser(
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<GroupWithDetails[]>> {
    const groups: GroupWithDetails[] = await this.groupsService.findAllForUser(
      req.user.id,
    );
    return { success: true, data: groups };
  }

  @Delete(':groupId')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a group (requires ADMIN role)' })
  @ApiResponse({ status: 204, description: 'Group deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async remove(@Param('groupId') groupId: string) {
    await this.groupsService.remove(groupId);
  }
}
