import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

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
    @IsString()
	edad?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type?: string;
}

