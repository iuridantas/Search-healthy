import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { TrainingService } from 'src/training/training.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExerciseService {
  private _exercise: Exercise[] = [];
  constructor(private readonly trainingService: TrainingService) {}
  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise: Exercise = {
      ...createExerciseDto,
      id: randomUUID(),
    };
    this._exercise.push(createdExercise);
    return Promise.resolve(createdExercise);
  }

  async findAll() {
    return `This action returns all exercise`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  async update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  async remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
