import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InactiveEmployeesPage } from './inactive-employees.page';

const routes: Routes = [
  {
    path: '',
    component: InactiveEmployeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactiveEmployeesPageRoutingModule {}
