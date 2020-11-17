import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtoRequestPage } from './pto-request.page';

const routes: Routes = [
  {
    path: '',
    component: PtoRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtoRequestPageRoutingModule {}
