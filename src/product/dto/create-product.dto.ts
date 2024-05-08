import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({message: 'El campo nombre es requerido'})
	nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
	descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
	cantidadDisponible: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
	precioUnitario: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
	proveedor?: string;
}