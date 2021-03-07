import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedPageRoutingModule } from './approved-routing.module';

import { ApprovedPage } from './approved.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedPageRoutingModule,
    Ng2SearchPipeModule,
    RatingModule
  ],
  declarations: [ApprovedPage, PaymentEditComponent]
})
export class ApprovedPageModule {}
