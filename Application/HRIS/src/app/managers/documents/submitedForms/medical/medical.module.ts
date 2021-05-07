import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalPageRoutingModule } from './medical-routing.module';

import { MedicalPage } from './medical.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalPageRoutingModule
  ],
  declarations: [MedicalPage, HeaderComponent]
})
export class MedicalPageModule {}
