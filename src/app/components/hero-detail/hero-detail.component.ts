import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

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
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // ne fa instantnea, prende params, e prende il numero id
    console.log('id', id);
  }

}
