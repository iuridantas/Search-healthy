import { Injectable } from '@nestjs/common';
import { CreateDieDto } from './dto/create-die.dto';
import { UpdateDieDto } from './dto/update-die.dto';

@Injectable()
export class DiceService {
  async create(createDieDto: CreateDieDto) {
    return 'This action adds a new die';
  }

  async findAll() {
    return `This action returns all dice`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} die`;
  }

  async update(id: number, updateDieDto: UpdateDieDto) {
    return `This action updates a #${id} die`;
  }

  async remove(id: number) {
    return `This action removes a #${id} die`;
  }
}
