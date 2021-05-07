import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PTOrequestFormPageRoutingModule } from './ptorequest-form-routing.module';

import { PTOrequestFormPage } from './ptorequest-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PTOrequestFormPageRoutingModule
  ],
  declarations: [PTOrequestFormPage, HeaderComponent]
})
export class PTOrequestFormPageModule {}
