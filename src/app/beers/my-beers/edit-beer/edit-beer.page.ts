import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Beer } from '../../beers.model';
import { BeersService } from '../../beers.service';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.page.html',
  styleUrls: ['./edit-beer.page.scss'],
})
export class EditBeerPage implements OnInit {
  beer: Beer;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private beerService: BeersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('beerId')) {
        this.navCtrl.navigateBack('/beers/tabs/my-beers');
        return;
      }
      this.beer = this.beerService.getBeer(paramMap.get('beerId'));
    })
  }

  toggleEdit() {
    
  }

}
