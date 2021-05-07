import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtoRequestFormPageRoutingModule } from './pto-request-form-routing.module';

import { PtoRequestFormPage } from './pto-request-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtoRequestFormPageRoutingModule
  ],
  declarations: [PtoRequestFormPage, HeaderComponent]
})
export class PtoRequestFormPageModule {}
