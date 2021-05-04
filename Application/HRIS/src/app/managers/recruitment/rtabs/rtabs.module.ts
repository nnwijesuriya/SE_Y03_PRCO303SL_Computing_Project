import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtabsPageRoutingModule } from './rtabs-routing.module';

import { RtabsPage } from './rtabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RtabsPageRoutingModule
  ],
  declarations: [RtabsPage]
})
export class RtabsPageModule {}
