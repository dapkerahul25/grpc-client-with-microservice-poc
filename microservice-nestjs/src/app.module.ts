import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroService } from './hero/hero.controller';

@Module({
  imports: [],
  controllers: [AppController, HeroService],
  providers: [AppService, HeroService],
})
export class AppModule {}
