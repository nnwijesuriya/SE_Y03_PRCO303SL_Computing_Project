import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReviewFormPageRoutingModule } from './employee-review-form-routing.module';

import { EmployeeReviewFormPage } from './employee-review-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReviewFormPageRoutingModule
  ],
  declarations: [EmployeeReviewFormPage]
})
export class EmployeeReviewFormPageModule {}
