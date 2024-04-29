import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";


export abstract class IProductService {
    abstract create(createProductDto: CreateProductDto): Promise<Product>;
    abstract createMany(createProductDto: CreateProductDto[]): Promise<void>;
	abstract findAll(): Promise<Product[]>;
	abstract findOne(id: number): Promise<Product>;
	abstract update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
	abstract remove(id: number): Promise<void>;
}

export abstract class IProductRepository {
    abstract create(createProductDto: CreateProductDto): Promise<Product>;
    abstract createMany(createProductDto: CreateProductDto[]): Promise<void>;
	abstract findAll(): Promise<Product[]>;
	abstract findOne(id: number): Promise<Product>;
	abstract update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
	abstract remove(id: number): Promise<void>;
}