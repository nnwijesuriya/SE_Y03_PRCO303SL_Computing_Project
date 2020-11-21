import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatgroupPage } from './chatgroup.page';

const routes: Routes = [
  {
    path: '',
    component: ChatgroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatgroupPageRoutingModule {}
