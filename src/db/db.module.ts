import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import * as dotenv from 'dotenv';
import { User } from 'src/user/entities/user.entity';

dotenv.config()

export const DatabaseModule: DynamicModule = TypeOrmModule.forRoot({
	type: process.env.DB_TYPE as any,
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	// ssl: true,
	entities: [Product, User], // esto o el autoload en true
	// autoLoadEntities: true,
	synchronize: true,
});
