import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTrainingDto {
  @ApiProperty()
  @IsString()
  profileId: string;

  @ApiProperty()
  @IsString()
  day: Date;

  @ApiProperty()
  exercises: [];

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
