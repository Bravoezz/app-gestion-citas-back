import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column()
	descripcion: string;

	@Column()
	cantidadDisponible: number;

	@Column({type: 'numeric'})
	precioUnitario: number;

	@Column({ default: 'desconocido' })
	proveedor?: string;
}
