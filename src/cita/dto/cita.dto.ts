import { ApiProperty } from '@nestjs/swagger';

export class CitaDto {
	@ApiProperty()
	fechaCita: Date;

	@ApiProperty()
	estado: string;

	@ApiProperty()
	observaciones: string;

	@ApiProperty()
	idUsuarioCreador: number;

	@ApiProperty()
	idPaciente: number;

	@ApiProperty()
	idMedico: number;
}