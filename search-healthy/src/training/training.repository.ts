import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTraining(training: Training): Promise<Training> {
    try {
    return await this.prisma.training.create({
      data: training,
    });
  } catch (err) {
    throw new Exception(Exceptions.DatabaseException);
  }
  }

  async updateTraining(training: UpdateTrainingDto): Promise<Training> {
    try {
    return await this.prisma.training.update({
      where: { id: training.id },
      data: training,
    });
  } catch (err) {
    throw new Exception(Exceptions.DatabaseException);
  }
  }

  async findAllTrainings(): Promise<Training[]> {
    try {
      return await this.prisma.training.findMany();
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findTrainingById(id: string): Promise<Training> {
    try {
      return await this.prisma.training.findUniqueOrThrow({
        where: { id: id },
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}
