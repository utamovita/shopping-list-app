import {
  Body,
  Controller,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from '@repo/database';
import type { Invitation, SuccessResponse, UserProfile } from '@repo/types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

import { CreateInvitationDto } from './dto/create-invitation.dto';
import { InvitationsService } from './invitations.service';

@ApiTags('Groups')
@ApiBearerAuth()
@Controller('groups/:groupId/invitations')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GroupInvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Invite a user to a group (requires ADMIN role)' })
  async create(
    @Param('groupId') groupId: string,
    @Request() req: { user: UserProfile },
    @Body() createInvitationDto: CreateInvitationDto,
  ): Promise<SuccessResponse<Invitation>> {
    const invitation = await this.invitationsService.create(
      groupId,
      req.user.id,
      createInvitationDto.email,
    );
    return { success: true, data: invitation };
  }
}
