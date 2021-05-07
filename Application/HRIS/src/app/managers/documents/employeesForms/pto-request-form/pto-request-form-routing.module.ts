import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtoRequestFormPage } from './pto-request-form.page';

const routes: Routes = [
  {
    path: '',
    component: PtoRequestFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtoRequestFormPageRoutingModule {}
