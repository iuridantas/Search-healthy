import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTrainingDto } from './create-training.dto';

export class UpdateTrainingDto extends PartialType(CreateTrainingDto) {
  @ApiProperty()
  id: string;
}
