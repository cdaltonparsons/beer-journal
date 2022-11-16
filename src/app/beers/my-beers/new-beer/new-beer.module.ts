import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBeerPageRoutingModule } from './new-beer-routing.module';

import { NewBeerPage } from './new-beer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBeerPageRoutingModule
  ],
  declarations: [NewBeerPage]
})
export class NewBeerPageModule {}
