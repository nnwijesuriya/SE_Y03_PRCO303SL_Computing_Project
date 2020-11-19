import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPersonPageRoutingModule } from './add-person-routing.module';

import { AddPersonPage } from './add-person.page';

import {HeaderComponent} from '../../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPersonPageRoutingModule
  ],
  declarations: [AddPersonPage, HeaderComponent]
})
export class AddPersonPageModule {}
