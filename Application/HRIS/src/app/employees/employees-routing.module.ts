import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '', 
    component: EmployeesPage
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./chat-group/accounting/accounting.module').then( m => m.AccountingPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./chat-group/manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./chat-group/marketing/marketing.module').then( m => m.MarketingPageModule)
  },
  {
    path: 'production',
    loadChildren: () => import('./chat-group/production/production.module').then( m => m.ProductionPageModule)
  },
  {
    path: 'purchasing',
    loadChildren: () => import('./chat-group/purchasing/purchasing.module').then( m => m.PurchasingPageModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./chat-group/research/research.module').then( m => m.ResearchPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./policies/policies.module').then( m => m.PoliciesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
