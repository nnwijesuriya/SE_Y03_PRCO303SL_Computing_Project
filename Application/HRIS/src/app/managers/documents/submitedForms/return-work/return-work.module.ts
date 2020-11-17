import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnWorkPageRoutingModule } from './return-work-routing.module';

import { ReturnWorkPage } from './return-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnWorkPageRoutingModule
  ],
  declarations: [ReturnWorkPage]
})
export class ReturnWorkPageModule {}