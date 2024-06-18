import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

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
	contra?: string;

	@ApiProperty()
	@IsOptional()
	@IsString()
	dni?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    type?: string;
}

export class LoginUserDto {
	@ApiProperty()
    @IsString()
	@IsNotEmpty({ message: 'La contraseña es requerida' })
	contra: string;

    @ApiProperty()
    @IsEmail({}, {message: 'Correo invalido'})
	@IsNotEmpty({ message: 'El correo es requerido' })
	correo: string;

    @ApiProperty()
    @IsString()
	@IsNotEmpty()
    type: string;
}

export  class ResponseLoginDto {
	@ApiProperty()
	res: boolean;
	@ApiProperty()
	message: string;
	@ApiProperty()
	data: User | null;

	constructor(res: boolean, message: string, data: User | null) {
		this.res = res;
		this.message = message;
		this.data = data;
	}
}


