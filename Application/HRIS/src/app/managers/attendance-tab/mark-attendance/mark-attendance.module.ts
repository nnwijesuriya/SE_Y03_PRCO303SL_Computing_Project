import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkAttendancePageRoutingModule } from './mark-attendance-routing.module';

import { MarkAttendancePage } from './mark-attendance.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { VerifyFormComponent } from './verify-form/verify-form.component';
import { VerifyFormDepartureComponent } from './verify-form-departure/verify-form-departure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkAttendancePageRoutingModule
  ],
  declarations: [MarkAttendancePage, HeaderComponent, VerifyFormComponent, VerifyFormDepartureComponent]
})
export class MarkAttendancePageModule {}
