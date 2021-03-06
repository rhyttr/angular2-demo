import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlow() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 3000)
        );
    }
    getHero(id: number) {
        return this.getHeroes().then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}