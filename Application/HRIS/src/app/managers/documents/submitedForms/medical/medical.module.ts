import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalPageRoutingModule } from './medical-routing.module';

import { MedicalPage } from './medical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalPageRoutingModule
  ],
  declarations: [MedicalPage]
})
export class MedicalPageModule {}
