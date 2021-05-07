import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplainFormPage } from './complain-form.page';

const routes: Routes = [
  {
    path: '',
    component: ComplainFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplainFormPageRoutingModule {}
