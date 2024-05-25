import { ApiProperty } from '@nestjs/swagger';
import { Receta } from 'src/receta/entities/receta.entity';

export class AllPatientsDto {
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

    @ApiProperty({ type: [Receta]})
    recetas: Receta[]
}
