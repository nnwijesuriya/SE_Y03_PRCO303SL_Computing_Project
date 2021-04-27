import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphsPageRoutingModule } from './graphs-routing.module';

import { GraphsPage } from './graphs.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphsPageRoutingModule
  ],
  declarations: [GraphsPage, HeaderComponent]
})
export class GraphsPageModule {}
