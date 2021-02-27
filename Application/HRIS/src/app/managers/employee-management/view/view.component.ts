import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { users, UserService } from '../../add-person/users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

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
    picture: ''
  }

  constructor(private modal: ModalController, private users: UserService,public navprams: NavParams) { }

  userid = this.navprams.get('userId');

  ngOnInit() {
    this.profileinfo()
  }

  profileinfo()
  {
    console.log(this.userid);
    this.users.getform(this.userid).subscribe(profiles => {
    this.form = profiles;   
    });
  }

  update()
  {
    let id = this.userid;
    console.log(this.form);
    this.users.updateuser(this.form);
    this.closemodal();
  }

  
  closemodal()
  {
    this.modal.dismiss();
  }


}
