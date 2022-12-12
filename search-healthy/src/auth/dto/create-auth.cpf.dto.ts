import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAuthCpfDto {
  @ApiProperty()
  @IsString()
  cpf: string

  @ApiProperty()
  @IsString()
  password: string;
}