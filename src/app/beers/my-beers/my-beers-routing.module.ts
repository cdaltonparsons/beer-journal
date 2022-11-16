import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBeersPage } from './my-beers.page';

const routes: Routes = [
  {
    path: '',
    component: MyBeersPage
  },
  {
    path: 'new-beer',
    loadChildren: () => import('./new-beer/new-beer.module').then( m => m.NewBeerPageModule)
  },
  {
    path: 'edit-beer',
    loadChildren: () => import('./edit-beer/edit-beer.module').then( m => m.EditBeerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBeersPageRoutingModule {}
