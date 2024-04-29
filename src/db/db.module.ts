import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';

export const DatabaseModule: DynamicModule = TypeOrmModule.forRoot({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'toor',
	database: 'app_salud',
	entities: [Product], // esto o el autoload en true
	// autoLoadEntities: true,
	synchronize: true,
});
