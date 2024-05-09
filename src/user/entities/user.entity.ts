import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @ApiProperty()
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty()
	@Column()
	nombres: string;

	@ApiProperty()
	@Column()
	apellidos: string;

	@ApiProperty()
	@Column()
	edad: string;

    @ApiProperty()
	@Column({ default: 'paciente' })
    type: string;
}
