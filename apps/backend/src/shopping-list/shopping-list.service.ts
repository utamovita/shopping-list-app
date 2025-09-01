import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShoppingListItemDto } from './dto/create-shopping-list-item.dto';

@Injectable()
export class ShoppingListService {
  constructor(private prisma: PrismaService) {}

  async getItems(groupId: string, userId: string) {
    await this.checkIfUserIsMember(groupId, userId);

    return this.prisma.shoppingListItem.findMany({
      where: {
        groupId,
      },
    });
  }

  async addItem(
    groupId: string,
    createShoppingListItemDto: CreateShoppingListItemDto,
    userId: string,
  ) {
    await this.checkIfUserIsMember(groupId, userId);

    return this.prisma.shoppingListItem.create({
      data: {
        name: createShoppingListItemDto.name,
        groupId,
        addedBy: userId,
      },
    });
  }

  private async checkIfUserIsMember(groupId: string, userId: string) {
    const membership = await this.prisma.groupMembership.findUnique({
      where: {
        userId_groupId: {
          userId,
          groupId,
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException('validation.group.notAMember');
    }
  }
}
