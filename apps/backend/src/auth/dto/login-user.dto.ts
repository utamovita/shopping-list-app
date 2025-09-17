import { createZodDto } from 'nestjs-zod';
import { loginSchema } from '@repo/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto extends createZodDto(loginSchema) {
  @ApiProperty({
    description: 'The email of the user trying to log in.',
    example: 'johndoe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user trying to log in.',
    example: 'S3cureP@ssw0rd!',
  })
  password: string;
}
