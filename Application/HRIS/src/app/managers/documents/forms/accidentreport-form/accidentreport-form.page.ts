import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { accidentForm, AccidentService } from './accident.service';

@Component({
  selector: 'app-accidentreport-form',
  templateUrl: './accidentreport-form.page.html',
  styleUrls: ['./accidentreport-form.page.scss'],
})
export class AccidentreportFormPage implements OnInit {

 form : accidentForm = {
  userId: '',
  formtype: 'Accident Report',
  EFname: '',
  ELname: '',
  Eemail: '',
  MFname: '',
  MLname: '',
  department: '',
  Idate: '',
  Wemail: '',
  Eexplain: '',
  location: '',
  Idetails: '',
  status: 'Pending',
  sdate: ''
 }

 pipe = new DatePipe('en-US'); 

  constructor(private auth: AngularFireAuth, private nav: NavController, private accidentservice: AccidentService) { }

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
    this.accidentservice.addform(this.form).then(f =>{
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
    this.form.Idate = '';
    this.form.Wemail = '';
    this.form.Eexplain = '';
    this.form.location = '';
    this.form.Idetails = '';
    this.form.status = '';
    this.form.sdate ='';
    this.nav.navigateRoot('documents')
  }

}
