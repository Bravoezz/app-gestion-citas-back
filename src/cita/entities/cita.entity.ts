import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cita {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fechaCita: Date;

	@Column({ type: 'time', nullable: true })
	inicioCita?: string;

	@Column({ type: 'time', nullable: true })
	finCita?: string;

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