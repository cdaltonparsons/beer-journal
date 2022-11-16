import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../beers.model';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.page.html',
  styleUrls: ['./my-beers.page.scss'],
})
export class MyBeersPage implements OnInit {
  myBeers: Beer[];

  constructor(private beersService: BeersService, private router: Router) { }

  ngOnInit() {
    this.myBeers = this.beersService.beers;
  }

}
