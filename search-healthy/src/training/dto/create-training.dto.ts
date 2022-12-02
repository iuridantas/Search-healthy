import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTrainingDto {
  @ApiProperty()
  @IsString()
  diceId: string;

  @ApiProperty()
  @IsString()
  day: Date;

  @ApiProperty()
  @IsString()
  exercise: string;

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
