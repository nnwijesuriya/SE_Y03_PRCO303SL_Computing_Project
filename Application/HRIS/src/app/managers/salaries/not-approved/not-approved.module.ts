import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotApprovedPageRoutingModule } from './not-approved-routing.module';

import { NotApprovedPage } from './not-approved.page';
import { PaymentUpdateComponent } from '../payment-update/payment-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotApprovedPageRoutingModule
  ],
  declarations: [NotApprovedPage, PaymentUpdateComponent]
})
export class NotApprovedPageModule {}
