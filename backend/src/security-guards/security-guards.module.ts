import { Module } from '@nestjs/common';
import { SecurityGuardsService } from './security-guards.service';
import { SecurityGuardsController } from './security-guards.controller';

@Module({
  controllers: [SecurityGuardsController],
  providers: [SecurityGuardsService],
})
export class SecurityGuardsModule {}
