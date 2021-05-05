import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedPageRoutingModule } from './approved-routing.module';

import { ApprovedPage } from './approved.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ApprovedPage, HeaderComponent]
})
export class ApprovedPageModule {}
