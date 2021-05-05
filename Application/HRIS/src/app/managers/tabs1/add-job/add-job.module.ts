import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddJobPageRoutingModule } from './add-job-routing.module';

import { AddJobPage } from './add-job.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddJobPageRoutingModule
  ],
  declarations: [AddJobPage, HeaderComponent, FormComponent]
})
export class AddJobPageModule {}
