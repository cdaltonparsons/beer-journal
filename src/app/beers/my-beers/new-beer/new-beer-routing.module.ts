import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBeerPage } from './new-beer.page';

const routes: Routes = [
  {
    path: '',
    component: NewBeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBeerPageRoutingModule {}
