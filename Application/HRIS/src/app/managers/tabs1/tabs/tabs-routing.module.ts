import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
          {
            path: 'notices',
            loadChildren: () => import('../notices/notices.module').then( m => m.NoticesPageModule)
          }
        ]
      },
    {
      path: '',
      redirectTo: 'tabs/notices',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
