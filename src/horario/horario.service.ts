import { Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { HorarioRepository } from './horario.repository';

@Injectable()
export class HorarioService {

	constructor(private readonly horarioRepository: HorarioRepository) {}

	async create(createHorarioDto: CreateHorarioDto) {
		return this.horarioRepository.create(createHorarioDto);
	}

	async findAll() {
		return this.horarioRepository.findAll()
	}

	async findByMedicId(doctorId: number) {
		return this.horarioRepository.findByMedicId(doctorId);
	}

	async findOne(id: number) {
		return this.horarioRepository.findOne(id)
	}

	async update(id: number, updateHorarioDto: UpdateHorarioDto) {
		return this.horarioRepository.update(id,updateHorarioDto)
	}

	async remove(id: number) {
		return this.horarioRepository.remove(id)
	}
}
