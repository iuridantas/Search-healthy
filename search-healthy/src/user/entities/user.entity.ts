import { UserDto } from '../service/DTO/userInput.dto';

export interface IUserEntity extends UserDto {
  id: string;
}
