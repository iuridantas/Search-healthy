import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  image: string;
  
  @ApiProperty()
  @IsString()
  objective: string;

  @ApiProperty()
  @IsString()
  gym: string;

  @ApiProperty()
  personalsIds?: string[];

  @ApiProperty()
  studentsIds?: string[];
}
