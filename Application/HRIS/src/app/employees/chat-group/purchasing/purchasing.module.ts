import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasingPageRoutingModule } from './purchasing-routing.module';

import { PurchasingPage } from './purchasing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasingPageRoutingModule
  ],
  declarations: [PurchasingPage]
})
export class PurchasingPageModule {}
