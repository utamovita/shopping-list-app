import { ApiProperty } from '@nestjs/swagger';
import { loginSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class LoginUserDto extends createZodDto(loginSchema) {
  @ApiProperty({
    description: 'The email of the user trying to log in.',
    example: 'johndoe@example.com',
  })
  email!: string;

  @ApiProperty({
    description: 'The password of the user trying to log in.',
    example: 'JohnPaul2137!',
  })
  password!: string;
}
