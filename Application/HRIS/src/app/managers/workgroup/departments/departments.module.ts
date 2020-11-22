import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentsPageRoutingModule } from './departments-routing.module';

import { DepartmentsPage } from './departments.page';

import { HeaderComponent} from '../../../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentsPageRoutingModule
  ],
  declarations: [DepartmentsPage, HeaderComponent]
})
export class DepartmentsPageModule {}
