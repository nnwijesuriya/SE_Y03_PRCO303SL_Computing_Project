import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeReleaseFormPage } from './employee-release-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeReleaseFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeReleaseFormPageRoutingModule {}
