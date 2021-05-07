import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnWorkFormPageRoutingModule } from './return-work-form-routing.module';

import { ReturnWorkFormPage } from './return-work-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnWorkFormPageRoutingModule
  ],
  declarations: [ReturnWorkFormPage, HeaderComponent]
})
export class ReturnWorkFormPageModule {}
