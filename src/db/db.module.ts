import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import * as dotenv from 'dotenv';
import { User } from 'src/user/entities/user.entity';
import { Receta } from 'src/receta/entities/receta.entity';
import { Horario } from 'src/horario/entities/horario.entity';

dotenv.config()

export const DatabaseModule: DynamicModule = TypeOrmModule.forRoot({
	type: process.env.DB_TYPE as any,
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	username: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	ssl: true, //! descomenta esto cuando vallas a deployar
	entities: [Product, User, Receta, Horario], // esto o el autoload en true
	// autoLoadEntities: true,
	synchronize: true,
});
