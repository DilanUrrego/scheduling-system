import { Injectable } from '@nestjs/common';
import { CreateSecurityGuardDto } from './dto/create-security-guard.dto';
import { UpdateSecurityGuardDto } from './dto/update-security-guard.dto';

@Injectable()
export class SecurityGuardsService {
  create(createSecurityGuardDto: CreateSecurityGuardDto) {
    return 'This action adds a new securityGuard';
  }

  findAll() {
    return `This action returns all securityGuards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} securityGuard`;
  }

  update(id: number, updateSecurityGuardDto: UpdateSecurityGuardDto) {
    return `This action updates a #${id} securityGuard`;
  }

  remove(id: number) {
    return `This action removes a #${id} securityGuard`;
  }
}
