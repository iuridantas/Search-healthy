import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingService } from './training.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

@ApiTags('training')
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post('/create')
  create(@Body() createTrainingDto: CreateTrainingDto) {
    try {
    return this.trainingService.create(createTrainingDto);
  } catch (err) {
    HandleException(err);
  }
  }

  @Get()
  findAll() {
    try {
    return this.trainingService.findAll();
  } catch (err) {
    HandleException(err);
  }
  }

  @Get('/find/:id')
  findOne(@Param('id') id: string) {
    try {
    return this.trainingService.findOne(id);
  } catch (err) {
    HandleException(err);
  }
  }

  @Patch('/update/:id')
  update(@Body() updateTrainingDto: UpdateTrainingDto) {
    try {
    return this.trainingService.update(updateTrainingDto);
  } catch (err) {
    HandleException(err);
  }
  }
}
