import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateProfileDto } from '../dto/create-profile.dto';

export class Profile extends CreateProfileDto {
  id: string;
  ProfileStudent: IUserEntity;
  ProfilePersonal: IUserEntity;
}
