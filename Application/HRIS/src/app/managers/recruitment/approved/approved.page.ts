import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.page.html',
  styleUrls: ['./approved.page.scss'],
})
export class ApprovedPage implements OnInit {


  public form : recruitment = {
    firstName: '',
    middleName: '',
    lastName: '',
    DOB: '',
    address: '',
    email: '',
    phone: '',
    linkedinProfile: '', 
    skills: '',
    certificates: '',
    experience: '',
    applingJob: '',
    requestingBenefits: '', 
    HROpinion: '',
    addedDate: ''
  }

  term;
  selectedDate
  formatedDate

  public users : Observable<recruitment[]>;

  pipe = new DatePipe('en-US'); 
  constructor(private recruitment: RecruitmentService, private modal: ModalController, private alertCtrl: AlertController) { }


  ngOnInit() {
    this.getusers();
  }

  getusers()
  {
    this.users = this.recruitment.getApprovedUsers();
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.users = this.recruitment.getDateCollectionApproved(this.formatedDate);
  }

  removedate()
  {
    this.selectedDate = null;
  }

  filterusers(evt)
  {  
  this.term = evt.srcElement.value;
  }

  async alertConfirm(email) {
    console.log(email);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: '<strong>Are you sure you want to delete the approved candidate records</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (user) => {
            console.log('Confirm Cancel: user');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.recruitment.removeCandidateApproved(email);
          }
        }
      ]
    });
    await alert.present();
  }
}
