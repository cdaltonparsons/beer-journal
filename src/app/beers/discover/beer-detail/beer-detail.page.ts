import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Beer } from '../../beers.model';
import { BeersService } from '../../beers.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.page.html',
  styleUrls: ['./beer-detail.page.scss'],
})
export class BeerDetailPage implements OnInit {
  beer: Beer;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private beerService: BeersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('beerId')) {
        this.navCtrl.navigateBack('/beers/tabs/discover');
        return;
      }
      this.beer = this.beerService.getBeer(paramMap.get('beerId'));
    })
  }

  addBeer() {

  }

}
