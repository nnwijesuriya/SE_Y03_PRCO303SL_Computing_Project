import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclinedPage } from './declined.page';

const routes: Routes = [
  {
    path: '',
    component: DeclinedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclinedPageRoutingModule {}
