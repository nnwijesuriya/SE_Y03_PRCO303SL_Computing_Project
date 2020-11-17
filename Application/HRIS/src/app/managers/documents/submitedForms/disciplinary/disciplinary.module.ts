import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplinaryPageRoutingModule } from './disciplinary-routing.module';

import { DisciplinaryPage } from './disciplinary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisciplinaryPageRoutingModule
  ],
  declarations: [DisciplinaryPage]
})
export class DisciplinaryPageModule {}
