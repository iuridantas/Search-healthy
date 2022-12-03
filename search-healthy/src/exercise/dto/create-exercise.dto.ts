import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateExerciseDto {
  @ApiProperty()
  @IsString()
  musculargroup: string;

  @ApiProperty()
  exercises: [];
}
