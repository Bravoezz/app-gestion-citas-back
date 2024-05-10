import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('receta')
@Controller('receta')
export class RecetaController {
	constructor(private readonly recetaService: RecetaService) {}

	@Post()
	async create(@Body() createRecetaDto: CreateRecetaDto) {
		return await this.recetaService.create(createRecetaDto);
	}

	@Get()
	async findAll() {
		return await this.recetaService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		return await this.recetaService.findOne(+id);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return await this.recetaService.remove(+id);
	}
}
