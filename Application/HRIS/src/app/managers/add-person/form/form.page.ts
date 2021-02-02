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
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    DOB: '',
    Pemail: '',
    Eemail: '',
    password: '',
    Hphone: '',
    phone : '',
    addressH: '',
    department : '',
    Rdepartment: '',
    role: '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: ''
  }
  password = "";

  showpassword= false;
  passwordtoggleicon = 'eye';

  pipe = new DatePipe('en-US'); 


  constructor(private router : Router, private toastCtrl: ToastController, private user: UserService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;
    this.form.picture = "https://firebasestorage.googleapis.com/v0/b/hris-project-9b070.appspot.com/o/images0.5205803502471043%5Bobject%20File%5D?alt=media&token=1b793545-17a2-46b8-a195-5b71ac3c0235"
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
    this.form.password = this.password;
    this.user.addnotice(this.form);
    this.cancel(); 
    this.succesToast();
  }

  cancel()
  {
    this.password = "";
    this.form.userid = "";
    this.form.Fname = "";
    this.form.Mname = "";
    this.form.Lname = "";
    this.form.DOB = "";
    this.form.Pemail = "";
    this.form.Eemail = "";
    this.form.password = "";
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

  togglepassword()
  {
    this.showpassword = !this.showpassword;

    if(this.passwordtoggleicon == 'eye')
    {
      this.passwordtoggleicon = 'eye-off';
    }else
    {
      this.passwordtoggleicon = 'eye';
    }
  } 

}
