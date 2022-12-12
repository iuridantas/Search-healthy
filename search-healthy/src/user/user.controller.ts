import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './DTO/partialUserInput.dto';
import { UserDto } from './DTO/userInput.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { AuthGuard } from '@nestjs/passport';
import { IsPersonalAuthorization } from 'src/auth/decorators/is-personal.decorator';
import { userLogged } from 'src/auth/decorators/user-logged.decorator';

@ApiTags('Users')
@Controller('User')
export class UserController {
  constructor(private service: UserService) {}

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get()
  async getALLUser(): Promise<IUserEntity[]> {
    try {
      return await this.service.getAllUsers();
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get('/find/:id')
  async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (err) {
      HandleException(err);
    }
  }

  @Post('/create')
  async createUser(
    @Body() { cpf, email, password, name }: UserDto,
    @Res() response: Response,
  ) {
    try {
      const result = await this.service.createUser({
        cpf,
        email,
        password,
        name,
      });
      response.status(201).send(result);
    } catch (err) {
      HandleException(err);
      throw new BadRequestException(err.message);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch('/update')
  async uptadeUser(@Body() userData: PartialUserDto,  @userLogged() user: IUserEntity,): Promise<IUserEntity> {
    try {
      if (userData.id) {
        delete userData.id;
      }
      const dataToUpdate = { ...userData, id: user.id };
      return await this.service.updateUser(dataToUpdate);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete('delete/:id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(userId);
      if (userIsDeleted) {
        return 'Usuário excluído com sucesso';
      } else {
        return 'Usuário não encontrado';
      }
    } catch (err) {
      HandleException(err);
    }
  }
}
