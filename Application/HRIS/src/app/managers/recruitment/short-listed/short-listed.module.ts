import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortListedPageRoutingModule } from './short-listed-routing.module';

import { ShortListedPage } from './short-listed.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortListedPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ShortListedPage, HeaderComponent]
})
export class ShortListedPageModule {}
