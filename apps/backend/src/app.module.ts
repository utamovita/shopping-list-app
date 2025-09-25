import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
} from 'nestjs-i18n';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { envSchema } from './config/env.schema';
import { EventsModule } from './events/event.module';
import { GroupsModule } from './groups/groups.module';
import { InvitationsModule } from './invitations/invitations.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env),
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'pl',
      loader: I18nJsonLoader,
      loaderOptions: {
        path: path.join(__dirname, '..', '..', '..', 'packages/i18n/locales/'),
        watch: true,
      },
      resolvers: [AcceptLanguageResolver],
    }),
    AuthModule,
    PrismaModule,
    GroupsModule,
    ShoppingListModule,
    EventsModule,
    InvitationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
