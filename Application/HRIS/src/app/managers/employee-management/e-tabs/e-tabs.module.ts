import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ETabsPageRoutingModule } from './e-tabs-routing.module';

import { ETabsPage } from './e-tabs.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ETabsPageRoutingModule
  ],
  declarations: [ETabsPage, HeaderComponent]
})
export class ETabsPageModule {}
