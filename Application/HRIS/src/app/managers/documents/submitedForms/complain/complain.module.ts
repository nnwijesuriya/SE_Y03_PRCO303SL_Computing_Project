import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplainPageRoutingModule } from './complain-routing.module';

import { ComplainPage } from './complain.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplainPageRoutingModule
  ],
  declarations: [ComplainPage, HeaderComponent]
})
export class ComplainPageModule {}
