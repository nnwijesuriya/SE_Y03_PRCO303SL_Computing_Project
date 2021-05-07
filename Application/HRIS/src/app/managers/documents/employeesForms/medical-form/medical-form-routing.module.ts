import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalFormPage } from './medical-form.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalFormPageRoutingModule {}
