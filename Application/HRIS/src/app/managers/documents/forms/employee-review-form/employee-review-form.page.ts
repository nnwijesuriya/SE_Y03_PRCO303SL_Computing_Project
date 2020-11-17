import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { employeeReviewService, reviewForm } from './employeeReview.service';

@Component({
  selector: 'app-employee-review-form',
  templateUrl: './employee-review-form.page.html',
  styleUrls: ['./employee-review-form.page.scss'],
})
export class EmployeeReviewFormPage implements OnInit {

  form : reviewForm={
    userId: '',
    formtype: 'Employee Review Form',
    EFname: '',
    ELname: '',
    Eemail: '',
    MFname: '',
    MLname: '',
    department: '',
     position: '',
    job: '',
    quality: '',
    attendanceP: '',
    productivity: '',
    communicationL: '',
    dependability: '',
    Orating: '',
    comments: '',
    sdate: ''
  }

  pipe = new DatePipe('en-US'); 

  constructor(private auth: AngularFireAuth, private nav: NavController, private revi: employeeReviewService) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;

    this.auth.authState.subscribe(data=> {
      if(data.uid)
        {
          this.form.userId = data.uid;
          console.log( this.form.userId)
        } else
        {
           this.nav.navigateRoot('login');
        }
      });
  }

  addform()
  {
   
    this.revi.addform(this.form).then(f =>{
      this.nav.navigateRoot('documents');
  })
}
  cancel()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.EFname = '';
    this.form.ELname = '';
    this.form.Eemail = '';
    this.form.MFname = '';
    this.form.MLname = '';
    this.form.department = '';
    this.form.position = '';
    this.form.job = '';
    this.form.quality = '';
    this.form.attendanceP = '';
    this.form.productivity = '';
    this.form.communicationL = '';
    this.form.dependability = '';
    this.form.Orating = '';
    this.form.comments = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
