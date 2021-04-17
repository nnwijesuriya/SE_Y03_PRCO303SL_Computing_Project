import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HeaderEmployeesComponent } from 'src/app/header-employees/header-employees.component';
import { RatingModule } from 'ng-starrating';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    RatingModule
  ],
  declarations: [DashboardPage, HeaderEmployeesComponent, MyReviewsComponent]
})
export class DashboardPageModule {}
