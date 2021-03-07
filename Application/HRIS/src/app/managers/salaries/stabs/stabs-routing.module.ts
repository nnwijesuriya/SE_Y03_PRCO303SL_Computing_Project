import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StabsPage } from './stabs.page';

const routes: Routes = [
  {
    path: '',
    component: StabsPage,
    children: [
      {
        path: 'approved',
        loadChildren: () => import('../approved/approved.module').then( m => m.ApprovedPageModule)
      },
      {
        path: 'not-approved',
        loadChildren: () => import('../not-approved/not-approved.module').then( m => m.NotApprovedPageModule)
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StabsPageRoutingModule {}
