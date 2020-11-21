import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { users, UserService } from '../users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form : users = {
    Fname: '',
    Lname: '',
    Pemail: '',
    Eemail: '',
    phone : '',
    department : '',
    role: '',
    sdate: ''
  }
  password = "";

  pipe = new DatePipe('en-US'); 


  constructor(private router : Router, private toastCtrl: ToastController, private user: UserService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;
  }

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your notice has been added',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem adding your notice',
      duration: 2000
    });
    toast.present();  
  } 

  submit()
  {
   this.afAuth.createUserWithEmailAndPassword(this.form.Eemail, this.password).then( res => {
   this.user.addnotice(this.form);
   this.router.navigateByUrl('add-person')
   this.succesToast();
   }, err =>{
     this.failToast();
   })
  }

  cancel()
  {
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.Pemail = '';
    this.form.Eemail = '';
    this.form.phone  =  '';
    this.form.department = '';
    this.form.sdate = '';
    this.form.role = '';
    this.router.navigateByUrl('add-person')
  }

}
