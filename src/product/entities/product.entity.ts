import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
	@ApiProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty()
	@Column()
	nombre: string;

	@ApiProperty()
	@Column()
	descripcion: string;

	@ApiProperty()
	@Column()
	cantidadDisponible: number;

	@ApiProperty()
	@Column({type: 'numeric'})
	precioUnitario: number;

	@ApiProperty()
	@Column({ default: 'desconocido' })
	proveedor?: string;
}
