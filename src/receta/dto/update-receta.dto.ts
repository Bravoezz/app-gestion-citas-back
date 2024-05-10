import { PartialType } from '@nestjs/swagger';
import { CreateRecetaDto } from './create-receta.dto';

export class UpdateRecetaDto extends PartialType(CreateRecetaDto) {}
