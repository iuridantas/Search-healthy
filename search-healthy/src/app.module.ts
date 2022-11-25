import { Module } from '@nestjs/common';
import { UserService } from './user/service/user.service';
import { UserController } from './user/user.controller';

@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class AppModule {}
