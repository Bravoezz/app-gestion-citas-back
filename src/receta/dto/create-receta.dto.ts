import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber } from "class-validator";

export class CreateRecetaDto {
    @ApiProperty()
    nombre?: string;
    
    @ApiProperty()
    totalPrice: number;

    @ApiProperty()
    @IsNumber()
    userId: number;

    @ApiProperty()
    @IsArray()
    productIds: number[];
}