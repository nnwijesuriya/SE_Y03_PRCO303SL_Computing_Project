import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasingPage } from './purchasing.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasingPageRoutingModule {}
