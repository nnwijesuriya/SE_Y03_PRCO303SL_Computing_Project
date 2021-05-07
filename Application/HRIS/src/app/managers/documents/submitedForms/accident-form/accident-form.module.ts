import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentFormPageRoutingModule } from './accident-form-routing.module';

import { AccidentFormPage } from './accident-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentFormPageRoutingModule
  ],
  declarations: [AccidentFormPage, HeaderComponent]
})
export class AccidentFormPageModule {}
