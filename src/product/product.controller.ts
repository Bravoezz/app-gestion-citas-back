import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseArrayPipe,
	Inject,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProductService, IProductServiceToken } from './product.contracts';
import { ResponseEntity } from '../shared/response.entity';
import { Product } from './entities/product.entity';
import { ApiBody, ApiExtraModels, ApiOkResponse, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
	constructor(
		@Inject(IProductServiceToken) private readonly productService: IProductService
	) {}

	@Post()
	async create(@Body() createProductDto: CreateProductDto) {
		await this.productService.create(createProductDto);
		return {}
	}

	@Post('create-many')
	async createMany(@Body(new ParseArrayPipe({ items: CreateProductDto})) createProductDtoList: CreateProductDto[]) {
		await this.productService.createMany(createProductDtoList)
		return {}
	}

	@Get()
	@ApiResponse({ status: 200, description: 'Lista de productos', type: [Product] })
	async findAll(): Promise<Product[]> {
		return await this.productService.findAll()
	}

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Buscar producto por id', type: Product })
	findOne(@Param('id') id: string) {
		return this.productService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
		return this.productService.update(+id, updateProductDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.productService.remove(+id);
	}
}

//! datos insertados
// [
// 	{
// 	  "nombre": "Paracetamol",
// 	  "descripcion": "Analgesico y antifebril",
// 	  "cantidadDisponible": 100,
// 	  "precioUnitario": 5.99,
// 	  "proveedor": "Farmacia ABC"
// 	},
// 	{
// 	  "nombre": "Ibuprofeno",
// 	  "descripcion": "Antiinflamatorio",
// 	  "cantidadDisponible": 50,
// 	  "precioUnitario": 7.5,
// 	  "proveedor": "Farmacia XYZ"
// 	},
// 	{
// 	  "nombre": "Amoxicilina",
// 	  "descripcion": "Antibiótico",
// 	  "cantidadDisponible": 80,
// 	  "precioUnitario": 10.25,
// 	  "proveedor": "Distribuidora Pharma"
// 	},
// 	{
// 	  "nombre": "Omeprazol",
// 	  "descripcion": "Antiácido y antiulceroso",
// 	  "cantidadDisponible": 60,
// 	  "precioUnitario": 8.75,
// 	  "proveedor": "Farmacias del Sur"
// 	},
// 	{
// 	  "nombre": "Loratadina",
// 	  "descripcion": "Antihistamínico",
// 	  "cantidadDisponible": 120,
// 	  "precioUnitario": 6.49,
// 	  "proveedor": "Distribuidora Pharma"
// 	},
// 	{
// 	  "nombre": "Simvastatina",
// 	  "descripcion": "Hipolipemiante",
// 	  "cantidadDisponible": 40,
// 	  "precioUnitario": 12.0,
// 	  "proveedor": "Farmacia ABC"
// 	},
// 	{
// 	  "nombre": "Ciprofloxacino",
// 	  "descripcion": "Antibiótico",
// 	  "cantidadDisponible": 70,
// 	  "precioUnitario": 9.99,
// 	  "proveedor": "Farmacia XYZ"
// 	},
// 	{
// 	  "nombre": "Metformina",
// 	  "descripcion": "Antidiabético",
// 	  "cantidadDisponible": 90,
// 	  "precioUnitario": 11.25,
// 	  "proveedor": "Farmacias del Sur"
// 	},
// 	{
// 	  "nombre": "Atorvastatina",
// 	  "descripcion": "Hipolipemiante",
// 	  "cantidadDisponible": 35,
// 	  "precioUnitario": 14.75,
// 	  "proveedor": "Farmacia XYZ"
// 	},
// 	{
// 	  "nombre": "Dexametasona",
// 	  "descripcion": "Antiinflamatorio",
// 	  "cantidadDisponible": 55,
// 	  "precioUnitario": 8.99,
// 	  "proveedor": "Farmacias del Sur"
// 	}
//   ]