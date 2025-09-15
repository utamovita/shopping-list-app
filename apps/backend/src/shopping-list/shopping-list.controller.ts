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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Shopping List')
@ApiBearerAuth()
@Controller('groups/:groupId/items')
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Get()
  @ApiOperation({ summary: "Get all items for a specific group's list" })
  @ApiParam({ name: 'groupId', description: 'ID of the group' })
  @ApiResponse({ status: 200, description: 'Returns a list of items.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User is not a member of this group.',
  })
  async getItems(
    @Param('groupId') groupId: string,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<ShoppingListItem[]>> {
    const items = await this.shoppingListService.getItems(groupId, req.user.id);
    return { success: true, data: items };
  }

  @Post()
  @ApiOperation({ summary: 'Add a new item to a shopping list' })
  @ApiParam({ name: 'groupId', description: 'ID of the group' })
  @ApiResponse({ status: 201, description: 'Item successfully added.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User is not a member of this group.',
  })
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
