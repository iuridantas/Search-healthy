import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/service/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { TrainingModule } from './training/training.module';
import { DiceModule } from './dice/dice.module';


@Module({
  imports: [DatabaseModule, TrainingModule, DiceModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
