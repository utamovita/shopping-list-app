import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Invitation, SuccessResponse, UserProfile } from '@repo/types';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

import { InvitationsService } from './invitations.service';

@ApiTags('Invitations')
@ApiBearerAuth()
@Controller('invitations')
@UseGuards(JwtAuthGuard)
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Get('received')
  @ApiOperation({ summary: 'Get all received pending invitations' })
  async findAllReceivedForUser(
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<Invitation[]>> {
    const invitations = await this.invitationsService.findAllReceivedForUser(
      req.user.id,
    );
    return { success: true, data: invitations };
  }

  @Post(':invitationId/accept')
  @ApiOperation({ summary: 'Accept a group invitation' })
  async accept(
    @Param('invitationId') invitationId: string,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<null>> {
    await this.invitationsService.accept(invitationId, req.user.id);
    return { success: true, data: null };
  }

  @Post(':invitationId/decline')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Decline a group invitation' })
  async decline(
    @Param('invitationId') invitationId: string,
    @Request() req: { user: UserProfile },
  ) {
    await this.invitationsService.decline(invitationId, req.user.id);
  }
}
