import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'managers/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then( m => m.EmployeesPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'employees'
    }
  },
  {
    path: 'managers',
    loadChildren: () => import('./managers/managers.module').then( m => m.ManagersPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'managers'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
