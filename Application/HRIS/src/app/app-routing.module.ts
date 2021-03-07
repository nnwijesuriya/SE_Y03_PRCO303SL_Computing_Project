import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./managers/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'departments salaries',
    loadChildren: () => import('./managers/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./managers/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./managers/tabs1/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./managers/add-person/add-person.module').then( m => m.AddPersonPageModule)
  },
  {
    path: 'departments chat',
    loadChildren: () => import('./managers/workgroup/departments/departments.module').then( m => m.DepartmentsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./managers/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./managers/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./managers/policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./managers/attendance-tab/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'etabs',
    loadChildren: () => import('./managers/employee-management/e-tabs/e-tabs.module').then( m => m.ETabsPageModule)
  },
  {
    path: 'stabs',
    loadChildren: () => import('./managers/salaries/stabs/stabs.module').then( m => m.StabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
