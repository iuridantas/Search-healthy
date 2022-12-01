import { Injectable } from '@nestjs/common';
import { CreateDieDto } from './dto/create-die.dto';
import { UpdateDieDto } from './dto/update-die.dto';

@Injectable()
export class DiceService {
  create(createDieDto: CreateDieDto) {
    return 'This action adds a new die';
  }

  findAll() {
    return `This action returns all dice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} die`;
  }

  update(id: number, updateDieDto: UpdateDieDto) {
    return `This action updates a #${id} die`;
  }

  remove(id: number) {
    return `This action removes a #${id} die`;
  }
}
