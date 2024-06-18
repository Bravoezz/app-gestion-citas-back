import { Injectable } from '@nestjs/common';
import { Cita } from './entities/cita.entity';
import { CitaDto } from './dto/cita.dto';
import { CitaRepository } from './cita.repository';
import { SearchCita } from './dto/search-cita.dto';
import { CreateCitaDto } from './dto/create-cita.dto';

@Injectable()
export class CitaService {
	constructor(
		private readonly citaRepository: CitaRepository
	) {	}

	async list(seachCita: SearchCita): Promise<CitaDto[]> {
		return await this.citaRepository.list(seachCita);
	}

	async insert(cita: CreateCitaDto): Promise<CitaDto> {
		return await this.citaRepository.insert(cita)
	}
}