import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruitingPageRoutingModule } from './recruiting-routing.module';

import { RecruitingPage } from './recruiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruitingPageRoutingModule
  ],
  declarations: [RecruitingPage]
})
export class RecruitingPageModule {}
