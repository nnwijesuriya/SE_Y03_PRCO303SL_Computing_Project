import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecruitingPage } from './recruiting.page';

const routes: Routes = [
  {
    path: '',
    component: RecruitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitingPageRoutingModule {}
