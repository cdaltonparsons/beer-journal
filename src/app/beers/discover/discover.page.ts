import { Component, OnInit } from '@angular/core';
import { Beer } from '../beers.model';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedBeers: Beer[];

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.loadedBeers = this.beersService.beers;
  }

}
