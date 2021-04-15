import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { ptoForm, PTOService } from 'src/app/managers/documents/forms/ptorequest-form/pto.service';

@Component({
  selector: 'app-ptorequest-form',
  templateUrl: './ptorequest-form.component.html',
  styleUrls: ['./ptorequest-form.component.scss'],
})
export class PtorequestFormComponent implements OnInit {

  form : ptoForm ={
    userId: '',
    formtype: 'PTO Request',
     Fname: '',
    Lname: '',
    email: '',
    phone: '',
    Sname: '',
    department: '',
    PTstart: '',
    PTend: '',
    comments: '',
    status: 'Pending',
    sdate: ''
   }
 
   pipe = new DatePipe('en-US'); 
 
   constructor(private ptoservice: PTOService, private modal: ModalController, private auth: AngularFireAuth, private nav: NavController) { }
 
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
            this.nav.navigateRoot('managers/login');
         }
       });
   }
 
   addform()
   {
     this.ptoservice.addform(this.form).then(f =>{
       this.nav.navigateRoot('documents');
   })
 }
 
   cancel()
   {
     this.form.userId = '';
     this.form.formtype = '';
     this.form.Fname = '';
     this.form.Lname = '';
     this.form.email = '';
     this.form.phone = '';
     this.form.Sname = '';
     this.form.department = '';
     this.form.PTstart = '';
     this.form.PTend = '';
     this.form.comments = '';
     this.form.status = '';
     this.form.sdate = '';
     this.modal.dismiss();
   }
}
