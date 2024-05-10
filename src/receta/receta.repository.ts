import { InjectRepository } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { Repository } from 'typeorm';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecetaRepository {
	constructor(@InjectRepository(Receta) private readonly recetaRepo: Repository<Receta>) {}

	async create(createRecetaDto: CreateRecetaDto): Promise<Receta> {
		return this.recetaRepo.save(createRecetaDto);
	}

    async save(receta: Receta): Promise<Receta> {
		return this.recetaRepo.save(receta);
	}

	async findAll(): Promise<Receta[]> {
		return this.recetaRepo.find({relations:{user: true, productos: true}})
	}

	async findOne(id: number): Promise<Receta> {
		return this.recetaRepo.findOne({ where: {id}, relations: {user: true, productos: true}});
	}

	async remove(id: number): Promise<void> {
		await this.recetaRepo.delete({ id });
		return;
	}
}
