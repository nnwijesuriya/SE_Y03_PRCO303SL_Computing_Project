import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { notice, noticesService } from 'src/app/managers/tabs1/notices/notices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private users: UserService,  private auth: AngularFireAuth, private noticeservice: noticesService, private navctrl: NavController) { }

  public notices:  Observable<notice[]>;
  
  profile : users = {
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    Pemail: '',
    Eemail: '',
    password: '',
    phone : '',
    Hphone : '',
    DOB: '' ,
    addressH: '',
    department : '',
    Rdepartment: '',
    role : '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: '',
    review: '',
    rCounter: ''
  };
  typen = "";
  uid;

  ngOnInit() {
    console.log("happy new year");
    console.log("it works!!!!");
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.getuserDetails();
      this.getnotice(this.typen)
    })
  }

  getuserDetails()
  {
    let id = this.uid;
    this.users.getform(id).subscribe(profiles => {
      this.profile = profiles;   
    });
  }

  getnotice(types)
  {
    this.notices = this.noticeservice.getnotice(types);
    this.navctrl.navigateRoot('employees/dashboard');
  }
}
