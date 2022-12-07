import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTraining(training: Training): Promise<Training> {
    return await this.prisma.training.create({
      data: training,
    });
  }

  async updateTraining(training: UpdateTrainingDto): Promise<Training> {
    return await this.prisma.training.update({
      where: { id: training.id },
      data: training,
    });
  }

  async findAllTrainings(): Promise<Training[]> {
    return await this.prisma.training.findMany();
  }

  async findTrainingById(id: string): Promise<Training> {
    return await this.prisma.training.findUniqueOrThrow({ where: { id: id } });
  }
}
