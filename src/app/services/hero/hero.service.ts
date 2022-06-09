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

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    //  ciclo su tutti gli eroi, prendo singolo hero con find(filter che prende primo elemento a rispettare condizione, che abbia id uguale a id
    //  già passato)
    this.messageServ.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // find(id: number){
  //   for (const hero of HEROES) {
  //     if (hero.id === id)
  //       return hero;
  //   }
  // }
  // return undefined
}

