import { ApiProperty } from '@nestjs/swagger';
import { createInvitationSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateInvitationDto extends createZodDto(createInvitationSchema) {
  @ApiProperty({
    example: 'friend@example.com',
    description: 'Email of the user to invite',
  })
  email!: string;
}
