import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsNumber()
  tall: number;

  @ApiProperty()
  @IsNumber()
  weigth: number;

  @ApiProperty()
  @IsString()
  objective: string;

  @ApiProperty()
  @IsString()
  gym: string;

  @ApiProperty()
  @IsString()
  services: string;

  @ApiProperty()
  teachersIds?: string[];

  @ApiProperty()
  studentsIds?: string[];
}
