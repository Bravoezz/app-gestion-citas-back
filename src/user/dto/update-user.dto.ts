import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
	nombres?: string;

	@ApiProperty()
    @IsOptional()
    @IsString()
	apellidos?: string;

	@ApiProperty()
    @IsOptional()
    // @IsString()
	edad?: string;

    @ApiProperty()
    @IsOptional()
    @IsEmail()
	correo?: string;

	@ApiProperty()
    @IsOptional()
    @IsString()
	telefono?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type?: string;
}

