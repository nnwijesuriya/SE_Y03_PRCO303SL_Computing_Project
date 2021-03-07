import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PaymentUpdateComponent } from '../payment-update/payment-update.component';
import { SalariesService, user } from '../salaries.service';

@Component({
  selector: 'app-not-approved',
  templateUrl: './not-approved.page.html',
  styleUrls: ['./not-approved.page.scss'],
})
export class NotApprovedPage implements OnInit {

  constructor(private salaries: SalariesService, private modal: ModalController) { }

  public salary: Observable<user[]>;
  noEmployees = 1;
  totalSalary: number = 0;
  notapproved;
  status: boolean;

  ngOnInit() {
    this.getallsalary();
  }

  getallsalary()
  {
    this.salary = this.salaries.getNotApprovedUser();
    this.salaries.getApprovedUsers().forEach((val)=>
    {
      this.noEmployees = val.length;
      val.map((i) => {
        let cal = i.salary;
        let cal2 = this.totalSalary;
        let finalcal = +cal + +cal2
        this.totalSalary = finalcal;
      })      
      console.log(this.totalSalary);

    });
    this.salaries.getNotApprovedUser().subscribe((val)=>
    {
      this.notapproved = val;
      console.log(this.notapproved);
      if(this.notapproved.length == 0)
      {
      this.status = true;
      }else
      {
        this.status = false;
      }
    });
  }

  async updatepayment(id)
  {
    const modal = await this.modal.create({
      component: PaymentUpdateComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'userid': id
      }
    });
   await modal.present();
  }
}
