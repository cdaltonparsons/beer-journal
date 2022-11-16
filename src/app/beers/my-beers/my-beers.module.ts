import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBeersPageRoutingModule } from './my-beers-routing.module';

import { MyBeersPage } from './my-beers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBeersPageRoutingModule
  ],
  declarations: [MyBeersPage]
})
export class MyBeersPageModule {}
