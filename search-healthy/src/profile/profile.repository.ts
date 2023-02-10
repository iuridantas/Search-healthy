import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileRepository {
  private data = {
    personals: true,
    students: true,
    Training: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async createProfile(
    { name, image, objective, gym, studentsIds, personalsIds }: CreateProfileDto,
    id: string,
  ): Promise<Profile> {
    try {
      return await this.prisma.profile.create({
        data: {
          id: id,
          name: name,
          image: image,
          objective: objective,
          gym: gym,
          personals: {
            connect: personalsIds?.map((id) => ({ id: id })),
          },
          students: {
            connect: studentsIds?.map((id) => ({ id: id })),
          },
        },
        include: this.data,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async updateProfile(updateProfile: UpdateProfileDto): Promise<Profile> {
    try {
      const personalsIds = updateProfile.personalsIds;
      const studentsIds = updateProfile.studentsIds;

      delete updateProfile.personalsIds;
      delete updateProfile.studentsIds;

      return await this.prisma.profile.update({
        where: { id: updateProfile.id },
        data: {
          ...updateProfile,
          personals: {
            connect: personalsIds?.map((id) => ({ id: id })),
          },
          students: {
            connect: studentsIds?.map((id) => ({ id: id })),
          },
        },
        include: this.data,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async deleteProfile(id: string): Promise<Profile> {
    try {
      return await this.prisma.profile.delete({
        where: { id: id },
        include: this.data,
      });
    } catch (err) {
      throw new Exception(
        Exceptions.DatabaseException,
        'Perfil não encontrado',
      );
    }
  }

  async findProfileById(id: string): Promise<Profile> {
    try {
      return await this.prisma.profile.findUnique({
        where: { id: id },
        include: this.data,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findAllProfiles(): Promise<Profile[]> {
    try {
      return await this.prisma.profile.findMany({
        include: this.data,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}