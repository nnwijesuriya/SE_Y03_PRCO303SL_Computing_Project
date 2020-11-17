import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentFormPage } from './accident-form.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentFormPageRoutingModule {}
