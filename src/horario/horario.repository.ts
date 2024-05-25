import { Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorarioRepository {
	constructor(
		@InjectRepository(Horario) private readonly horarioRepo: Repository<Horario>
	) {}

	async create(createHorarioDto: CreateHorarioDto) {
		return this.horarioRepo.insert(createHorarioDto)
	}

	async findAll() {
		return this.horarioRepo.find();
	}

	async findByMedicId(doctorId: number) {
		return this.horarioRepo.findBy({doctorId});
	}

	async findOne(id: number) {
		return this.horarioRepo.findOneBy({id})
	}

	async update(id: number, updateHorarioDto: UpdateHorarioDto) {
		return this.horarioRepo.update({id},updateHorarioDto)
	}

	async remove(id: number) {
		return this.horarioRepo.delete({id})
	}
}
