import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagersPageRoutingModule } from './managers-routing.module';

import { ManagersPage } from './managers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagersPageRoutingModule
  ],
  declarations: [ManagersPage]
})
export class ManagersPageModule {}
