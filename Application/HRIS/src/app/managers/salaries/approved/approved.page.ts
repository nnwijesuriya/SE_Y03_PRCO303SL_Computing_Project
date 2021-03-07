import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';
import { AttendanceService } from '../../attendance-tab/attendance.service';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { SalariesService, user } from '../salaries.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.page.html',
  styleUrls: ['./approved.page.scss'],
})
export class ApprovedPage implements OnInit {

  pipe = new DatePipe('en-US'); 
  constructor(private salaries: SalariesService, private user: UserService, private attendance: AttendanceService, private modal: ModalController) { }

  public salary: Observable<user[]>

  term
  formatedDate;
  department;
  selectedDate;
  noEmployees = 1;
  totalSalary: number = 0;
  notapproved;
  status: boolean;

  ngOnInit() {
    this.getallsalary();
  }

  getallsalary()
  {
    this.salary = this.salaries.getApprovedUsers();
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
   
  filteremployees(evt)
  {
    this.term = evt.srcElement.value;
  }

  async editpayment(id)
  {
    const modal = await this.modal.create({
      component: PaymentEditComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'userid': id
      }
    });
   await modal.present();
  }

  removedate()
  {
    this.selectedDate = null;
  }

  getByDepartment()
  {
    console.log(this.department);
    if(this.department == "All")
    {
      this.getallsalary();
      this.department == null;
    }else
    {
    this.salary = this.salaries.getDepartmentCollection(this.department);
    }
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.salary = this.salaries.getDateCollection(this.formatedDate);
  }
}
