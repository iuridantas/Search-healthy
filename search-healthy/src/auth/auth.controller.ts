import { Body, Controller, Get, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';

import { AuthService } from './auth.service';
import { IsPersonalAuthorization } from './decorators/is-personal.decorator';
import { userLogged } from './decorators/user-logged.decorator';
import { CreateAuthDto } from './dto/create-auth.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async loginEmail(@Body() data: CreateAuthDto) {
    console.log('chegou')
    return this.authService.validateUserEmail(data);
  }

  @Post('login/cpf')
  async loginCpf(@Body() data: CreateAuthDto) {
    return this.authService.validateUserCpf(data);
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @Get()
  @ApiBearerAuth()
  async getUser(@userLogged() user: IUserEntity) {
    return user;
}
}
