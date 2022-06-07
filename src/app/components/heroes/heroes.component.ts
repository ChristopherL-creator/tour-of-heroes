import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm'; // typescript sa già che è string, non puoi quindi infilare numero
  hero: Hero = {
    name: 'Windstorm',
    id: 1,
  }

    selectedHero?: Hero; // quando etto nuova proprietà controlla se l'abbia già inizializzata,
    //                      scrivendola così non devo garantire che sia proprietà piena(opppure  selectedHero: Hero | undefined)

    heroes: Hero[] = []; // inizio con heroes array vuoto

    constructor(private heroServ: HeroService) { //

    }

    ngOnInit(): void { //genero chiamata per avere eroi
      this.getHeroes()
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      console.log(this.selectedHero);
    }

    getHeroes(){
      // this.heroes = this.heroServ.getHeroes(); // heroserv mi da eroi mock
      this.heroServ.getHeroes().subscribe({
        next: newHeroes => this.heroes = newHeroes,
        error: err => console.log(err)
      });
    }
}
