import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeersPage } from './beers.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BeersPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path: ':beerId',
            loadChildren: () => import('./discover/beer-detail/beer-detail.module').then( m => m.BeerDetailPageModule)
          }
        ]
      },
      {
        path: 'my-beers',
        children: [
          {
            path: '',
            loadChildren: () => import('./my-beers/my-beers.module').then( m => m.MyBeersPageModule)
          },
          {
            path: 'new-beer',
            loadChildren: () => import('./my-beers/new-beer/new-beer.module').then( m => m.NewBeerPageModule)
          },
          {
            path: 'details/:beerId',
            loadChildren: () => import('./my-beers/edit-beer/edit-beer.module').then( m => m.EditBeerPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/beers/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/beers/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersPageRoutingModule {}
