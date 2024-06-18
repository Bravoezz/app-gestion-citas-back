import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CitaService } from './cita.service';
import { CitaDto } from './dto/cita.dto';
import { SearchCita } from './dto/search-cita.dto';
import { CreateCitaDto } from './dto/create-cita.dto';

@ApiTags('cita')
@Controller('cita')
export class CitaController {

	constructor(
		private readonly citaService: CitaService
	) {	}

	@Post('list')
	@ApiResponse({type: [CitaDto], description: 'Lista de citas', status: '2XX'})
	@ApiBody({type: SearchCita, required: false})
	list(@Body() searchCita: SearchCita) {
		return this.citaService.list(searchCita)
	}

	@Post('insert')
	@ApiResponse({type: CitaDto, description: 'Crea una cita', status: '2XX'})
	async insertCita(@Body() citaDto: CreateCitaDto) {
		return this.citaService.insert(citaDto)
	}
}