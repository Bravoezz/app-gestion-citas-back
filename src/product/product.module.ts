import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { IProductRepositoryToken, IProductServiceToken } from './product.contracts';
import { ProductRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Product])],
	providers: [
		{ provide: IProductServiceToken, useClass: ProductService },
		{ provide: IProductRepositoryToken, useClass: ProductRepository },
	],
	controllers: [ProductController],
})
export class ProductModule {}
