import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISSN, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsISSN()
  cpf: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}