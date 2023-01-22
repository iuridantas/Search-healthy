import { Controller, Get, Param, Query, Res, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { IsPersonalAuthorization } from 'src/auth/decorators/is-personal.decorator';

@ApiTags('home')
@Controller('/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get('/personal/:id')
  async homePersonals(@Param('id') id: string) {
    try {
      return await this.homeService.homePersonals(id);
    } catch (err) {
      HandleException(err);
    }
  }
}
