import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

import { NgCalendarModule } from 'ionic2-calendar';
import { HeaderEmployeesComponent } from 'src/app/header-employees/header-employees.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule 
  ],
  declarations: [CalendarPage, HeaderEmployeesComponent]
})
export class CalendarPageModule {}
