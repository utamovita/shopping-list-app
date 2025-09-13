import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  UseGuards,
  Request,
  HttpStatus,
  Param,
  HttpCode,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import type { SuccessResponse, UserProfile } from '@repo/types/api';
import type { Group } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Controller('groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async create(
    @Body() createGroupDto: CreateGroupDto,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<Group>> {
    const group = await this.groupsService.create(createGroupDto, req.user.id);
    return { success: true, data: group };
  }

  @Get()
  async findAllForUser(
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<Group[]>> {
    const groups = await this.groupsService.findAllForUser(req.user.id);
    return { success: true, data: groups };
  }

  @Delete(':groupId')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('groupId') groupId: string) {
    await this.groupsService.remove(groupId);
  }
}
