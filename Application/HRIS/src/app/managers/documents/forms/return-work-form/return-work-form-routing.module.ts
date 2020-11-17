import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnWorkFormPage } from './return-work-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnWorkFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnWorkFormPageRoutingModule {}
