import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubFormPage } from './sub-form.page';

const routes: Routes = [
  {
    path: '',
    component: SubFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubFormPageRoutingModule {}
