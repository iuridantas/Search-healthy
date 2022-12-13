import { Body, Controller, Get, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { AuthService } from './auth.service';
import { IsPersonalAuthorization } from './decorators/is-personal.decorator';
import { userLogged } from './decorators/user-logged.decorator';
import { CreateAuthEmailDto } from './dto/create-auth.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async loginEmail(@Body() data: CreateAuthEmailDto) {
    try {
      return this.authService.validateUser(data);
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
