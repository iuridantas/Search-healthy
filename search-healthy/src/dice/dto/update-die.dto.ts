import { PartialType } from '@nestjs/swagger';
import { CreateDieDto } from './create-die.dto';

export class UpdateDieDto extends PartialType(CreateDieDto) {}
