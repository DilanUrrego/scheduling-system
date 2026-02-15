import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecurityGuardsModule } from './security-guards/security-guards.module';

@Module({
  imports: [SecurityGuardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
