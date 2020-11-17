import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTOrequestFormPage } from './ptorequest-form.page';

const routes: Routes = [
  {
    path: '',
    component: PTOrequestFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PTOrequestFormPageRoutingModule {}
