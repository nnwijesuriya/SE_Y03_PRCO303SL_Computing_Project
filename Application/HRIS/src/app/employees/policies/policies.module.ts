import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliciesPageRoutingModule } from './policies-routing.module';

import { PoliciesPage } from './policies.page';
import { HeaderEmployeesComponent } from 'src/app/header-employees/header-employees.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliciesPageRoutingModule
  ],
  declarations: [PoliciesPage, HeaderEmployeesComponent]
})
export class PoliciesPageModule {}
