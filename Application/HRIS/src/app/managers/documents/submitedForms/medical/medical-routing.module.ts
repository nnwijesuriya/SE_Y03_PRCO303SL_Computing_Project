import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalPage } from './medical.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalPageRoutingModule {}
