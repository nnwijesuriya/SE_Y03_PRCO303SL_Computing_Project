import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { employeereleaseForm, EmployeeReleaseService } from './employeeRelease.service';

@Component({
  selector: 'app-employee-release-form',
  templateUrl: './employee-release-form.page.html',
  styleUrls: ['./employee-release-form.page.scss'],
})
export class EmployeeReleaseFormPage implements OnInit {


  form : employeereleaseForm = {
    userId: '',
    formtype: 'Release Form',
    EFname: '',
    ELname: '',
    Eemail: '',
    department: '',
    position: '',
    MFname: '',
    MLname: '',
    Memail: '',
    LWdate: '',
    LPdate: '',
    release: '',
    comments: '',
    sdate: ''
  }

  pipe = new DatePipe('en-US'); 

  constructor(private release: EmployeeReleaseService, private auth: AngularFireAuth, private nav: NavController) { }

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
    this.release.addform(this.form).then(f =>{
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
    this.form.department = '';
    this.form.position = '';
    this.form.MFname = '';
    this.form.MLname = '';
    this.form.Memail = '';
    this.form.LWdate = '';
    this.form.LPdate = '';
    this.form.release = '';
    this.form.comments = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
