import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { complainForm, ComplainService } from './complain.service';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.page.html',
  styleUrls: ['./complain-form.page.scss'],
})
export class ComplainFormPage implements OnInit {

  form : complainForm={
    userId: '',
    formtype: 'Complain Form',
    EFname: '',
    ELname: '',
    Eemail: '',
    Edepartment: '',
    Eposition: '',
    CFname: '',
    CLname: '',
    Cdepartment: '',
    Cposition: '',
    Rcomplain: '',
    Idate: '',
    location: '',
    witness: '',
    comments: '',
    status: 'Pending',
    sdate: '',
  }

  pipe = new DatePipe('en-US'); 
  constructor(private complService: ComplainService, private auth: AngularFireAuth, private nav: NavController,) { }

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
    this.complService.addform(this.form).then(f =>{
      this.nav.navigateRoot('managers/documents');
    })
  }

  cancel(){
    this.form.userId = '';
    this.form.formtype = '';
    this.form.EFname = '';
    this.form.ELname = '';
    this.form.Eemail = '';
    this.form.Edepartment = '';
    this.form.Eposition = '';
    this.form.CFname = '';
    this.form.CLname = '';
    this.form.Cdepartment = '';
    this.form.Cposition = '';
    this.form.Rcomplain = '';
    this.form.Idate = '';
    this.form.location = '';
    this.form.witness = '';
    this.form.comments= '';
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('managers/documents');
  }

}
