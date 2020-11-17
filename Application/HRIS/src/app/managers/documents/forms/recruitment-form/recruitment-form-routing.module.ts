import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruitmentFormPage } from './recruitment-form.page';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentFormPageRoutingModule {}
