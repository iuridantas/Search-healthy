import { IUserEntity } from './entities/user.entity';
import { UserDto } from './DTO/userInput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './DTO/partialUserInput.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    if (user.password.length <= 7) {
      throw new Exception(
        Exceptions.InvalidData,
        'Sua senha deve conter 8 digitos ou mais',
      );
    }
    const createdUser = await this.userRepository.createUser(userEntity);
    return createdUser;
  }

  async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
    const updatedUser = await this.userRepository.updateUser(userData);
    return updatedUser;
  }

  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.userRepository.findAllUsers();
  }

  async deleteUserById(userId: string): Promise<boolean> {
    try {
      await this.userRepository.deleteUser(userId);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const foundUser = await this.userRepository.findUserById(userId);
    return foundUser;
  }
}