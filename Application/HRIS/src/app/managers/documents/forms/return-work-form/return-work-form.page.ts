import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { reviewForm } from '../employee-review-form/employeeReview.service';
import { returnWorkForm, returnWorkService } from './returnWork.service';

@Component({
  selector: 'app-return-work-form',
  templateUrl: './return-work-form.page.html',
  styleUrls: ['./return-work-form.page.scss'],
})
export class ReturnWorkFormPage implements OnInit {

  form : returnWorkForm={
    userId: '',
    formtype: 'Return To Work Form',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    department: '',
    Iabsence: '',
    Esituation: '',
    position: '',
    sdate: '',
  }

  pipe = new DatePipe('en-US'); 

  constructor(private rworkService: returnWorkService, private auth: AngularFireAuth, private nav: NavController) { }

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
    this.rworkService.addform(this.form).then(f =>{
      this.nav.navigateRoot('documents');
    })
  }

  cancel()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.Eemail = '';
    this.form.phone = '';
    this.form.department = '';
    this.form.Iabsence = '';
    this.form.Esituation =  '';
    this.form.position = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
