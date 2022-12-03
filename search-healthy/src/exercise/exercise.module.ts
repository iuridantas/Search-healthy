import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TrainingService } from 'src/training/training.service';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, TrainingService, ProfileService],
})
export class ExerciseModule {}
