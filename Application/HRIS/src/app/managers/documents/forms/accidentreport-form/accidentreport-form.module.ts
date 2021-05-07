import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentreportFormPageRoutingModule } from './accidentreport-form-routing.module';

import { AccidentreportFormPage } from './accidentreport-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentreportFormPageRoutingModule
  ],
  declarations: [AccidentreportFormPage, HeaderComponent]
})
export class AccidentreportFormPageModule {}
