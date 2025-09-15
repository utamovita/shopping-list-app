import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    example: 'johndoe@example.pl',
    description: 'The email of the user to be registered.',
  })
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the user to be registered.',
  })
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long.' })
  username: string;

  @ApiProperty({
    example: 'JohnPaul2137!',
    description:
      'The password of the user to be registered. Must be at least 8 characters long.',
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password: string;
}
