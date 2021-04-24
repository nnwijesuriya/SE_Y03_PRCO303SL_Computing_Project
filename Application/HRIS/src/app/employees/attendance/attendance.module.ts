import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancePageRoutingModule } from './attendance-routing.module';

import { AttendancePage } from './attendance.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { VerifyFormArrivalComponent } from './verify-form-arrival/verify-form-arrival.component';
import { VerifyFormDepartureComponent } from './verify-form-departure/verify-form-departure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendancePageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [AttendancePage, VerifyFormArrivalComponent, VerifyFormDepartureComponent]
})
export class AttendancePageModule {}
