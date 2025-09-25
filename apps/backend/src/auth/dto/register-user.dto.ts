import { ApiProperty } from '@nestjs/swagger';
import { registerSchema } from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class RegisterUserDto extends createZodDto(registerSchema) {
  @ApiProperty({
    example: 'johndoe@example.pl',
    description: 'The email of the user to be registered.',
  })
  email!: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user to be registered.',
  })
  username!: string;

  @ApiProperty({
    example: 'JohnPaul2137!',
    description:
      'The password of the user to be registered. Must be at least 8 characters long.',
  })
  password!: string;
}
