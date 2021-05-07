import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruitmentFormPageRoutingModule } from './recruitment-form-routing.module';

import { RecruitmentFormPage } from './recruitment-form.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruitmentFormPageRoutingModule
  ],
  declarations: [RecruitmentFormPage, HeaderComponent]
})
export class RecruitmentFormPageModule {}
