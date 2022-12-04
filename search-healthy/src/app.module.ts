import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { TrainingModule } from './training/training.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [DatabaseModule, TrainingModule, ProfileModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
