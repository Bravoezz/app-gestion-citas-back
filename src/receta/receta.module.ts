import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaController } from './receta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';
import { RecetaRepository } from './receta.repository';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Receta]), ProductModule],
  providers: [RecetaService, RecetaRepository],
  controllers: [RecetaController],
})
export class RecetaModule {}
