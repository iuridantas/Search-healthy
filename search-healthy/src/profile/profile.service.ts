import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  private _profile: Profile[] = [];
  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdProfile: Profile = {
      ...createProfileDto,
      id: randomUUID(),
      teachers: [],
      students: [],
    };
    this._profile.push(createdProfile);
    return createdProfile;
  }

  async findAll(): Promise<Profile[]> {
    return this._profile;
  }

  async findOne(id: string): Promise<Profile> {
    return this._profile.find((profile) => profile.id === id);
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    this._profile.map((profile, index) => {
      if (profile.id === id) {
        const uptadedProfile = Object.assign(profile, updateProfileDto);
        this._profile.splice(index, 1, uptadedProfile);
      }
    });
    return await this.findOne(id);
  }

  async remove(id: string): Promise<string> {
    this._profile.map((profile, index) => {
      if (profile.id === id) {
        this._profile.splice(index, 1);
      }
    });
    return Promise.resolve('perfil deletado com sucesso');
  }
}
