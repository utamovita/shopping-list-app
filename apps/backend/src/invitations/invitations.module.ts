import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { GroupInvitationsController } from './groups-invitations.controller';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';

@Module({
  imports: [PrismaModule],
  providers: [InvitationsService],
  controllers: [InvitationsController, GroupInvitationsController],
})
export class InvitationsModule {}
