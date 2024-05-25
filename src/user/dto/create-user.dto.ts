import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
	@ApiProperty()
    @IsString()
	nombres: string;

	@ApiProperty()
    @IsString()
	apellidos: string;

    // @IsString()
	@ApiProperty()
	edad: string;

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
