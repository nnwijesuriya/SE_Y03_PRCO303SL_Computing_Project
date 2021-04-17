import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { AvailabilityService } from 'src/app/managers/dashboard/availability.service';
import { SalariesService } from 'src/app/managers/salaries/salaries.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

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
    rCounter: '',
    holidaysPerYear: '',
    employeeReview: '',
    employeeReviewCounter: ''
  } 

  pipe = new DatePipe('en-US'); 

  constructor(private user: UserService, private modal: ModalController, private toast: ToastController, 
    private alertCtrl: AlertController, private auth: AngularFireAuth, private activatedroute: ActivatedRoute,
     private availability: AvailabilityService, private salary: SalariesService) { }

  public employees = new Array();
  
  department;
  selectedDate;
  formatedDate;
  closedate = false;
  term;
  uid;
  paramsValue;
  reviewvalue = 0;

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      this.uid = data.uid;
   })
  let department = this.activatedroute.snapshot.paramMap.get('department');
  this.paramsValue = department;
  this.getallemployees(department);
  }

  getallemployees(value)
  {
    this.user.getDepartmentCollection(value).subscribe((val)=>{
      let length = val.length;
      let counter = 0
      for(counter; counter <= length ; counter++)
      {
        if(val[counter].userid != this.uid)
        {
          this.employees.push(val[counter]);
        }
      }
    });
  }

  async succesToast() {
    const toast = await this.toast.create({
      message: 'Your review of the user has been successfully counted',
      duration: 3000  
    });
    toast.present();
  } 

  async FailToast() {
    const toast = await this.toast.create({
      message: 'There was a error entering your review',
      duration: 3000  
    });
    toast.present();
  } 

rate(data, userid) {
  this.user.getform(userid).subscribe(profile => {  
  console.log(profile);
  //this is to add the values
  var counter = +profile.employeeReviewCounter + 1;
  console.log(counter);
  //calculation to get the review
  var calvalue = data.newValue;
  var calreview = profile.employeeReview;
  var caltotal = +calvalue + +calreview
  var final = caltotal/counter;
  console.log(final);
  profile.employeeReviewCounter = counter;
  profile.employeeReview = final;
  this.user.updateEmployeeReview(profile);
  //Updates the reviews to sallayr collection
  this.salary.updateEmployeeReview(profile.employeeReview, profile.userid).catch((error :any)=>{
    this.FailToast();
  });
  this.succesToast();
});
}
}
