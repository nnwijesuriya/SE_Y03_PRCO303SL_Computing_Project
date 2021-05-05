import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliedAllPageRoutingModule } from './applied-all-routing.module';

import { AppliedAllPage } from './applied-all.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormComponent } from '../form/form.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { JobsAvailableComponent } from '../jobs-available/jobs-available.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliedAllPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [AppliedAllPage, HeaderComponent,FormComponent, EditFormComponent, JobsAvailableComponent],
  entryComponents: [FormComponent, EditFormComponent]
})
export class AppliedAllPageModule {}
