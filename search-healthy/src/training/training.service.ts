import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ProfileService } from 'src/profile/profile.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingService {
  private _training: Training[] = [];
  constructor(private readonly profileService: ProfileService) {}
  async create(createTrainingDto: CreateTrainingDto): Promise<Training> {
    await this.profileService.findOne(createTrainingDto.profileId);
    const createdTraining: Training = {
      ...createTrainingDto,
      id: randomUUID(),
    };
    this._training.push(createdTraining);
    return Promise.resolve(createdTraining);
  }

  async findAll(): Promise<Training[]> {
    return this._training;
  }

  async findOne(id: string): Promise<Training> {
    const findedTraining = this._training.find(
      (training) => training.id === id,
    );
    return findedTraining;
  }

  async update(
    id: string,
    updateTrainingDto: UpdateTrainingDto,
  ): Promise<Training> {
    this._training.map((training, index) => {
      if (training.id === id) {
        const updatedTrainig = Object.assign(training, updateTrainingDto);
        this._training.splice(index, 1, updatedTrainig);
      }
    });
    return await this.findOne(id);
  }

  async remove(id: string): Promise<string> {
    this._training.map((training, index) => {
      if (training.id === id) {
        this._training.splice(index, 1);
      }
    });
    return Promise.resolve('treino deletado com sucesso');
  }
}
