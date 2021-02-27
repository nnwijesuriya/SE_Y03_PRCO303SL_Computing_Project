import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactiveEmployeesPageRoutingModule } from './inactive-employees-routing.module';

import { InactiveEmployeesPage } from './inactive-employees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactiveEmployeesPageRoutingModule
  ],
  declarations: [InactiveEmployeesPage]
})
export class InactiveEmployeesPageModule {}
