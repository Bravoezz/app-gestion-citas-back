import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

export interface IProductService {
	create(createProductDto: CreateProductDto): Promise<void>;
	createMany(createProductDto: CreateProductDto[]): Promise<void>;
	findAll(): Promise<Product[]>;
	findOne(id: number): Promise<Product>;
	update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
	remove(id: number): Promise<void>;
}

export interface IProductRepository {
	create(createProductDto: CreateProductDto): Promise<void>;
	createMany(createProductDto: CreateProductDto[]): Promise<void>;
	findAll(): Promise<Product[]>;
	findOne(id: number): Promise<Product>;
	update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
	remove(id: number): Promise<void>;
}

export const IProductServiceToken = Symbol.for('IProductService')
export const IProductRepositoryToken = Symbol.for('IProductRepository')
