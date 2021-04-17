import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { SalariesService, user } from '../salaries.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss'],
})
export class PaymentEditComponent implements OnInit {

  constructor(private modal: ModalController, private navprams: NavParams, private salary: SalariesService, private toastCtrl: ToastController) { }

  profile : user = {
    Fname: '',
    Mname: '',
    Lname: '',
    userId: '',
    Eemail: '',
    rating: '',
    employeeRating: '',
    sdate: '',
    department: '',
    role: '',
    bank: '',
    accountNo : '',
    hoursw: '',
    salary: '',
    bonus: '',
    paymentDate: '',
    status: '',
    approvedDate: '',
    picture: ''
  } 

  userid = this.navprams.get('userId');

  ngOnInit() {
    this.getdetails();
  }

  getdetails()
  {
    console.log(this.userid);
    this.salary.getApprovedUser(this.userid).subscribe(profiles => {
    this.profile = profiles;   
    });
  }

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'The employees salary details are successfully updated',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem updating employees salary details',
      duration: 2000
    });
    toast.present();  
  } 

  save()
  {
    let bonus = this.profile.bonus;
    let initialSalary = this.profile.salary;
    var basecal = bonus/100;
    var secondarycal = initialSalary*basecal;
    var finalSalary = +secondarycal + +initialSalary;
    this.profile.salary = finalSalary; 
    this.salary.updateApprovedUser(this.profile);
    this.closemodal();
    this.succesToast();
  }

  closemodal()
  {
    this.modal.dismiss();
  }


}
