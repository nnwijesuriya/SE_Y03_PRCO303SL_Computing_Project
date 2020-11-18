import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { disService, diciplinaryForm } from './dis.service';

@Component({
  selector: 'app-disciplinary-form',
  templateUrl: './disciplinary-form.page.html',
  styleUrls: ['./disciplinary-form.page.scss'],
})
export class DisciplinaryFormPage implements OnInit {

  form: diciplinaryForm ={
    userId: '',
    formtype: 'Diciplinary Form',
    Fname: '',
    Lname: '',
    Eemail: '',
    Department: '',
    position: '',
    MFname: '',
    MLname: '',
    Idetails: '',
    infraction: '',
    Idate: '',
    Ainfration: '',
    saction: '',
    comments: '',
    status: 'Pending',
    sdate: ''
  }

  pipe = new DatePipe('en-US'); 

  constructor(private auth: AngularFireAuth, private nav: NavController, private disci: disService) { }

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

  addfom(){
    this.disci.addform(this.form).then(f =>{
      this.nav.navigateRoot('documents');
   })
}
  cancel()
  {
    this.form.userId = '',
    this.form.formtype = '',
    this.form.Fname = '',
    this.form.Lname = '',
    this.form.Eemail = '',
    this.form.Department = '',
    this.form.position = '',
    this.form.MFname = '',
    this.form.MLname = '',
    this.form.Idetails ='',
    this.form.infraction = '',
    this.form.Idate = '',
    this.form.Ainfration = '',
    this.form.saction = '',
    this.form.comments = '',
    this.form.sdate = ''
    this.form.status = '';
    this.nav.navigateRoot('documents')
  }

}
