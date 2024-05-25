import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/db.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { RecetaModule } from './receta/receta.module';
import { HorarioModule } from './horario/horario.module';

@Module({
	imports: [DatabaseModule, ProductModule, UserModule, RecetaModule, HorarioModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

