import {
  Controller,
  Post,
  Get,
  Request,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import type { SuccessResponse, UserProfile } from '@repo/types/api';
import type { AuthResponseType } from '@repo/validation-schemas/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<SuccessResponse<AuthResponseType>> {
    const user = await this.authService.register(registerUserDto);
    return { success: true, data: user, message: 'success.register' };
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<SuccessResponse<AuthResponseType>> {
    const token = await this.authService.login(loginUserDto);
    return { success: true, data: token, message: 'success.login' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(
    @Request() req: { user: UserProfile },
  ): SuccessResponse<UserProfile> {
    return { success: true, data: req.user };
  }
}
