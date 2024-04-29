import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductRepository, IProductService } from './product.contracts';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService implements IProductService {
	constructor( private readonly productRepository: IProductRepository) {}

	async createMany(createProductDto: CreateProductDto[]): Promise<void> {
		await this.productRepository.createMany(createProductDto)
	}

	async create(createProductDto: CreateProductDto): Promise<Product> {
		throw new Error('Method not implemented.');
	}

	async findAll(): Promise<Product[]> {
		return this.productRepository.findAll()
	}

	async findOne(id: number): Promise<Product> {
		throw new Error('Method not implemented.');
	}

	async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async remove(id: number): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
