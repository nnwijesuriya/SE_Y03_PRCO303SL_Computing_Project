import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtabsPage } from './rtabs.page';

const routes: Routes = [
  {
    path: '',
    component: RtabsPage,
    children: [
      {
        path: 'short listed',
        loadChildren: () => import('../short-listed/short-listed.module').then( m => m.ShortListedPageModule)
      },
      {
        path: 'applied all',
        loadChildren: () => import('../applied-all/applied-all.module').then( m => m.AppliedAllPageModule)
      },
      {
        path: 'declined',
        loadChildren: () => import('../declined/declined.module').then( m => m.DeclinedPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'rtabs/applied all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtabsPageRoutingModule {}
