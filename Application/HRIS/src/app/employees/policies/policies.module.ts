import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliciesPageRoutingModule } from './policies-routing.module';

import { PoliciesPage } from './policies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliciesPageRoutingModule
  ],
  declarations: [PoliciesPage]
})
export class PoliciesPageModule {}
