import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.page.html',
  styleUrls: ['./declined.page.scss'],
})
export class DeclinedPage implements OnInit {

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
    this.users = this.recruitment.getDeclinedUsers();
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.users = this.recruitment.getDateCollectionDeclined(this.formatedDate);
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
      message: '<strong>Are you sure you want to delete the candidate records</strong>',
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
            this.recruitment.removeCandidateDecline(email);
          }
        }
      ]
    });
    await alert.present();
  }

  addShortlist(email)
  {
   this.recruitment.getformDecline(email).subscribe((val:recruitment) =>
   {
     this.form = val;
     console.log(this.form);
     this.recruitment.addformS(this.form).then(data => {
      this.recruitment.removeCandidateDecline(this.form.email);
     })
   })
  }

  addToAllCandidate(email)
  {
    this.recruitment.getformDecline(email).subscribe((val:recruitment) =>
   {
     this.form = val;
     console.log(this.form);
     this.recruitment.addformA(this.form).then(data => {
      this.recruitment.removeCandidateDecline(this.form.email);
     })
   })
  }

}
