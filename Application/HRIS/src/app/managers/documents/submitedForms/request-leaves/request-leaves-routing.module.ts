import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestLeavesPage } from './request-leaves.page';

const routes: Routes = [
  {
    path: '',
    component: RequestLeavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestLeavesPageRoutingModule {}
