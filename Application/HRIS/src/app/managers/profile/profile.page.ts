import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { users, UserService } from '../add-person/users.service';
import {EditProfileComponent} from '../profile/edit-profile/edit-profile.component';
import {PasswordComponent} from '../profile/password/password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 profile : users = {
  userid: '',
  Fname: '',
  Mname: '',
  Lname: '',
  Pemail: '',
  Eemail: '',
  phone : '',
  Hphone : '',
  DOB: '' ,
  addressH: '',
  department : '',
  Rdepartment: '',
  role : '',
  sdate: '',
  Econtact: '',
  Otherinformation: ''
 } 

  constructor(private user: UserService, private auth: AngularFireAuth, private modal: ModalController) { }

  uid;

  ngOnInit( ) {
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.profileinfo();
    })
  }

  profileinfo()
  {
    let id = this.uid;
    this.user.getform(id).subscribe(profiles => {
    this.profile = profiles;   
    });
  }

  async editprofilemodal()
  {
    const modal = await this.modal.create({
      component: EditProfileComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async passwordmodal()
  {
    const Emodal = await this.modal.create({
      component: PasswordComponent
    });
   await Emodal.present();
  }
  
}
