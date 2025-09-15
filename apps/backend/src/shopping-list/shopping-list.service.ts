import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShoppingListItemDto } from './dto/create-shopping-list-item.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ShoppingListService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

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

    const newItem = await this.prisma.shoppingListItem.create({
      data: {
        name: createShoppingListItemDto.name,
        groupId,
        addedBy: userId,
      },
    });

    this.eventEmitter.emit('shopping_list.updated', groupId);
    return newItem;
  }

  async removeItem(itemId: string, groupId: string, userId: string) {
    await this.checkIfUserIsMember(groupId, userId);

    const deletedItem = await this.prisma.shoppingListItem.delete({
      where: {
        id: itemId,
        groupId: groupId,
      },
    });

    this.eventEmitter.emit('shopping_list.updated', groupId);
    return deletedItem;
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
      throw new ForbiddenException('group.notAMember');
    }
  }
}
