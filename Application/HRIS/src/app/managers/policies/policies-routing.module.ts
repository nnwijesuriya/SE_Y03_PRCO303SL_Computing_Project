import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliciesPage } from './policies.page';

const routes: Routes = [
  {
    path: '',
    component: PoliciesPage
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./sub-form/sub-form.module').then( m => m.SubFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesPageRoutingModule {}
