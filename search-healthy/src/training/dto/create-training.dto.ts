import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateTrainingDto {
  @ApiProperty()
  @IsString()
  profileId: string;

  @ApiProperty()
  @IsString()
  day: Date;

  @ApiProperty()
  @IsString()
  muscularegroup: string;

  @ApiProperty()
  @IsArray()
  exercises: string[];

  @ApiProperty()
  @IsString()
  repetition: string;

  @ApiProperty()
  @IsString()
  aerobic: string;

  @ApiProperty()
  @IsString()
  stretching: string;
}
