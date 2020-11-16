import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplinaryFormPageRoutingModule } from './disciplinary-form-routing.module';

import { DisciplinaryFormPage } from './disciplinary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisciplinaryFormPageRoutingModule
  ],
  declarations: [DisciplinaryFormPage]
})
export class DisciplinaryFormPageModule {}
