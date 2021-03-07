import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotApprovedPage } from './not-approved.page';

const routes: Routes = [
  {
    path: '',
    component: NotApprovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotApprovedPageRoutingModule {}
