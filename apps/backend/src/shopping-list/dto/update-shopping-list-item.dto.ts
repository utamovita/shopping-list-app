import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateShoppingListItemDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  completed: boolean;
}
