import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { TrainingRepository } from './training.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { ProfileRepository } from 'src/profile/profile.repository';
import { ProfileService } from 'src/profile/profile.service';
import { UserRepository } from 'src/user/user.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' }),],
  controllers: [TrainingController],
  providers: [
    TrainingService,
    TrainingRepository,
    ProfileService,
    ProfileRepository,
    UserRepository,
  ],
})
export class TrainingModule {}
