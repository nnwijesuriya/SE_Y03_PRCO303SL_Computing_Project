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
    Mname: '',
    Lname: '',
    DOB: '',
    Pemail: '',
    Eemail: '',
    Hphone: '',
    phone : '',
    addressH: '',
    department : '',
    Rdepartment: '',
    role: '',
    sdate: '',
    Econtact: '',
    Otherinformation: ''
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
      message: 'The new employee has been added to the system',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem adding the new employee',
      duration: 2000
    });
    toast.present();  
  } 

  submit()
  {
   this.afAuth.createUserWithEmailAndPassword(this.form.Eemail, this.password).then( res => {
   this.user.addnotice(this.form);
   this.cancel();
   this.succesToast();
   }, err =>{
     this.failToast();
   })
  }

  cancel()
  {
    this.password = "";
    this.form.Fname = "";
    this.form.Mname = "";
    this.form.Lname = "";
    this.form.DOB = "";
    this.form.Pemail = "";
    this.form.Eemail = "";
    this.form.Hphone = "";
    this.form.phone = "";
    this.form.addressH = "";
    this.form.department = "";
    this.form.Rdepartment = "";
    this.form.role = "";
    this.form.Econtact = "";
    this.form.Otherinformation = "";
    this.router.navigateByUrl('add-person')
  }

}
