import { ApiProperty } from '@nestjs/swagger';
import { updateGroupSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class UpdateGroupDto extends createZodDto(updateGroupSchema) {
  @ApiProperty({ example: 'Family group' })
  name!: string;
}
