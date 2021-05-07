import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestLeavesPageRoutingModule } from './request-leaves-routing.module';

import { RequestLeavesPage } from './request-leaves.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestLeavesPageRoutingModule
  ],
  declarations: [RequestLeavesPage, HeaderComponent]
})
export class RequestLeavesPageModule {}
