import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsPage } from './documents.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsPage
  },
  {
    path: 'leave-request',
    loadChildren: () => import('./forms/leave-request/leave-request.module').then( m => m.LeaveRequestPageModule)
  },
  {
    path: 'employee-review-form',
    loadChildren: () => import('./forms/employee-review-form/employee-review-form.module').then( m => m.EmployeeReviewFormPageModule)
  },
  {
    path: 'disciplinary-form',
    loadChildren: () => import('./forms/disciplinary-form/disciplinary-form.module').then( m => m.DisciplinaryFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPageRoutingModule {}
