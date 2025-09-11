import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { Role } from '@prisma/client';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

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

  async findAllForUser(userId: string) {
    return this.prisma.group.findMany({
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
  }
}
