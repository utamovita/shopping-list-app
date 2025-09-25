import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@repo/database';
import { UserProfile } from '@repo/types';
import { Request } from 'express';

import { PrismaService } from '../../prisma/prisma.service';
import { ROLES_KEY } from '../decorators/roles.decorator';

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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest<Request & { user: UserProfile }>();

    const user = request.user;
    const groupId = request.params.groupId;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!user || typeof user.id !== 'string' || !groupId) {
      return false;
    }

    const membership = await this.prisma.groupMembership.findUnique({
      where: {
        userId_groupId: {
          userId: user.id,
          groupId,
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
