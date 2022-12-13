import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
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

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('/student')
  async homeStudents(@Query('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.homeService.homeStudents(id));
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsPersonalAuthorization)
  @ApiBearerAuth()
  @Get('/personal')
  async homePersonals(@Query('id') id: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.homeService.homePersonals(id));
    } catch (err) {
      HandleException(err);
    }
  }
}
