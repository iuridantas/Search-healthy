import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { DiceService } from 'src/dice/dice.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingService {
  private _training: Training[] = [];
  constructor(private readonly diceService: DiceService) {}
  async create(createTrainingDto: CreateTrainingDto): Promise<Training> {
    await this.diceService.findOne(createTrainingDto.diceId);
    const createdTraining: Training = {
      ...createTrainingDto,
      id: randomUUID(),
    };
    this._training.push(createdTraining);
    return Promise.resolve(createdTraining);
  }

  async findAll() {
    return `This action returns all training`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} training`;
  }

  async update(id: number, updateTrainingDto: UpdateTrainingDto) {
    return `This action updates a #${id} training`;
  }

  async remove(id: number) {
    return `This action removes a #${id} training`;
  }
}
