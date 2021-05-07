import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecruitmentPageRoutingModule } from './recruitment-routing.module';

import { RecruitmentPage } from './recruitment.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecruitmentPageRoutingModule
  ],
  declarations: [RecruitmentPage, HeaderComponent]
})
export class RecruitmentPageModule {}
