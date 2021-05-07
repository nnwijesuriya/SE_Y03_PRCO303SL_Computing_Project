import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { leaveForm, LeaveService } from 'src/app/managers/documents/forms/leave-request/leave.service';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.scss'],
})
export class LeaveRequestFormComponent implements OnInit {

  form : leaveForm = {
    userId: '',
    formtype: 'Leave Request',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    position: '',
    Ldate: '',
    Edate: '',
    Ltype: '',
    comments: '',
    status: 'Pending',
    sdate: ''
  }
  
  pipe = new DatePipe('en-US'); 
  
    constructor(private auth: AngularFireAuth, private nav: NavController, private modal: ModalController, private lform : LeaveService) { }
  
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
  
      addform(){
        this.lform.addformEmployee(this.form).then(f =>{
          this.cancel();
        })
      }
  
      cancel(){
        this.form.userId= '';
        this.form.Fname= '';
        this.form.Lname= '';
        this.form.Eemail= '';
        this.form.phone= '';
        this.form.position= '';
        this.form.Ldate= '';
        this.form.Edate= '';
        this.form.Ltype= '';
        this.form.comments= '';
        this.form.status = '';
        this.modal.dismiss();
      }
}
