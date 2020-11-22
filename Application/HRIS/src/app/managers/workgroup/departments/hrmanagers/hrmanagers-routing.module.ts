import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HRmanagersPage } from './hrmanagers.page';

const routes: Routes = [
  {
    path: '',
    component: HRmanagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HRmanagersPageRoutingModule {}
