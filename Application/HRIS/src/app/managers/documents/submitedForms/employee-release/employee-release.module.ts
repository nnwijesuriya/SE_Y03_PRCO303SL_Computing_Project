import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReleasePageRoutingModule } from './employee-release-routing.module';

import { EmployeeReleasePage } from './employee-release.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReleasePageRoutingModule
  ],
  declarations: [EmployeeReleasePage, HeaderComponent]
})
export class EmployeeReleasePageModule {}
