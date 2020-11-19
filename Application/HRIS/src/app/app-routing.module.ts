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
    path: 'departments',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
