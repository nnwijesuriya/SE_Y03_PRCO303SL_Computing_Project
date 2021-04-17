import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';
import { HeaderEmployeesComponent } from 'src/app/header-employees/header-employees.component';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPageRoutingModule,
    Ng2SearchPipeModule,
    RatingModule
  ],
  declarations: [ReviewPage, HeaderEmployeesComponent]
})
export class ReviewPageModule {}
