import { Inject, Injectable } from '@nestjs/common';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { RecetaRepository } from './receta.repository';
import { Receta } from './entities/receta.entity';
import { IProductRepository, IProductRepositoryToken } from 'src/product/product.contracts';

@Injectable()
export class RecetaService {
	constructor(
		private readonly recetaRepository: RecetaRepository,
		@Inject(IProductRepositoryToken) private readonly productRepository: IProductRepository
	) {}

	async create(createRecetaDto: CreateRecetaDto): Promise<void> {
		const newRec = await this.recetaRepository.create(createRecetaDto);
		
		const products = await this.productRepository.findByIds(createRecetaDto.productIds)
		newRec.productos = products
		await this.recetaRepository.save(newRec);
		return;
	}

	async findAll(): Promise<Receta[]> {
		return this.recetaRepository.findAll();
	}

	async findOne(id: number): Promise<Receta> {
		return this.recetaRepository.findOne(id);
	}

	async remove(id: number): Promise<void> {
		await this.recetaRepository.remove(id);
		return;
	}
}
