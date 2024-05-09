import { Injectable } from "@nestjs/common";
import { IProductRepository } from "./product.contracts";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductRepository implements IProductRepository {
	constructor(
		@InjectRepository(Product) private readonly productRepo: Repository<Product>
	) {}
	
    async create(createProductDto: CreateProductDto): Promise<void> {
		await this.productRepo.insert(createProductDto)
	}

	async createMany(createProductDtoList: CreateProductDto[]): Promise<void> {
		await this.productRepo.insert(createProductDtoList)
	}

	async findAll(): Promise<Product[]> {
		return this.productRepo.find()
	}

	async findOne(id: number): Promise<Product> {
		return this.productRepo.findOneBy({id})
	}

	async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
		await this.productRepo.update({id},{...updateProductDto})
		return
	}

	async remove(id: number): Promise<void> {
		await this.productRepo.delete({id})
		return
	}

}