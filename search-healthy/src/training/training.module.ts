import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { DiceService } from 'src/dice/dice.service';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService, DiceService]
})
export class TrainingModule {}
