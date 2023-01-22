import { IUserEntity } from './entities/user.entity';
import { UserDto } from './DTO/userInput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './DTO/partialUserInput.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID(), role: 'user' };
    if (user.password.length <= 7) {
      throw new Exception(
        Exceptions.InvalidData,
        'Sua senha deve conter 8 digitos ou mais',
      );
    }
    const hashed = await hash(user.password, 10);
    userEntity.password = hashed;

    const createdUser = await this.userRepository.createUser(userEntity);
    delete createdUser.password;
    return createdUser;
  }

  async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
    if (userData.password) {
      const hashedPassword = await hash(userData.password, 10);
      const userToUpdate = { ...userData, password: hashedPassword };
      const updatedUser = await this.userRepository.updateUser(userToUpdate);
      return updatedUser;
    }
    const updateUser = await this.userRepository.updateUser(userData);
    delete updateUser.password;
    return updateUser;
  }

  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.userRepository.findAllUsers();
  }

  async deleteUserById(userId: string): Promise<string> {
    await this.userRepository.deleteUser(userId);
    return 'Usuário excluido com sucesso';
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const foundUser = await this.userRepository.findUserById(userId);
    delete foundUser.password;
    return foundUser;
  }

  async findUserByEmail(email: string): Promise<IUserEntity> {
    return await this.userRepository.findUserByEmail(email);
  }

  async homePersonals(id: string) {
    const foundUser = await this.userRepository.homePersonals(id);
    delete foundUser.cpf;
    delete foundUser.email;
    delete foundUser.id;
    delete foundUser.name;
    delete foundUser.password;
    delete foundUser.role;
    return foundUser;
  }
}

