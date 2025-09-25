import { ApiProperty } from '@nestjs/swagger';
import { createGroupSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateGroupDto extends createZodDto(createGroupSchema) {
  @ApiProperty({ example: 'Family', description: 'The name of the group' })
  name!: string;
}
