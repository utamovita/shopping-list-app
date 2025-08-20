import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { User } from '@prisma/client';

@Controller('groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(
    @Body() createGroupDto: CreateGroupDto,
    @Request() req: { user: Omit<User, 'passwordHash'> },
  ) {
    return this.groupsService.create(createGroupDto, req.user.id);
  }
}
