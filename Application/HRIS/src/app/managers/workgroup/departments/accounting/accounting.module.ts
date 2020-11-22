import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountingPageRoutingModule } from './accounting-routing.module';

import { AccountingPage } from './accounting.page';

import {HeaderComponent} from '../../../../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountingPageRoutingModule
  ],
  declarations: [AccountingPage, HeaderComponent]
})
export class AccountingPageModule {}
