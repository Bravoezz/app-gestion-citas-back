import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
	@ApiProperty()
    @IsString()
	nombres: string;

	@ApiProperty()
    @IsString()
	apellidos: string;

	@ApiProperty()
    @IsString()
	edad: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type?: string;
}
