import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { mark, MarkingService } from 'src/app/managers/attendance-tab/mark-attendance/verify-form/marking.service';

@Component({
  selector: 'app-verify-form-arrival',
  templateUrl: './verify-form-arrival.component.html',
  styleUrls: ['./verify-form-arrival.component.scss'],
})
export class VerifyFormArrivalComponent implements OnInit {

  public user : Observable<users[]>;
  public attendance : Observable<mark[]>;
 
  attendeees: mark = {
    userid: '',
    email: '', 
    name: '',
    department: '',
    date: '',
    ddate: '',
    hoursw: '',
    totalhours: '',
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
    review: '',
    rCounter: '',
    holidaysPerYear: '',
    employeeReview: '',
    employeeReviewCounter: ''
  }

  email;
  uid;
  date;
  dbpassword;
  password;
  checkdate

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

    const checkdate= this.pipe.transform(now, 'shortDate');
    // The time below is the start time of the organization
    this.checkdate = checkdate + ", 09:00 AM";
    console.log(this.checkdate);
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
      this.attendeees.ddate = "";
      this.attendeees.hoursw = "";
      this.attendeees.minw ="";
      this.attendeees.worktype = "";
      this.attendeees.date = this.date;
      let adate = new Date(this.attendeees.date);
      let bdate = new Date(this.checkdate);
      console.log(bdate);
      console.log(adate);
      
      if(adate > bdate)
      {
        let diffH = this.gethoursDiff(new Date(bdate), new Date(adate));
        let diffM = this.getminDiff(new Date(bdate), new Date(adate));
        this.attendeees.status = "Late by " + diffH + " Hrs " + diffM + " Min";
    
      }else 
      {
        let diffH = this.gethoursDiff(new Date(adate), new Date(bdate));
        let diffM = this.getminDiff(new Date(adate), new Date(bdate));
        this.attendeees.status = "Early by " + diffH + " Hrs " + diffM + " Min";
      } 
      
      this.marking.markattendance(this.attendeees);
      this.modal.dismiss();
      this.successToast();
    } else
     {
      this.passwordfailToast();
     }
  }
}
