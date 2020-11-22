import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HRmanagersPageRoutingModule } from './hrmanagers-routing.module';

import { HRmanagersPage } from './hrmanagers.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HRmanagersPageRoutingModule
  ],
  declarations: [HRmanagersPage]
})
export class HRmanagersPageModule {}
