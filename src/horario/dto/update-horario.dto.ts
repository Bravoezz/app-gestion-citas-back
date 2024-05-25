import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHorarioDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    diaSemana?: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    horaInicio?: string;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    horaFin?: string;
}
