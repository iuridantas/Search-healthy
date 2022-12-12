import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { IsPersonalAuthorization } from 'src/auth/decorators/is-personal.decorator';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Patch('/update')
  @Post('/create')
  async create(@Body() createProfileDto: CreateProfileDto) {
    try {
      return this.profileService.create(createProfileDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get()
  findAll() {
    try {
      return this.profileService.findAll();
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get('/find/:id')
  async findOne(@Param('id') id: string) {
    try {
      return this.profileService.findOne(id);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Patch('/update')
  async update(@Body() updateProfileDto: UpdateProfileDto) {
    try {
      return this.profileService.update(updateProfileDto);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Delete('delete/:id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.profileService.remove(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
