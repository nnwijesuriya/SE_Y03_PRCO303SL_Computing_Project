import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StabsPageRoutingModule } from './stabs-routing.module';

import { StabsPage } from './stabs.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StabsPageRoutingModule
  ],
  declarations: [StabsPage, HeaderComponent]
})
export class StabsPageModule {}
