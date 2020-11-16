import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveRequestPageRoutingModule } from './leave-request-routing.module';

import { LeaveRequestPage } from './leave-request.page';
import {HeaderComponent} from '../../../../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveRequestPageRoutingModule
  ],
  declarations: [LeaveRequestPage]
})
export class LeaveRequestPageModule {}
