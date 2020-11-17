import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { recruitForm, RecruitService } from './recruit.service';

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.page.html',
  styleUrls: ['./recruitment-form.page.scss'],
})
export class RecruitmentFormPage implements OnInit {


  form : recruitForm={
    userId: '',
    formtype: 'Recruitment Form',
    Fname: '',
    Mname: '',
    Lname: '',
    dbirth: '',
    email: '',
    phone: '',
    Lphone: '',
    address: '',
    sdate: ''
  }

  pipe = new DatePipe('en-US'); 

  constructor(private recruitser: RecruitService, private auth: AngularFireAuth, private nav: NavController) { }

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
    this.recruitser.addform(this.form).then(f =>{
      this.nav.navigateRoot('documents');
  })
}

  cancel()
  {
    this.form.userId = '',
    this.form.formtype = '',
    this.form.Fname = '',
    this.form.Mname = '',
    this.form.Lname = '',
    this.form.dbirth = '',
    this.form.email = '',
    this.form.phone = '',
    this.form.Lphone = '',
    this.form.address = '',
    this.form.sdate =  ''
    this.nav.navigateRoot('documents')
  }

}
