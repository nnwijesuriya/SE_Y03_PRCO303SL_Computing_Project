import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplinaryFormPageRoutingModule } from './disciplinary-form-routing.module';

import { DisciplinaryFormPage } from './disciplinary-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisciplinaryFormPageRoutingModule
  ],
  declarations: [DisciplinaryFormPage, HeaderComponent]
})
export class DisciplinaryFormPageModule {}
