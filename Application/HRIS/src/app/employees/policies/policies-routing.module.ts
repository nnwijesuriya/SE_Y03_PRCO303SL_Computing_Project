import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliciesPage } from './policies.page';

const routes: Routes = [
  {
    path: '',
    component: PoliciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesPageRoutingModule {}
