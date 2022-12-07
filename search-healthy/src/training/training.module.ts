import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { ProfileService } from 'src/profile/profile.service';
import { TrainingRepository } from './training.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { ProfileRepository } from 'src/profile/profile.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [TrainingController],
  providers: [
    TrainingService,
    TrainingRepository,
    ProfileService,
    ProfileRepository,
  ],
})
export class TrainingModule {}
