import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersPage } from './managers.page';

const routes: Routes = [
  {
    path: '',
    component: ManagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagersPageRoutingModule {}
