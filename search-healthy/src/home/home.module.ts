import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { ProfileModule } from 'src/profile/profile.module';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { DatabaseModule } from 'src/prisma/database.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ProfileModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}