import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SalariesService, user } from '../salaries.service';

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.scss'],
})
export class PaymentUpdateComponent implements OnInit {

  pipe = new DatePipe('en-US');  
  constructor(private modal: ModalController, public navprams: NavParams, private salary: SalariesService) { }

  userid = this.navprams.get('userId');

  profile : user = {
    Fname: '',
    Mname: '',
    Lname: '',
    userId: '',
    Eemail: '',
    rating: '',
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

  ngOnInit() {
    this.getdetails();
  }

  getdetails()
  {
    console.log(this.userid);
    this.salary.getUser(this.userid).subscribe(profiles => {
    this.profile = profiles;   
    });
  }

  approve()
  {
    const now = Date.now();
    this.profile.status = "Approved"
    const myFormattedDate = this.pipe.transform(now, 'mediumDate');
    this.profile.approvedDate= myFormattedDate;
    this.salary.addapproveduser(this.profile);
    let id = this.profile.userId;
    this.salary.removeNotApprovedUser(id);
    this.closemodal();
  }

  closemodal()
  {
    this.modal.dismiss();
  }

}
