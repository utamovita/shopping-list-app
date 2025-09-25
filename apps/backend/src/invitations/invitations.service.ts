import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvitationsService {
  constructor(private prisma: PrismaService) {}

  async create(groupId: string, invitingUserId: string, invitedEmail: string) {
    if (!invitedEmail) {
      throw new BadRequestException('Email is required.');
    }

    const invitedUser = await this.prisma.user.findUnique({
      where: { email: invitedEmail },
    });

    if (!invitedUser) {
      throw new NotFoundException('User with this email not found.');
    }

    if (invitingUserId === invitedUser.id) {
      throw new BadRequestException('You cannot invite yourself.');
    }

    const existingMembership = await this.prisma.groupMembership.findFirst({
      where: { groupId, userId: invitedUser.id },
    });

    if (existingMembership) {
      throw new ConflictException(
        'This user is already a member of the group.',
      );
    }

    const existingInvitation = await this.prisma.invitation.findFirst({
      where: { groupId, email: invitedEmail },
    });

    if (existingInvitation) {
      throw new ConflictException(
        'An invitation has already been sent to this user for this group.',
      );
    }

    return this.prisma.invitation.create({
      data: {
        email: invitedEmail,
        groupId,
        invitedByUserId: invitingUserId,
      },
    });
  }
}
