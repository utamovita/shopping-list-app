import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import type { SuccessResponse, UserProfile } from '@repo/types/api';
import type { Group } from '@prisma/client';

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
}
