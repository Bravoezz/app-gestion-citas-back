import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Horario {

    @ApiProperty()
	@PrimaryGeneratedColumn()
	id: number;
    
    @Column()
    @ApiProperty()
    diaSemana: string;
    
    @Column()
    @ApiProperty()
    horaInicio: Date;
    
    @Column()
    @ApiProperty()
    horaFin: Date;
    
    @Column()
    @ApiProperty()
    doctorId: number;

    @ManyToOne(() => User, (user) => user.horarios)
    doctor: User;
}
