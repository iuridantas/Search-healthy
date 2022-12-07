import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ProfileService } from 'src/profile/profile.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';
import { TrainingRepository } from './training.repository';

@Injectable()
export class TrainingService {
  constructor(
    private readonly profileService: ProfileService,
    private readonly trainingRepository: TrainingRepository,
  ) {}
  async create(createTrainingDto: CreateTrainingDto): Promise<Training> {
    await this.profileService.findOne(createTrainingDto.profileId);
    const createdTraining: Training = {
      ...createTrainingDto,
      id: randomUUID(),
    };
    return await this.trainingRepository.createTraining(createdTraining);
  }

  async findAll(): Promise<Training[]> {
    try {
      return await this.trainingRepository.findAllTrainings();
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findOne(id: string): Promise<Training> {
    try {
      return await this.trainingRepository.findTrainingById(id);
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async update(updateTrainingDto: UpdateTrainingDto): Promise<Training> {
    try {
      return await this.trainingRepository.updateTraining(updateTrainingDto);
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}
