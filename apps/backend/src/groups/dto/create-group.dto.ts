import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import { createGroupSchema } from '@repo/schemas';

export class CreateGroupDto extends createZodDto(createGroupSchema) {
  @ApiProperty({ example: 'Family', description: 'The name of the group' })
  name!: string;
}
