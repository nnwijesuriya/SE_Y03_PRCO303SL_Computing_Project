import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliedAllPage } from './applied-all.page';

const routes: Routes = [
  {
    path: '',
    component: AppliedAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliedAllPageRoutingModule {}
