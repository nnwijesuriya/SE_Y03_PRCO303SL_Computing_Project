import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReleasePageRoutingModule } from './employee-release-routing.module';

import { EmployeeReleasePage } from './employee-release.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReleasePageRoutingModule
  ],
  declarations: [EmployeeReleasePage]
})
export class EmployeeReleasePageModule {}
