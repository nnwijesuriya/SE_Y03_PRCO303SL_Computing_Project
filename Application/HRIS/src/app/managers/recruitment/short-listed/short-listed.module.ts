import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortListedPageRoutingModule } from './short-listed-routing.module';

import { ShortListedPage } from './short-listed.page';
import { HeaderComponent } from 'src/app/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortListedPageRoutingModule
  ],
  declarations: [ShortListedPage, HeaderComponent]
})
export class ShortListedPageModule {}
