import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServ: MessageService) { } // construttore die che per costruire hero service ha bisogno di message
  //                                                      service(dependenciy) framework glielo inietta(injection dependscy)

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);  // ho trosaformato in observable
    this.messageServ.add('ciao, son hero service, ho caricato eroi')
    return heroes; // ho arry di obserable
  }
}
