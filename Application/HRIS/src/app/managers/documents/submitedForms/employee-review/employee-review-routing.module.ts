import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeReviewPage } from './employee-review.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeReviewPageRoutingModule {}
