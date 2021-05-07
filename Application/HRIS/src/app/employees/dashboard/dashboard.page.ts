import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from 'src/app/managers/add-person/users.service';
import { notice, noticesService } from 'src/app/managers/tabs1/notices/notices.service';
import { ChatSelectComponent } from '../chat-group/chat-select/chat-select.component';
import { ComplainFormComponent } from '../documents/forms/complain-form/complain-form.component';
import { LeaveRequestFormComponent } from '../documents/forms/leave-request-form/leave-request-form.component';
import { MedicalFormComponent } from '../documents/forms/medical-form/medical-form.component';
import { PtorequestFormComponent } from '../documents/forms/ptorequest-form/ptorequest-form.component';
import { ReturnWorkFormComponent } from '../documents/forms/return-work-form/return-work-form.component';
import { DocumentTypeComponent } from '../documents/modals/document-type/document-type.component';
import { InfoComponent } from '../info/info.component';
import { DatePipe } from "@angular/common";
import { MarkingService } from 'src/app/managers/attendance-tab/mark-attendance/verify-form/marking.service';
import { Router } from '@angular/router';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { MySalaryDetailsComponent } from '../my-salary-details/my-salary-details.component';
import { AvailabilityService } from 'src/app/managers/dashboard/availability.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private users: UserService,private availability: AvailabilityService, private router: Router, private attendanceMark: MarkingService, private modal: ModalController,  private auth: AngularFireAuth, private noticeservice: noticesService, private navctrl: NavController) { }

  public notices:  Observable<notice[]>;
  
  profile : users = {
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    Pemail: '',
    Eemail: '',
    password: '',
    phone : '',
    Hphone : '',
    DOB: '' ,
    addressH: '',
    department : '',
    Rdepartment: '',
    role : '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: '',
    review: '',
    rCounter: '',
    holidaysPerYear: '',
    employeeReview: '',
    employeeReviewCounter: ''
  };
  typen = "";
  uid;
  pipe = new DatePipe("en-US");
  date;
  todayDate;
  attendanceMarked = false;
  department;
  allDates = new Array();

  ngOnInit() {
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.getuserDetails();
      this.getnotice(this.typen);
      this.checkAttendance(this.uid);
      this.availability.presense(this.uid)
    })
    const now = Date.now()
    const myFormattedDate = this.pipe.transform(now, "mediumDate");
    this.todayDate = myFormattedDate;
  }

  getuserDetails()
  {
    let id = this.uid;
    this.users.getform(id).subscribe(profiles => {
      this.profile = profiles;  
      this.department = profiles.department 
    });
  }

  async reviewsModal()
  {
    const pmodal = await this.modal.create({
      component: MyReviewsComponent,
      cssClass: 'my-review-modal-css'
    });
    await pmodal.present();
  }

  async salaryModal()
  {
    const modal = await this.modal.create({
      component: MySalaryDetailsComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  getnotice(types)
  {
    this.notices = this.noticeservice.getnotice(types);
    this.navctrl.navigateRoot('employees/dashboard');
  }

  modalValue;
  async selectDocumentmodal()
  {
    const modal = await this.modal.create({
      component: DocumentTypeComponent,
      cssClass: 'my-employeeDocument-modal-css'
    });

    modal.onDidDismiss()
    .then((data) => {
      this.modalValue = data['data'];
      if(this.modalValue == "complain form"){
        this.complainFormmodal();
      }
      if(this.modalValue == "leave request from"){
        this.leaveRequestFormModal();
      }
      if(this.modalValue == "medical form"){
        this.medicalFormModal();
      }
      if(this.modalValue == "return to work form"){
        this.returnWorkFormmodal();
      }
      if(this.modalValue == "PTO request form"){
        this.PTORequestFormModal();
      }
   });
   await modal.present();
  }

  async complainFormmodal()
  {
    const modal = await this.modal.create({
      component: ComplainFormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async leaveRequestFormModal()
  {
    const modal = await this.modal.create({
      component: LeaveRequestFormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async medicalFormModal()
  {
    const modal = await this.modal.create({
      component: MedicalFormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async PTORequestFormModal()
  {
    const modal = await this.modal.create({
      component: PtorequestFormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async returnWorkFormmodal()
  {
    const modal = await this.modal.create({
      component: ReturnWorkFormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async selectChatemodal()
  {
    const modal = await this.modal.create({
      component: ChatSelectComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  chat(department)
  {
    if(department == "Marketing")
    {
     this.navctrl.navigateForward('employees/marketing')
    }
    if(department == "Production")
    {
      this.navctrl.navigateForward('employees/production')
    }
    if(department == "Research & Development")
    {
      this.navctrl.navigateForward('employees/research')
    }
    if(department == "Accounting & Finance")
    {
      this.navctrl.navigateForward('employees/accounting')
    }
    if(department == "Management")
    {
      this.selectChatemodal();
    }
    if(department == "Purchasing & Customer service")
    {
      this.navctrl.navigateForward('employees/purchasing')
    }
  }

  policiesNavigate()
  {
    this.navctrl.navigateBack('employees/policies')
  }

  calendarNavigate()
  {
    this.navctrl.navigateBack('employees/calendar')
  }

  attendanceNav()
  {
    this.navctrl.navigateBack('employees/attendance')
  }

  async infoModal()
  {
    const modal = await this.modal.create({
      component: InfoComponent,
      cssClass: 'my-ProfilePassword-modal-css'
    });
   await modal.present();
  }

  profileNavigate()
  {
    this.navctrl.navigateForward('employees/profile')
  }

  reviewNavigate()
  {
    this.router.navigate(['employees/review/', this.department])
  }

  checkHolidayValue
  checkAttendance(id)
  {
     this.attendanceMark.getDateCollection(id).subscribe(data => {
      let values = Object.keys(data)
      let length = values.length;
      let counter = 0;
      for(counter; counter < length; counter++)
      {
        let value = data[counter].date
        const myFormattedDate = this.pipe.transform(value, "mediumDate");
        this.date = myFormattedDate;
        this.allDates.push(this.date);
        console.log(this.allDates);
      }     
      if(this.allDates.includes(this.todayDate)) 
      {
       this.attendanceMarked= true;
      } else{
       this.attendanceMarked = false;
       //if the hours are more than 8 then it runs (uses 24 hours format)
       let dateTimeH = new Date().getHours();
       if(dateTimeH > 8)
       {
         let initialHolidayDays = this.profile.holidaysPerYear;
         let remainingHolidays = initialHolidayDays - 1;
         console.log(remainingHolidays); 
         this.profile.holidaysPerYear = remainingHolidays;
         this.users.updateEmployeeHoliday(this.profile)
       }
      }
     })
  }
}
