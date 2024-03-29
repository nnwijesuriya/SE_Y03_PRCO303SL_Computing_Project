import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ETabsPage } from './e-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ETabsPage,
    children: [
      {
        path: 'active-employees',
        loadChildren: () => import('../active-employees/active-employees.module').then( m => m.ActiveEmployeesPageModule)
      },
      {
        path: 'inactive-employees',
        loadChildren: () => import('../inactive-employees/inactive-employees.module').then( m => m.InactiveEmployeesPageModule)
      }
    ]
  },
{
  path: '',
  redirectTo: 'etabs/active-employees',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ETabsPageRoutingModule {}
