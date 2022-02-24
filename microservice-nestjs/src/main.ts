import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, './proto/hero.proto'),
    },

  });

  // tslint:disable-next-line: no-console
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
