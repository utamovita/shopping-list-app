import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Proszę podać poprawny adres email.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Hasło nie może być puste.' })
  password: string;
}
