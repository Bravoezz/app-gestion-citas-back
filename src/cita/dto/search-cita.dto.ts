import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumberString, IsOptional } from 'class-validator';


export class SearchCita {
	@ApiProperty()
	@IsOptional()
	@IsNumberString()
	dniPaciente: string;

	@ApiProperty()
	@IsOptional()
	@IsDateString()
	fechaCita: string;
}