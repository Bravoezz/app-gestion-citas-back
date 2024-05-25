import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHorarioDto {
    @ApiProperty()
    @IsNotEmpty({message: 'El dia es requerido'})
    @IsString()
    diaSemana: string;

    @ApiProperty()
    @IsNotEmpty({message: 'Hora de inicio invalida'})
    @IsDateString()
    horaInicio: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty({message: 'Hora de fin invalida'})
    horaFin: string;

    @ApiProperty()
    @IsNotEmpty({message: 'Id de doctor invalido'})
    @IsNumber()
    doctorId: number;
}
