import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'attendance-info',
        loadChildren: () => import('../attendance-info/attendance-info.module').then( m => m.AttendanceInfoPageModule)
      },
      {
        path: 'mark-attendance',
        loadChildren: () => import('../mark-attendance/mark-attendance.module').then( m => m.MarkAttendancePageModule)
      },
    ]
  },
{
  path: '',
  redirectTo: 'tab/attendance-info',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
