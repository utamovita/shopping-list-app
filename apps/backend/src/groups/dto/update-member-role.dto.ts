import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@repo/database';
import { updateMemberRoleSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class UpdateMemberRoleDto extends createZodDto(updateMemberRoleSchema) {
  @ApiProperty({ enum: Role, example: Role.ADMIN })
  role!: Role;
}
