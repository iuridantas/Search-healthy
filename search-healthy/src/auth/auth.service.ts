import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { compare } from 'bcrypt';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { IUserEntity } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserEmail({ email, password }: CreateAuthDto) {
    const user = await this.userService.findUserByEmail(email);

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new Exception(
        Exceptions.UnauthorizedException,
        'Password invalido',
      );
    }

    delete user.password;

    return {
      token: this.jwtService.sign({
        email: user.email,
        id: user.id,
        name: user.name,
        role: user.role,
      }),
      user,
    };
  }

  async validateUserCpf({ cpf, password }: CreateAuthDto) {
    const user = await this.userService.findUserByCpf(cpf);

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new Exception(
        Exceptions.UnauthorizedException,
        'Password invalido',
      );
    }

    delete user.password;

    return {
      token: this.jwtService.sign({
        cpf: user.cpf,
        id: user.id,
        name: user.name,
        role: user.role,
      }),
      user,
    };
  }

  async getUserEmail(email: string): Promise<IUserEntity> {
    return await this.userService.findUserByEmail(email);
  }

  async getUserCpf(cpf: string): Promise<IUserEntity> {
    return await this.userService.findUserByCpf(cpf);
  }
}
