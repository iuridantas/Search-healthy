import { Body, Controller, Get, Post} from '@nestjs/common';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { IsPersonalAuthorization } from './decorators/is-personal.decorator';
import { CreateAuthDto } from './dto/create-auth.dto';


@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("Login/Email")
  async loginEmail(@Body() data: CreateAuthDto) {
    return this.authService.validateUserEmail(data)
  }

  @Post("Login/CPF")
  async loginCpf(@Body() data: CreateAuthDto) {
    return this.authService.validateUserCpf(data)
  }

  @Get()
  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  async getUser(@Request() req) {
    return "user";
  }
}

