import { ApiProperty } from "@nestjs/swagger";
import { Receta } from "src/receta/entities/receta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

	@OneToMany(() => Receta, (receta) => receta.user)
	recetas: Receta[]
}
