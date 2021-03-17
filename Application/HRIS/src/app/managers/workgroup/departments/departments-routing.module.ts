import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentsPage } from './departments.page';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsPage
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then( m => m.MarketingPageModule)
  },
  {
    path: 'production',
    loadChildren: () => import('./production/production.module').then( m => m.ProductionPageModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./research/research.module').then( m => m.ResearchPageModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then( m => m.AccountingPageModule)
  },
  {
    path: 'purchasing',
    loadChildren: () => import('./purchasing/purchasing.module').then( m => m.PurchasingPageModule)
  },
  {
    path: 'hrmanagers',
    loadChildren: () => import('./hrmanagers/hrmanagers.module').then( m => m.HRmanagersPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsPageRoutingModule {}
