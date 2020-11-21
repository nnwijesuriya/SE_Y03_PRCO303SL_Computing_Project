import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatgroupPageRoutingModule } from './chatgroup-routing.module';

import {HeaderComponent} from '../../header/header.component'

import { ChatgroupPage } from './chatgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatgroupPageRoutingModule
  ],
  declarations: [ChatgroupPage, HeaderComponent]
})
export class ChatgroupPageModule {}
