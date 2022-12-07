import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { ProfileService } from 'src/profile/profile.service';
import { TrainingRepository } from './training.repository';
import { DatabaseModule } from 'src/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TrainingController],
  providers: [TrainingService, ProfileService, TrainingRepository]
})
export class TrainingModule {}
