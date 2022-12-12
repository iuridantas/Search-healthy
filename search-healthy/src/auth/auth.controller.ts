import { Body, Controller, Get, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

import { AuthService } from './auth.service';
import { IsPersonalAuthorization } from './decorators/is-personal.decorator';
import { userLogged } from './decorators/user-logged.decorator';
import { CreateAuthCpfDto } from './dto/create-auth.cpf.dto';
import { CreateAuthEmailDto } from './dto/create-auth.email.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login/email')
  async loginEmail(@Body() data: CreateAuthEmailDto) {
    try {
    return this.authService.validateUserEmail(data);
  } catch (error) {
    HandleException(error);
  }
  }

  @Post('/login/cpf')
  async loginCpf(@Body() data: CreateAuthCpfDto) {
    try {
    return this.authService.validateUserCpf(data);
  } catch (error) {
    HandleException(error);
  }
  }

  @Get()
  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  async getUser(@userLogged() user: IUserEntity) {
    return user;
  }
}
