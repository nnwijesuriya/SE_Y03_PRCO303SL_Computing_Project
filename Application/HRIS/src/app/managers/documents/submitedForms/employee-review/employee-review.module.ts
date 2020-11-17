import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReviewPageRoutingModule } from './employee-review-routing.module';

import { EmployeeReviewPage } from './employee-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReviewPageRoutingModule
  ],
  declarations: [EmployeeReviewPage]
})
export class EmployeeReviewPageModule {}
