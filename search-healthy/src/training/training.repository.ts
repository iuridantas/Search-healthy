import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTraining(training: Training): Promise<Training> {
    const CreatedTraining = await this.prisma.training.create({
      data: training,
    });
    return CreatedTraining;
  }
}
