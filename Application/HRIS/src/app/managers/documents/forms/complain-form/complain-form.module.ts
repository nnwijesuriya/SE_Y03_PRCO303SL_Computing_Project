import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplainFormPageRoutingModule } from './complain-form-routing.module';

import { ComplainFormPage } from './complain-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplainFormPageRoutingModule
  ],
  declarations: [ComplainFormPage]
})
export class ComplainFormPageModule {}
