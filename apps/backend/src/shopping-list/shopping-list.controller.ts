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
import { User } from '@prisma/client';

@Controller('groups/:groupId/items')
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Get()
  getItems(
    @Param('groupId') groupId: string,
    @Request() req: { user: Omit<User, 'passwordHash'> },
  ) {
    return this.shoppingListService.getItems(groupId, req.user.id);
  }

  @Post()
  addItem(
    @Param('groupId') groupId: string,
    @Body() createShoppingListItemDto: CreateShoppingListItemDto,
    @Request() req: { user: Omit<User, 'passwordHash'> },
  ) {
    return this.shoppingListService.addItem(
      groupId,
      createShoppingListItemDto,
      req.user.id,
    );
  }
}
