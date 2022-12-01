import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/service/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { RegistrationModule } from './registration/registration.module';
import { TrainingModule } from './training/training.module';

@Module({
  imports: [DatabaseModule, RegistrationModule, TrainingModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
