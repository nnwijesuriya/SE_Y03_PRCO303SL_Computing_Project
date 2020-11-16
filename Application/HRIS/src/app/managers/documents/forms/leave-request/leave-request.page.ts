import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { leaveForm, LeaveService } from './leave.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.page.html',
  styleUrls: ['./leave-request.page.scss'],
})
export class LeaveRequestPage implements OnInit {

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
  sdate: ''
}

pipe = new DatePipe('en-US'); 

  constructor(private auth: AngularFireAuth, private nav: NavController, private lform : LeaveService) { }

  ngOnInit() {

    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;


    this.auth.authState.subscribe(data=> {
      if(data.uid && data.email)
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
      this.lform.addform(this.form).then(f =>{
        this.nav.navigateRoot('documents');
      })
    }

    cancel(){
      this.form.userId= '',
      this.form.Fname= '',
      this.form.Lname= '',
      this.form.Eemail= '',
      this.form.phone= '',
      this.form.position= '',
      this.form.Ldate= '',
      this.form.Edate= '',
      this.form.Ltype= '',
      this.form.comments= ''
      this.nav.navigateRoot('documents');
    }
}
