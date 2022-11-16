import { Injectable } from '@angular/core';
import { Beer } from './beers.model';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private _beers: Beer[] = [
    new Beer(
      'b1',
      'Denver IPA',
      'Hoppy and fresh',
      'Denver Beer Co.',
      'https://lagunitas.com/wp-content/uploads/2021/05/ipa01-1.png',
      5,
      76,
      4.5
    ),
    new Beer(
      'b2',
      'Smoked Porter',
      'Dark and smokey',
      'Great Divide',
      'https://sierranevada.com/wp-content/uploads/2018/10/Porter-Bottle.png',
      4.5,
      17,
      3.2
    ),
    new Beer(
      'b3',
      'Crisp Lager',
      'Smooth and crisp',
      'Spangalang',
      'https://products0.imgix.drizly.com/ci-yuengling-lager-4aa51b783d262ff2.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
      null,
      null,
      4.6
    )
  ];

  get beers() {
    return [...this._beers];
  }

  constructor() {}

  getBeer(id: string) {
    return {...this._beers.find(p => p.id === id)};
  }
}
