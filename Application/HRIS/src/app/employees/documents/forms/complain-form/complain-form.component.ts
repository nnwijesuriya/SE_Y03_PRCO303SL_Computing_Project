import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { complainForm, ComplainService } from 'src/app/managers/documents/forms/complain-form/complain.service';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.scss'],
})
export class ComplainFormComponent implements OnInit {

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
  constructor(private complService: ComplainService, private auth: AngularFireAuth, private nav: NavController, private modal: ModalController) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;

    this.auth.authState.subscribe(data=> {
      this.form.Eemail = data.email;
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
    this.complService.addformEmployee(this.form).then(f =>{
      this.cancel();
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
    this.modal.dismiss();
  }
}
