import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  public user : Observable<users[]>;
  
  form : users = {
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    DOB: '',
    Pemail: '',
    Eemail: '',
    password: '',
    Hphone: '',
    phone : '',
    addressH: '',
    department : '',
    Rdepartment: '',
    role: '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: '',
    review: ''
  }

  uid;

  constructor(private modal: ModalController, private users: UserService, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      let id;
      id = data.uid;
      this.uid= data.uid;
      console.log(this.uid);
      this.profileinfo(id);
})
}

  profileinfo(id)
  {
    console.log(id);
    this.users.getform(id).subscribe(profiles => {
    this.form = profiles;   
    });
  }

  closemodal()
  {
    this.modal.dismiss().then( val => {
      // reloads the page to get new information
    window.location.reload();
    })
  }

  update()
  {
    let id = this.uid;
    console.log(this.form);
    this.users.updateuser(this.form);
    this.closemodal();
  }

}
