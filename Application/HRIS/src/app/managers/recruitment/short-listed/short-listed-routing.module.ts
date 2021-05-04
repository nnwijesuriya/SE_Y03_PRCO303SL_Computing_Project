import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortListedPage } from './short-listed.page';

const routes: Routes = [
  {
    path: '',
    component: ShortListedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortListedPageRoutingModule {}
