import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkAttendancePage } from './mark-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: MarkAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkAttendancePageRoutingModule {}
