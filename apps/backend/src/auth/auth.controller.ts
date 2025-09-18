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
import type { SuccessResponse, UserProfile } from '@repo/types';
import type { AuthResponseType } from '@repo/schemas';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered and logged in.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict. User with this email already exists.',
  })
  async register(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<SuccessResponse<AuthResponseType>> {
    const user = await this.authService.register(registerUserDto);
    return { success: true, data: user, message: 'success.register' };
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Log in a user' })
  @ApiResponse({ status: 200, description: 'User successfully logged in.' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. Invalid credentials.',
  })
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<SuccessResponse<AuthResponseType>> {
    const token = await this.authService.login(loginUserDto);
    return { success: true, data: token, message: 'success.login' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current user profile.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  getProfile(
    @Request() req: { user: UserProfile },
  ): SuccessResponse<UserProfile> {
    return { success: true, data: req.user };
  }
}
