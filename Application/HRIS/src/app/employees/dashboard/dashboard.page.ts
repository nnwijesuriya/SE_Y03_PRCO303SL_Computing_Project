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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private users: UserService,private modal: ModalController,  private auth: AngularFireAuth, private noticeservice: noticesService, private navctrl: NavController) { }

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
    rCounter: ''
  };
  typen = "";
  uid;

  ngOnInit() {
    console.log("happy new year");
    console.log("it works!!!!");
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.getuserDetails();
      this.getnotice(this.typen)
    })
  }

  getuserDetails()
  {
    let id = this.uid;
    this.users.getform(id).subscribe(profiles => {
      this.profile = profiles;   
    });
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
      cssClass: 'my-document-modal-css'
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
}
