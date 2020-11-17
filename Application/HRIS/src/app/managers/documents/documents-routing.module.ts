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
  },
  {
    path: 'request-leaves/:id',
    loadChildren: () => import('./submitedForms/request-leaves/request-leaves.module').then( m => m.RequestLeavesPageModule)
  },
  {
    path: 'accident-form/:id',
    loadChildren: () => import('./submitedForms/accident-form/accident-form.module').then( m => m.AccidentFormPageModule)
  },
  {
    path: 'accidentreport-form',
    loadChildren: () => import('./forms/accidentreport-form/accidentreport-form.module').then( m => m.AccidentreportFormPageModule)
  },
  {
    path: 'disciplinary/:id',
    loadChildren: () => import('./submitedForms/disciplinary/disciplinary.module').then( m => m.DisciplinaryPageModule)
  },
  {
    path: 'employee-review/:id',
    loadChildren: () => import('./submitedForms/employee-review/employee-review.module').then( m => m.EmployeeReviewPageModule)
  },
  {
    path: 'complain-form',
    loadChildren: () => import('./forms/complain-form/complain-form.module').then( m => m.ComplainFormPageModule)
  },
  {
    path: 'medical-form',
    loadChildren: () => import('./forms/medical-form/medical-form.module').then( m => m.MedicalFormPageModule)
  },
  {
    path: 'recruitment-form',
    loadChildren: () => import('./forms/recruitment-form/recruitment-form.module').then( m => m.RecruitmentFormPageModule)
  },
  {
    path: 'return-work-form',
    loadChildren: () => import('./forms/return-work-form/return-work-form.module').then( m => m.ReturnWorkFormPageModule)
  },
  {
    path: 'employee-release-form',
    loadChildren: () => import('./forms/employee-release-form/employee-release-form.module').then( m => m.EmployeeReleaseFormPageModule)
  },
  {
    path: 'ptorequest-form',
    loadChildren: () => import('./forms/ptorequest-form/ptorequest-form.module').then( m => m.PTOrequestFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsPageRoutingModule {}
