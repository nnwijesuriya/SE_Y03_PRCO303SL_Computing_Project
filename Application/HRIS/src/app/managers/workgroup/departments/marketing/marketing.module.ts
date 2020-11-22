import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingPageRoutingModule } from './marketing-routing.module';

import { MarketingPage } from './marketing.page';

import { HeaderComponent } from '../../../../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingPageRoutingModule
  ],
  declarations: [MarketingPage, HeaderComponent]
})
export class MarketingPageModule {}
