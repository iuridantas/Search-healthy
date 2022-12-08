import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { ProfileModule } from './profile/profile.module';
import { TrainingModule } from './training/training.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, ProfileModule, TrainingModule],
})
export class AppModule {}