import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceInfoPage } from './attendance-info.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceInfoPageRoutingModule {}
