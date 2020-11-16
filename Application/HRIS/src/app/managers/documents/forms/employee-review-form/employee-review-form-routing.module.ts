import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeReviewFormPage } from './employee-review-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeReviewFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeReviewFormPageRoutingModule {}
