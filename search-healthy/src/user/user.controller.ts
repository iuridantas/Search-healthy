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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './service/dto/partialUserInput.dto';
import { UserDto } from './service/DTO/userInput.dto';
import { UserService } from './service/user.service';
import { Response } from 'express';

@ApiTags('Users')
@Controller('User')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getALLUser(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Get('/find/:id')
  async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('/create')
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto,
    @Res() response: Response,
  ){
    try {
      const result =  await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.message);
    }
  }

  @Patch('/update')
  async uptadeUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete('delete/:id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    const userIsDeleted = await this.service.deleteUserById(userId);
    if (userIsDeleted) {
      return 'Usuário excluído com sucesso';
    } else {
      return 'Usuário não encontrado';
    }
  }
}
