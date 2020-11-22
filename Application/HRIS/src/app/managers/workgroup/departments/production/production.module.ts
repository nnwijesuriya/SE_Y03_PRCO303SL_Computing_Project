import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionPageRoutingModule } from './production-routing.module';

import { ProductionPage } from './production.page';

import {HeaderComponent} from '../../../../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionPageRoutingModule
  ],
  declarations: [ProductionPage, HeaderComponent]
})
export class ProductionPageModule {}
