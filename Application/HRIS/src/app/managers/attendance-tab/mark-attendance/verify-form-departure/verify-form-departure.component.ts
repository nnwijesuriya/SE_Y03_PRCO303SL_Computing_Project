import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { mark, MarkingService } from '../verify-form/marking.service';

@Component({
  selector: 'app-verify-form-departure',
  templateUrl: './verify-form-departure.component.html',
  styleUrls: ['./verify-form-departure.component.scss'],
})
export class VerifyFormDepartureComponent implements OnInit {

  public user : Observable<users[]>;
  public attendance : Observable<mark[]>;

  attend: mark = {
    userid: '',
    email: '', 
    name: '',
    department: '',
    date: '',
    ddate: '',
    hoursw: '',
    minw: '',
    worktype: '',
    status: ''
  }

  attendeees: mark = {
    userid: '',
    email: '', 
    name: '',
    department: '',
    date: '',
    ddate: '',
    hoursw: '',
    minw: '',
    worktype: '',
    status: ''
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
    picture: '',
    review: ''
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
      this.getmarkdetails();
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
      message: 'Your Departure time was not recorded',
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
      message: 'Your Departure Time was successfully recorded',
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

  getmarkdetails()
  {
    this.marking.getusersdepartureindividually(this.uid).subscribe(profiles => {
      this.attend = profiles;   
      });
  }

  // to get the hours each employee is working
  gethoursDiff(startDate, endDate) {
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / (60 * 60 * 1000));
    return hours;
   }

   // to get the mins each employee is working
   getminDiff(startDate, endDate) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    return minutes;
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
      this.attendeees.status = this.attend.status;
      this.attendeees.date = this.attend.date;
      let adate = this.attendeees.date;
      let dedate= this.date;
      let diffH = this.gethoursDiff(new Date(adate), new Date(dedate));
      let diffM = this.getminDiff(new Date(adate), new Date(dedate));
      this.attendeees.hoursw = diffH; 
      this.attendeees.minw = diffM;
      //have to calculate number of hours worked 
      if(diffH<=5)
      {
        this.attendeees.worktype = "Half day"
      }else if(diffH>=5 && diffH <=10)
      {
        this.attendeees.worktype = "Full day"
      }else
      {
        this.attendeees.worktype = "Over time day"
      }
      this.attendeees.ddate = this.date;
      this.marking.markattendanced(this.attendeees);
      //saves the record permanetly
      this.marking.addrecord(this.attendeees);
      this.modal.dismiss();
      this.successToast();
    } else
     {
      this.passwordfailToast();
     }
  }

}
