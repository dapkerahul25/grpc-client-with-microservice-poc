import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from './hero-grpc-options';
import { Observable, of } from 'rxjs';
import { Hero,HeroById } from './interfaces/hero.interface';
interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
}
@Controller('hero')
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly hero: ClientGrpc;

  private heroService: HeroService;

  onModuleInit() {
    this.heroService = this.hero.getService<HeroService>('HeroService');
  
  }

  @Get('hero')
  find(): Promise<Hero> {
   return this.heroService.findOne({ id: 1 }).toPromise();
    
  }

}
