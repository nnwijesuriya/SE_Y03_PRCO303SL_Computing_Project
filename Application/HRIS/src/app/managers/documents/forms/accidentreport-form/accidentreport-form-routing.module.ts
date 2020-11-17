import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentreportFormPage } from './accidentreport-form.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentreportFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentreportFormPageRoutingModule {}
