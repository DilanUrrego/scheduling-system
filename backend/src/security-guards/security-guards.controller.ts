import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecurityGuardsService } from './security-guards.service';
import { CreateSecurityGuardDto } from './dto/create-security-guard.dto';
import { UpdateSecurityGuardDto } from './dto/update-security-guard.dto';

@Controller('security-guards')
export class SecurityGuardsController {
  constructor(private readonly securityGuardsService: SecurityGuardsService) {}

  @Post()
  create(@Body() createSecurityGuardDto: CreateSecurityGuardDto) {
    return this.securityGuardsService.create(createSecurityGuardDto);
  }

  @Get()
  findAll() {
    return this.securityGuardsService.findAll();
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.securityGuardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecurityGuardDto: UpdateSecurityGuardDto) {
    return this.securityGuardsService.update(+id, updateSecurityGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.securityGuardsService.remove(+id);
  }
}
