import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalFormPageRoutingModule } from './medical-form-routing.module';

import { MedicalFormPage } from './medical-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalFormPageRoutingModule
  ],
  declarations: [MedicalFormPage, HeaderComponent]
})
export class MedicalFormPageModule {}
