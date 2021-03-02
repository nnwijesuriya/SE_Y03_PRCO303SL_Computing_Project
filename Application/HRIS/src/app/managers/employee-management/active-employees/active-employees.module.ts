import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveEmployeesPageRoutingModule } from './active-employees-routing.module';

import { ActiveEmployeesPage } from './active-employees.page';
import { ViewComponent } from '../view/view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveEmployeesPageRoutingModule,
    Ng2SearchPipeModule,
    RatingModule
  ],
  declarations: [ActiveEmployeesPage,ViewComponent]
})
export class ActiveEmployeesPageModule {}
