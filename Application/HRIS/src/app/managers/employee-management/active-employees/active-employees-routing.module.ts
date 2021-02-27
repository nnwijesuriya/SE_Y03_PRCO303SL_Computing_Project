import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveEmployeesPage } from './active-employees.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveEmployeesPageRoutingModule {}
