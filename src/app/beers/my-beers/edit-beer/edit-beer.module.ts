import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBeerPageRoutingModule } from './edit-beer-routing.module';

import { EditBeerPage } from './edit-beer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBeerPageRoutingModule
  ],
  declarations: [EditBeerPage]
})
export class EditBeerPageModule {}
