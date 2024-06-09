import { Module } from '@nestjs/common';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';
import { CitaRepository } from './cita.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';


@Module({
	imports: [TypeOrmModule.forFeature([Cita])],
	providers: [CitaService, CitaRepository],
	controllers: [CitaController],
})
export class CitaModule {}