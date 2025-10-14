import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { execSync } from 'child_process';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  try {
    console.log('Running database migrations...');
    execSync(
      'pnpm prisma migrate deploy --schema=../../packages/database/prisma/schema.prisma',
    );
    console.log('Database migrations completed.');
  } catch (error) {
    console.error('Failed to run database migrations:', error);
    process.exit(1);
  }

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Shopping List API')
    .setDescription('API for managing shared shopping lists')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
