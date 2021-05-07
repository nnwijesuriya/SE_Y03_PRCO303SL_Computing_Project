import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderEmployeesComponent } from 'src/app/header-employees/header-employees.component';
import { RatingModule } from 'ng-starrating';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { MedicalFormComponent } from '../documents/forms/medical-form/medical-form.component';
import { ComplainFormComponent } from '../documents/forms/complain-form/complain-form.component';
import { LeaveRequestFormComponent } from '../documents/forms/leave-request-form/leave-request-form.component';
import { PtorequestFormComponent } from '../documents/forms/ptorequest-form/ptorequest-form.component';
import { ReturnWorkFormComponent } from '../documents/forms/return-work-form/return-work-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    RatingModule
  ],
  declarations: [DashboardPage, HeaderEmployeesComponent, MyReviewsComponent, MedicalFormComponent, ComplainFormComponent, LeaveRequestFormComponent, PtorequestFormComponent, ReturnWorkFormComponent],
  entryComponents: [ MedicalFormComponent, ComplainFormComponent, LeaveRequestFormComponent, PtorequestFormComponent, ReturnWorkFormComponent]
})
export class DashboardPageModule {}
