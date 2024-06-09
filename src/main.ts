import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	//cors
	app.enableCors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] });

	// request validations
	app.useGlobalPipes(new ValidationPipe());

	//prefix api/v1 in all endpoints
	app.setGlobalPrefix('/api/v1');

	//swagger
	const config = new DocumentBuilder()
		.setTitle('Citas Medicas Api')
		.setDescription('Rest API for managing medical appointments')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/v1/docs', app, document)

	await app.listen(5000);
}
bootstrap();
