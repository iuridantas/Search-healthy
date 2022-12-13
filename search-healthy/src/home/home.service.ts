import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


@Injectable()
export class HomeService {
  constructor(
    private readonly userService: UserService,
  ) {}

  async homeStudents(id: string) {
    return await this.userService.homeStudents(id);
  }

  async homePersonals(id: string){
    return await this.userService.homePersonals(id);
  }
}