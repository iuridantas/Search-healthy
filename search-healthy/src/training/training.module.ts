import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { ProfileService } from 'src/profile/profile.service';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService, ProfileService]
})
export class TrainingModule {}
