import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cita {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fechaCita: Date;

	@Column({default: 'Pendiente'})
	estado: string;

	@Column()
	observaciones: string;

	@Column()
	idUsuarioCreador: number;

	@Column()
	idPaciente: number;

	@Column()
	idMedico: number;
}