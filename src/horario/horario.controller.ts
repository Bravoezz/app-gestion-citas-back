import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { HorarioService } from './horario.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Horario } from './entities/horario.entity';

@ApiTags('horario')
@Controller('horario')
export class HorarioController {
	constructor(private readonly horarioService: HorarioService) {}

	@Post()
	@ApiResponse({status: 200, description: "Retorna un mensaje"})
	async create(@Body() createHorarioDto: CreateHorarioDto) {
		await this.horarioService.create(createHorarioDto);
		return 'Usuario creado correctamente';
	}

	@Get()
	@ApiResponse({ type: [Horario], description: "Retorna una lista de horarios"})
	async findAll() {
		return await this.horarioService.findAll();
	}
	
	@Get('by-medic-id/:id')
	@ApiResponse({ type: [Horario], description: "Retorna una lista de horarios relacionados a un medico"})
	async findByMedicId(@Param('id') id: string) {
		return await this.horarioService.findByMedicId(+id);
	}

	@Get(':id')
	@ApiResponse({ type: Horario, description: "Retorna un horario por su id"})
	async findOne(@Param('id') id: string) {
		return await this.horarioService.findOne(+id);
	}

	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() updateHorarioDto: UpdateHorarioDto,
	) {
		await this.horarioService.update(+id, updateHorarioDto);
		return "Horario actualizado correctamente"
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		await this.horarioService.remove(+id);
		return "Horario eliminado correctamente"
	}
}
