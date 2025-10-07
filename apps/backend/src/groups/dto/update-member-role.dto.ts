import { updateMemberRoleSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class UpdateMemberRoleDto extends createZodDto(updateMemberRoleSchema) {}
