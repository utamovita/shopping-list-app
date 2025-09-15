import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    example: 'johndoe@example.pl',
    description: 'The email of the user trying to log in.',
  })
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email: string;

  @ApiProperty({
    example: 'JohnPaul2137!',
    description: 'The password of the user trying to log in.',
  })
  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty.' })
  password: string;
}
