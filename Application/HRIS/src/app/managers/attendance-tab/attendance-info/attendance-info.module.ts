import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceInfoPageRoutingModule } from './attendance-info-routing.module';

import { AttendanceInfoPage } from './attendance-info.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceInfoPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [AttendanceInfoPage, HeaderComponent, CodeGeneratorComponent]
})
export class AttendanceInfoPageModule {}
