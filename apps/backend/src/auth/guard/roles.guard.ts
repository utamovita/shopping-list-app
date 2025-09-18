import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserProfile } from '@repo/types';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<Request & { user: UserProfile }>();

    const user = request.user;
    const groupId = request.params.groupId;

    if (!user || !groupId) {
      return false;
    }

    const membership = await this.prisma.groupMembership.findUnique({
      where: {
        userId_groupId: {
          userId: user.id,
          groupId: groupId,
        },
      },
      select: {
        role: true,
      },
    });

    if (!membership) {
      return false;
    }

    return requiredRoles.some((role) => membership.role === role);
  }
}
