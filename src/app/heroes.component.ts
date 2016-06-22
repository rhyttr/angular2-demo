import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: []
})
export class HeroesComponent implements OnInit {
  title = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private router: Router,
      private heroService: HeroService) { 

  }

  ngOnInit() {
    this.getHeroes();
    //this.getHeroesSlow();
  }
  onSelect(hero: Hero) { 
    this.selectedHero = hero;
  };

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getHeroesSlow() {
    this.heroService.getHeroesSlow().then(heroes => this.heroes = heroes);
  }
  gotoDetail() {
      this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
