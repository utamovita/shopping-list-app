import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShoppingListItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
