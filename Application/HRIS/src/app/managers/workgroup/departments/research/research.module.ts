import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResearchPageRoutingModule } from './research-routing.module';

import { ResearchPage } from './research.page';

import {HeaderComponent} from '../../../../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResearchPageRoutingModule
  ],
  declarations: [ResearchPage, HeaderComponent]
})
export class ResearchPageModule {}
