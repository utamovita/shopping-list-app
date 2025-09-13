import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreateShoppingListItemDto } from './dto/create-shopping-list-item.dto';
import type {
  SuccessResponse,
  UserProfile,
  ShoppingListItem,
} from '@repo/types/api';

@Controller('groups/:groupId/items')
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Get()
  async getItems(
    @Param('groupId') groupId: string,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<ShoppingListItem[]>> {
    const items = await this.shoppingListService.getItems(groupId, req.user.id);
    return { success: true, data: items };
  }

  @Post()
  async addItem(
    @Param('groupId') groupId: string,
    @Body() createShoppingListItemDto: CreateShoppingListItemDto,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<ShoppingListItem>> {
    const newItem = await this.shoppingListService.addItem(
      groupId,
      createShoppingListItemDto,
      req.user.id,
    );
    return { success: true, data: newItem };
  }
}
