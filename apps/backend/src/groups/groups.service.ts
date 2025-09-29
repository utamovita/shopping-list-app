import { Injectable } from '@nestjs/common';
import { Role } from '@repo/database';
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
          role: Role.ADMIN,
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
