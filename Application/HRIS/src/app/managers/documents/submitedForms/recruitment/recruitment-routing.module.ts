import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruitmentPage } from './recruitment.page';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentPageRoutingModule {}
