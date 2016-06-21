import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = '英雄指南';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) 
  { 

  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getHeroesSlow() {
    this.heroService.getHeroesSlow().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    //this.getHeroes();
    this.getHeroesSlow();
  }
  onSelect(hero: Hero) { 
    this.selectedHero = hero;
  };

}
