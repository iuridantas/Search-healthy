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
    students: true,
    personals: true,
    Training: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async createProfile(
    { name, image, tall, weigth, objective, gym, services }: CreateProfileDto,
    id: string,
  ): Promise<Profile> {
    try {
      return await this.prisma.profile.create({
        data: {
          id: id,
          name: name,
          image: image,
          tall: tall,
          weigth: weigth,
          objective: objective,
          gym: gym,
          services: services,
        },
        include: this.data,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async updateProfile(updateProfile: UpdateProfileDto): Promise<Profile> {
    try {
      const studentsIds = updateProfile.studentsIds;
      const personalsIds = updateProfile.personalsIds;

      delete updateProfile.studentsIds;
      delete updateProfile.personalsIds;

      return await this.prisma.profile.update({
        where: { id: updateProfile.id },
        data: {
          students: {
            connect: studentsIds?.map((id) => ({ id: id })),
          },
          personals: {
            connect: personalsIds?.map((id) => ({ id: id })),
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
        'Perfil n??o encontrado',
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
