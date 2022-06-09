import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroServ: HeroService) { }
  // riutilizza stesso service di heroes componenent

  ngOnInit(): void {
    this.getHeroes();
      //  chiamo funzione get heroes
  }

  getHeroes(){
    this.heroServ.getHeroes().subscribe({
      // observale c'è già, faccio funione subscribe
      next: (heroes) => this.heroes = heroes.slice(1, 5),
      // quando risultato è positivo:
      // arrivano heroes, uguali alla classe heroes(riferiti a proprietà classe), di cui taglia primo e quarto
      error: (err) => console.log(err)

    })
    // ci da observables
  }

}
