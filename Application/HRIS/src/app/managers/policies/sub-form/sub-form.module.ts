import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubFormPageRoutingModule } from './sub-form-routing.module';

import { SubFormPage } from './sub-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubFormPageRoutingModule
  ],
  declarations: [SubFormPage]
})
export class SubFormPageModule {}
