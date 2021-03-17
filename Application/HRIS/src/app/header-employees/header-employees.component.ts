import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { users, UserService } from '../managers/add-person/users.service';

@Component({
  selector: 'app-header-employees',
  templateUrl: './header-employees.component.html',
  styleUrls: ['./header-employees.component.scss'],
})
export class HeaderEmployeesComponent implements OnInit {

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
    review: '',
    rCounter: ''
  }

  constructor(private auth: AngularFireAuth, private service: LoginService, private users: UserService) { }

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      let id;
      id = data.uid;
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

  signout(){
    this.service.signout();
  }
}
