import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Repository, DataSource } from 'typeorm';
import { CitaDto } from './dto/cita.dto';
import { SearchCita } from './dto/search-cita.dto';
import { User } from '../user/entities/user.entity';
import { CreateCitaDto } from './dto/create-cita.dto';

@Injectable()
export class CitaRepository {

	constructor(
		@InjectRepository(Cita) private readonly citaRepo: Repository<Cita>,
		@InjectDataSource() private readonly dataSource: DataSource
	) {	}

	async insert(citaDto: CreateCitaDto): Promise<CitaDto> {
		const cita = this.citaRepo.create(citaDto)
		return this.citaRepo.save(cita)
	}

	async list(seachCita: SearchCita): Promise<CitaDto[]> {
		const queryBuild = this.dataSource
			.getRepository(Cita)
			.createQueryBuilder('cita')
			.select()

		if (seachCita?.fechaCita) {
			queryBuild.andWhere('CAST(cita.fechaCita AS VARCHAR) LIKE :fechaCita', { fechaCita: `%${seachCita.fechaCita}%` });
		}

		if (seachCita?.dniPaciente) {
			queryBuild
				.innerJoin(User,'user', 'cita.idPaciente = user.id')
				.andWhere('user.dni = :dniPaciente', { dniPaciente: seachCita.dniPaciente })
		}

		return queryBuild.getMany()
	}
}