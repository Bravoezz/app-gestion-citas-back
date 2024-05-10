import { ApiProperty } from '@nestjs/swagger';
import { Receta } from 'src/receta/entities/receta.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
