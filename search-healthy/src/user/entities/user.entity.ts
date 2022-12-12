import { UserDto } from '../DTO/userInput.dto';

export interface IUserEntity extends UserDto {
  id: string;
  role: string;
}
