import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {HeaderComponent} from '../../header/header.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, HeaderComponent, EditProfileComponent, PasswordComponent],
  entryComponents: [EditProfileComponent, PasswordComponent]
})
export class ProfilePageModule {}
