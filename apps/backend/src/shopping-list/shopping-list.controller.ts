import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { ShoppingListItem } from '@repo/database';
import type { SuccessResponse, UserProfile } from '@repo/types';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

import {
  CreateShoppingListItemDto,
  ShoppingListItemParamsDto,
  UpdateShoppingListItemDto,
} from './dto/shopping-list-item.dto';
import { ShoppingListService } from './shopping-list.service';

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
    @Param() params: Pick<ShoppingListItemParamsDto, 'groupId'>,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<ShoppingListItem[]>> {
    const items = await this.shoppingListService.getItems(
      params.groupId,
      req.user.id,
    );
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
    @Param() params: Pick<ShoppingListItemParamsDto, 'groupId'>,
    @Body() createShoppingListItemDto: CreateShoppingListItemDto,
    @Request() req: { user: UserProfile },
  ): Promise<SuccessResponse<ShoppingListItem>> {
    const newItem = await this.shoppingListService.addItem(
      params.groupId,
      createShoppingListItemDto,
      req.user.id,
    );
    return { success: true, data: newItem };
  }

  @Delete(':itemId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeItem(
    @Param() params: ShoppingListItemParamsDto,
    @Request() req: { user: UserProfile },
  ) {
    await this.shoppingListService.removeItem(
      params.itemId,
      params.groupId,
      req.user.id,
    );
  }

  @Patch(':itemId')
  @ApiOperation({ summary: 'Update a shopping list item' })
  async updateItem(
    @Param() params: ShoppingListItemParamsDto,
    @Request() req: { user: UserProfile },
    @Body() updateDto: UpdateShoppingListItemDto,
  ): Promise<SuccessResponse<ShoppingListItem>> {
    const updatedItem = await this.shoppingListService.updateItem(
      params.itemId,
      params.groupId,
      req.user.id,
      updateDto,
    );
    return { success: true, data: updatedItem };
  }
}
