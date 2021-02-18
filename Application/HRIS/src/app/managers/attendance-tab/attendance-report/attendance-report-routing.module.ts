import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceReportPage } from './attendance-report.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceReportPageRoutingModule {}
