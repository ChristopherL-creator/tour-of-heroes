import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';

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

    heroes = HEROES;

    constructor() { }

    ngOnInit(): void {
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      console.log(this.selectedHero);

    }
}
