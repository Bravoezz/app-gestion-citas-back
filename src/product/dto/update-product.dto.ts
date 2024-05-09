import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
	nombre?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
	descripcion?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
	cantidadDisponible?: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
	precioUnitario?: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
	proveedor?: string;
}
