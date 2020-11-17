import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruitmentPageRoutingModule } from './recruitment-routing.module';

import { RecruitmentPage } from './recruitment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruitmentPageRoutingModule
  ],
  declarations: [RecruitmentPage]
})
export class RecruitmentPageModule {}
