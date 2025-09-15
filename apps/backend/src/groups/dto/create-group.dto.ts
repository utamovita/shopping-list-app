import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({ example: 'Family', description: 'The name of the group' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
