import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersPage } from './beers.page';

const routes: Routes = [
  {
    path: '',
    component: BeersPage
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'my-beers',
    loadChildren: () => import('./my-beers/my-beers.module').then( m => m.MyBeersPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersPageRoutingModule {}
