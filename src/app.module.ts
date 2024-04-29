import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/db.module';
import { ProductModule } from './product/product.module';

@Module({
	imports: [DatabaseModule, ProductModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
