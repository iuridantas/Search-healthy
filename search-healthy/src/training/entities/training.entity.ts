import { CreateTrainingDto } from '../dto/create-training.dto';

export class Training extends CreateTrainingDto {
  id: string;
  day: string;
}
