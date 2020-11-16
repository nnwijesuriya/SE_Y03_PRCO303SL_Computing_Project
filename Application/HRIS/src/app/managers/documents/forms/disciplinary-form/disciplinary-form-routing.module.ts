import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaryFormPage } from './disciplinary-form.page';

const routes: Routes = [
  {
    path: '',
    component: DisciplinaryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisciplinaryFormPageRoutingModule {}
