import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // Optional: automatically transform plain objects to DTO instances
    transform: true,
    // Optional: remove properties that are not defined in the DTO
    whitelist: true,
    // Optional: throw an error if non-whitelisted properties are present
    forbidNonWhitelisted: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
