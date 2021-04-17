import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ToastController } from '@ionic/angular';
import { SalariesService, user } from 'src/app/managers/salaries/salaries.service';

@Component({
  selector: 'app-my-salary-details',
  templateUrl: './my-salary-details.component.html',
  styleUrls: ['./my-salary-details.component.scss'],
})
export class MySalaryDetailsComponent implements OnInit {

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
  uid;

  constructor(private modal: ModalController, private auth: AngularFireAuth, private salary: SalariesService, private toast: ToastController) { }

  ngOnInit() {
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.getdetails(this.uid);
    })
  }

  getdetails(id)
  {
    this.salary.getApprovedUser(id).subscribe(profiles => {
    this.profile = profiles;   
    console.log(this.profile)
    },(error) => {
     this.FailToast();
    });
  }

  async FailToast() {
    const toast = await this.toast.create({
      message: 'The Manager needs to approve payments for you to see the Details',
      duration: 3000  
    });
    toast.present();
    this.close();
  } 

  close()
  {
    this.modal.dismiss();
  }

}
