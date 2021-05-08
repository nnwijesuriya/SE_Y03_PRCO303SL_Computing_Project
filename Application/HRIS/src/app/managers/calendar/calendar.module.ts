import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

import {HeaderComponent} from '../../header/header.component';

import { NgCalendarModule } from 'ionic2-calendar';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarPage,HeaderComponent,AddFormComponent],
  entryComponents: [AddFormComponent]
})
export class CalendarPageModule {}
