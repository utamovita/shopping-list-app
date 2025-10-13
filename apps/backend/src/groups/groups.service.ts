import { ForbiddenException, Injectable } from '@nestjs/common';
import type { Role } from '@repo/types';
import { GroupWithDetails } from '@repo/types';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async findAllForUser(userId: string): Promise<GroupWithDetails[]> {
    const groups = await this.prisma.group.findMany({
      where: {
        members: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        _count: {
          select: { shoppingItems: true },
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return groups.map((group) => {
      const currentUserMembership = group.members.find(
        (m) => m.userId === userId,
      );
      return { ...group, currentUserRole: currentUserMembership?.role };
    });
  }

  async create(createGroupDto: CreateGroupDto, userId: string) {
    const { name } = createGroupDto;

    const newGroup = await this.prisma.$transaction(async (tx) => {
      const group = await tx.group.create({
        data: {
          name,
        },
      });

      await tx.groupMembership.create({
        data: {
          userId,
          groupId: group.id,
          role: 'ADMIN' as Role,
        },
      });

      return group;
    });

    return newGroup;
  }

  async remove(groupId: string) {
    return this.prisma.group.delete({
      where: {
        id: groupId,
      },
    });
  }

  async update(groupId: string, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id: groupId },
      data: { name: updateGroupDto.name },
    });
  }

  async removeMember(groupId: string, memberId: string) {
    const memberCount = await this.prisma.groupMembership.count({
      where: { groupId },
    });

    if (memberCount <= 1) {
      throw new ForbiddenException(
        'You cannot remove the last member of a group. Delete the group instead.',
      );
    }

    return this.prisma.groupMembership.delete({
      where: {
        userId_groupId: {
          userId: memberId,
          groupId: groupId,
        },
      },
    });
  }

  async updateMemberRole(
    groupId: string,
    memberId: string,
    updateDto: UpdateMemberRoleDto,
  ) {
    if (updateDto.role === ('USER' as Role)) {
      const membership = await this.prisma.groupMembership.findUnique({
        where: {
          userId_groupId: {
            userId: memberId,
            groupId: groupId,
          },
        },
      });

      if (membership?.role === ('ADMIN' as Role)) {
        const adminCount = await this.prisma.groupMembership.count({
          where: {
            groupId: groupId,
            role: 'ADMIN' as Role,
          },
        });

        if (adminCount <= 1) {
          throw new ForbiddenException(
            'Cannot remove the last admin from the group.',
          );
        }
      }
    }

    return this.prisma.groupMembership.update({
      where: {
        userId_groupId: {
          userId: memberId,
          groupId: groupId,
        },
      },
      data: {
        role: updateDto.role,
      },
    });
  }
}
