import { ApiProperty } from '@nestjs/swagger';
import { Horario } from 'src/horario/entities/horario.entity';

export class AllMedicsDto {
	@ApiProperty()
	id: number;

	@ApiProperty()
	nombres: string;

	@ApiProperty()
	apellidos: string;

	@ApiProperty()
	edad: string;

	@ApiProperty()
	correo?: string;

	@ApiProperty()
	telefono?: string;

	@ApiProperty()
	type: string;

	@ApiProperty({ type: [Horario] })
	horarios: Horario[];
}
