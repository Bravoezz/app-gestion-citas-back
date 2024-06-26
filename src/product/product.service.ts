import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductRepository, IProductRepositoryToken, IProductService } from './product.contracts';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService implements IProductService {
	constructor(
		@Inject(IProductRepositoryToken) private readonly productRepository: IProductRepository
	) {}

	async createMany(createProductDto: CreateProductDto[]): Promise<void> {
		await this.productRepository.createMany(createProductDto)
	}

	async create(createProductDto: CreateProductDto): Promise<void> {
		await this.productRepository.create(createProductDto)
	}

	async findAll(): Promise<Product[]> {
		return this.productRepository.findAll()
	}

	async findOne(id: number): Promise<Product> {
		return this.productRepository.findOne(id)
	}

	async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
		await this.productRepository.update(id, updateProductDto)
		return
	}

	async remove(id: number): Promise<void> {
		await this.productRepository.remove(id)
		return
	}
}
