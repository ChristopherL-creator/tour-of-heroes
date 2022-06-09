import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero; // ho creato variabile hero che possa venire letta da html

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(){
    // per eroe singolo
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // ne fa instantnea, prende params, e prende il numero id
    console.log('id', id);
    this.heroService.getHero(id).subscribe({
      next: (eroe) => this.hero = eroe,
      error: (err) => console.log(err)

    })
  }

  goBack(): void {
    this.location.back();
  }

}
