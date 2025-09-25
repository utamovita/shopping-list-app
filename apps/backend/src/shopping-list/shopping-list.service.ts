import { ForbiddenException, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EVENT_NAME } from '@repo/config';
import { PrismaService } from 'src/prisma/prisma.service';

import {
  CreateShoppingListItemDto,
  UpdateShoppingListItemDto,
} from './dto/shopping-list-item.dto';

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

    this.eventEmitter.emit(EVENT_NAME.shoppingListUpdated, groupId);
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

    this.eventEmitter.emit(EVENT_NAME.shoppingListUpdated, groupId);
    return deletedItem;
  }
  async updateItem(
    itemId: string,
    groupId: string,
    userId: string,
    updateDto: UpdateShoppingListItemDto,
  ) {
    await this.checkIfUserIsMember(groupId, userId);

    const updatedItem = await this.prisma.shoppingListItem.update({
      where: { id: itemId, groupId: groupId },
      data: {
        completed: updateDto.completed,
      },
    });

    this.eventEmitter.emit(EVENT_NAME.shoppingListUpdated, groupId);
    return updatedItem;
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
