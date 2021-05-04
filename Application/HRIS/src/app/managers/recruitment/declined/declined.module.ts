import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclinedPageRoutingModule } from './declined-routing.module';

import { DeclinedPage } from './declined.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclinedPageRoutingModule
  ],
  declarations: [DeclinedPage, HeaderComponent]
})
export class DeclinedPageModule {}
