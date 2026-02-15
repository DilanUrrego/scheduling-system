import { IsString, IsEmail, IsEnum, IsOptional, MinLength, IsNotEmpty } from 'class-validator';

export enum GuardStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ON_LEAVE = 'on_leave',
}

export class CreateSecurityGuardDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  identificationNumber: string; // Cédula, DNI, etc.

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsEnum(GuardStatus)
  @IsOptional()
  status?: GuardStatus = GuardStatus.ACTIVE;
}