import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReleaseFormPageRoutingModule } from './employee-release-form-routing.module';

import { EmployeeReleaseFormPage } from './employee-release-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReleaseFormPageRoutingModule
  ],
  declarations: [EmployeeReleaseFormPage]
})
export class EmployeeReleaseFormPageModule {}
