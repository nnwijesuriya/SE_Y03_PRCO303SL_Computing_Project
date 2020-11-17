import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeReleasePage } from './employee-release.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeReleasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeReleasePageRoutingModule {}
