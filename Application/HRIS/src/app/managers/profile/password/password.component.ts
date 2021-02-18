import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { users, UserService } from '../../add-person/users.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  public user : Observable<users[]>;

  profile : users = {
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
  password = "";
  oldpassword = "";
  newpassword = "";

  constructor(private modal: ModalController,private login: LoginService, private users: UserService, private auth: AngularFireAuth, private httpclient: HttpClient) { }

  uid;
  email;

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      let id;
      id = data.uid;
      this.email = data.email;
      this.uid= data.uid;
      this.profileinfo(id);
})
}

profileinfo(id)
  {
    console.log(id);
    this.users.getform(id).subscribe(profiles => {
    this.profile = profiles;   
    });
  }
  
Updatepassword()
{
 this.oldpassword = this.users.get('123456$#@$^@1ERF', this.profile.password);
 if(this.oldpassword == this.password)
 {
  const password = {uid: this.profile.userid ,email: this.profile.Eemail, password : this.newpassword}
  console.log(password);
  this.httpclient.post<{message: string}>('http://localhost:3000/profile', password).subscribe((responsestatus) => {
     console.log(responsestatus);
     let newpass = this.users.set('123456$#@$^@1ERF', this.newpassword);
     this.profile.password = newpass;
     this.users.updateuser(this.profile);
     this.modal.dismiss();
     window.alert("Password Changed, Please login to the application");
    this.login.signout();
    });
 } else 
 {
   console.log(this.oldpassword);
   console.log(this.password);
   this.modal.dismiss();
   window.alert('The password you entered was incorrect');
 }
}

closemodal()
{
  this.modal.dismiss();
}
}
