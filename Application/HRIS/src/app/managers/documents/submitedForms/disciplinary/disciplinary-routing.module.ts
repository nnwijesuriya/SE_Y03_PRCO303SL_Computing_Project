import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaryPage } from './disciplinary.page';

const routes: Routes = [
  {
    path: '',
    component: DisciplinaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisciplinaryPageRoutingModule {}
