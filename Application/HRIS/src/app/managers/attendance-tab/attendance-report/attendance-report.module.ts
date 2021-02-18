import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceReportPageRoutingModule } from './attendance-report-routing.module';

import { AttendanceReportPage } from './attendance-report.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceReportPageRoutingModule
  ],
  declarations: [AttendanceReportPage, HeaderComponent]
})
export class AttendanceReportPageModule {}
