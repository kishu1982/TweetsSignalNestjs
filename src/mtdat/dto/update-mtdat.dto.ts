import { PartialType } from '@nestjs/mapped-types';
import { CreateMtdatDto } from './create-mtdat.dto';

export class UpdateMtdatDto extends PartialType(CreateMtdatDto) {}
