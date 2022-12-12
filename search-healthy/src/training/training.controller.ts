import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TrainingService } from './training.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { IsPersonalAuthorization } from 'src/auth/decorators/is-personal.decorator';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('training')
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Post('/create')
  async create(@Body() createTrainingDto: CreateTrainingDto) {
    try {
      return this.trainingService.create(createTrainingDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get()
  findAll() {
    try {
      return this.trainingService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get('/find/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.trainingService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Patch('/update/:id')
  async update(@Body() updateTrainingDto: UpdateTrainingDto) {
    try {
      return this.trainingService.update(updateTrainingDto);
    } catch (err) {
      HandleException(err);
    }
  }
}
