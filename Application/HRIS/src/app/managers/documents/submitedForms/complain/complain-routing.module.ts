import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplainPage } from './complain.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplainPageRoutingModule {}
