import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty({message: 'El campo nombre es requerido'})
	nombre: string;

    @IsNotEmpty()
    @IsString()
	descripcion: string;

    @IsNotEmpty()
    @IsNumber()
	cantidadDisponible: number;

    @IsNotEmpty()
    @IsNumber()
	precioUnitario: number;

    @IsOptional()
    @IsString()
	proveedor?: string;
}