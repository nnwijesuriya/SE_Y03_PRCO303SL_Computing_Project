import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { mark, MarkingService } from './marking.service';

@Component({
  selector: 'app-verify-form',
  templateUrl: './verify-form.component.html',
  styleUrls: ['./verify-form.component.scss'],
})
export class VerifyFormComponent implements OnInit {

  public user : Observable<users[]>;
  public attendance : Observable<mark[]>;

  attendeees: mark = {
    userid: '',
    email: '',
    name: '',
    department: '',
    date: '',
  }

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

  email;
  uid;
  date;
  dbpassword;
  password;

  pipe = new DatePipe('en-US'); 
  constructor(private modal: ModalController, private toast: ToastController, private nav: NavParams, private marking: MarkingService, private auth: AngularFireAuth, private users: UserService) { }

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      this.email = data.email;
      console.log(this.email);

      this.uid = data.uid; 
      console.log(this.uid);
      this.getuserdetils();
  })

  const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.date = myFormattedDate;
}

  closemodal()
  {
   this.modal.dismiss();
   this.failToast();
  }

  async failToast() {
    const toast =  await this.toast.create({
      message: 'Your Attendance was not recorded',
      duration: 2000
    });
    toast.present();  
  } 

  async passwordfailToast() {
    const toast =  await this.toast.create({
      message: 'The Password you entered was incorrect',
      duration: 2000
    });
    toast.present();  
  } 

  async successToast() {
    const toast =  await this.toast.create({
      message: 'Your Attendance was successfully recorded',
      duration: 2000
    });
    toast.present();  
  } 
  
  getuserdetils()
  {
    this.users.getform(this.uid).subscribe(profiles => {
    this.profile = profiles;   
    });
  }

  markattendance()
  {
    console.log(this.profile.password)
    this.dbpassword = this.users.get('123456$#@$^@1ERF', this.profile.password);
    console.log(this.dbpassword);
    if(this.dbpassword== this.password)
    {
      this.attendeees.userid = this.profile.userid;
      this.attendeees.email = this.profile.Eemail;
      this.attendeees.name = this.profile.Fname;
      this.attendeees.department = this.profile.department;
      this.attendeees.date = this.date;
      this.marking.markattendance(this.attendeees);
      this.modal.dismiss();
      this.successToast();
    } else
     {
      this.passwordfailToast();
     }
  }

}
