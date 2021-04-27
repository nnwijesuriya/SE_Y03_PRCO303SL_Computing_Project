import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersPage } from './managers.page';

const routes: Routes = [
  {
    path: '',
    component: ManagersPage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'departments salaries',
    loadChildren: () => import('./departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs1/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./add-person/add-person.module').then( m => m.AddPersonPageModule)
  },
  {
    path: 'departments chat',
    loadChildren: () => import('./workgroup/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./attendance-tab/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'etabs',
    loadChildren: () => import('./employee-management/e-tabs/e-tabs.module').then( m => m.ETabsPageModule)
  },
  {
    path: 'stabs',
    loadChildren: () => import('./salaries/stabs/stabs.module').then( m => m.StabsPageModule)
  },  {
    path: 'graphs',
    loadChildren: () => import('./graphs/graphs.module').then( m => m.GraphsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagersPageRoutingModule {}
