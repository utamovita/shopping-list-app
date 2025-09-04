import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

jest.mock('bcrypt');

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let _jwt: JwtService;

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  const mockJwtService = {
    signAsync: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    _jwt = module.get<JwtService>(JwtService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should successfully create a user and return an access token (happy path)', async () => {
      const dto = {
        email: 'test@example.com',
        username: 'Test User',
        password: 'password123',
      };
      const hashedPassword = 'hashedPassword';
      const createdUser = {
        id: '1',
        email: dto.email,
        name: dto.username,
      } as User;

      mockPrismaService.user.findUnique.mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);
      mockPrismaService.user.create.mockResolvedValue(createdUser);
      mockJwtService.signAsync.mockResolvedValue('test_token');

      const result = await service.register(dto);

      expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          email: dto.email,
          name: dto.username,
          passwordHash: hashedPassword,
        },
      });
      expect(result).toEqual({ access_token: 'test_token' });
    });

    it('should throw a ConflictException if email already exists (sad path)', async () => {
      const dto = {
        email: 'exists@example.com',
        username: 'Test',
        password: 'password123',
      };
      mockPrismaService.user.findUnique.mockResolvedValue({ id: '1' } as User);

      await expect(service.register(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('login', () => {
    it('should return an access token for valid credentials (happy path)', async () => {
      const dto = { email: 'test@example.com', password: 'password123' };
      const user = {
        id: '1',
        email: dto.email,
        passwordHash: 'hashedPassword',
      } as User;

      mockPrismaService.user.findUnique.mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.signAsync.mockResolvedValue('test_token');

      const result = await service.login(dto);

      expect(bcrypt.compare).toHaveBeenCalledWith(
        dto.password,
        user.passwordHash,
      );
      expect(result).toEqual({ access_token: 'test_token' });
    });

    it('should throw an UnauthorizedException for a non-existent user (sad path)', async () => {
      const dto = { email: 'wrong@example.com', password: 'password123' };
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.login(dto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw an UnauthorizedException for an incorrect password (sad path)', async () => {
      const dto = { email: 'test@example.com', password: 'wrongpassword' };
      const user = {
        id: '1',
        email: dto.email,
        passwordHash: 'hashedPassword',
      } as User;

      mockPrismaService.user.findUnique.mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.login(dto)).rejects.toThrow(UnauthorizedException);
    });
  });
});
