import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class IsPersonalAuthorization implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const httpRequest = context.switchToHttp().getRequest();

    const userData = httpRequest.user;

    if (userData?.role === 'personal') {
      return true;
    }

    throw new UnauthorizedException(
      'o usuário não tem permissão para acessar esta rota',
    );
  }
}
