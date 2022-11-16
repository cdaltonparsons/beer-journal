import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBeerPage } from './edit-beer.page';

const routes: Routes = [
  {
    path: '',
    component: EditBeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBeerPageRoutingModule {}
