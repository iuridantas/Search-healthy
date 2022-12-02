import { IUserEntity } from 'src/user/entities/user.entity';

export class CreateDieDto {
  name: string;
  image: string;
  tall: number;
  weigth: number;
  objective: string;
  gym: string;
  services: string;
  teacher: IUserEntity[];
  student: IUserEntity[];
}
