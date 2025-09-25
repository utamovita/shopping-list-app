import { createZodDto } from 'nestjs-zod';
import { createInvitationSchema } from '@repo/schemas';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvitationDto extends createZodDto(createInvitationSchema) {
  @ApiProperty({
    example: 'friend@example.com',
    description: 'Email of the user to invite',
  })
  email!: string;
}
