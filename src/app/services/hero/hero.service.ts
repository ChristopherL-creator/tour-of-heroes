import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from 'src/app/model/hero';
// import { HEROES } from 'src/app/model/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://628b2f687886bbbb37b2139d.mockapi.io/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageServ: MessageService, private http: HttpClient) { } // construttore die che per costruire hero service ha bisogno di message
  //                                                      service(dependenciy) framework glielo inietta(injection dependscy)

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);  // ho trosaformato in observable
    // this.log('ciao, son hero service, ho caricato eroi')
    // return heroes; // ho arry di obserable
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      // hero è il tipo di risposta che si aspetta
      tap(_ => this.log('ho caricato gli eroi')),
      // funzione per loggare dato
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: string): Observable<Hero> {
    const heroUrl = this.heroesUrl + '/' + id;
    return this.http.get<Hero>(heroUrl).pipe(
      // hero è il tipo di risposta che si aspetta
      tap(_ => this.log('ho caricato l\'eroe con id: ' + id)),
      // funzione per loggare dato
      catchError(this.handleError<Hero>('getHeroes'))
    )

    // const hero = HEROES.find(h => h.id === id)!;
    // //  ciclo su tutti gli eroi, prendo singolo hero con find(filter che prende primo elemento a rispettare condizione, che abbia id uguale a id
    // //  già passato)
    // this.log(`HeroService: fetched hero id=${id}`);
    // return of(hero);
  }

  log(message: string): void {
    this.messageServ.add(message);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<Hero> {
    const heroUrl = this.heroesUrl + '/' + hero.id;
    return this.http.put<Hero>(heroUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

  // find(id: number){
  //   for (const hero of HEROES) {
  //     if (hero.id === id)
  //       return hero;
  //   }
  // }
  // return undefined
}

