import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiceService } from './dice.service';
import { CreateDieDto } from './dto/create-die.dto';
import { UpdateDieDto } from './dto/update-die.dto';

@Controller('dice')
export class DiceController {
  constructor(private readonly diceService: DiceService) {}

  @Post()
  create(@Body() createDieDto: CreateDieDto) {
    return this.diceService.create(createDieDto);
  }

  @Get()
  findAll() {
    return this.diceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDieDto: UpdateDieDto) {
    return this.diceService.update(+id, updateDieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diceService.remove(+id);
  }
}
