import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { FormComponent } from '../form/form.component';
import { JobsAvailableComponent } from '../jobs-available/jobs-available.component';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-applied-all',
  templateUrl: './applied-all.page.html',
  styleUrls: ['./applied-all.page.scss'],
})
export class AppliedAllPage implements OnInit {

  public form : recruitment = {
    firstName: '',
    middleName: '',
    lastName: '',
    DOB: '',
    address: '',
    email: '',
    phone: '', 
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

  async addCandidateModal()
  {
    const modal = await this.modal.create({
      component: FormComponent,
      cssClass: 'my-custom-modal-css'
    }); 
   await modal.present();
  }

  getusers()
  {
    this.users = this.recruitment.getAllUsers();
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.users = this.recruitment.getDateCollection(this.formatedDate);
  }

  removedate()
  {
    this.selectedDate = null;
  }

  filterusers(evt)
  {  
  this.term = evt.srcElement.value;
  }

  async editemployee(email)
  {
    const modal = await this.modal.create({
      component: EditFormComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'userId': email
      }
    });
   await modal.present();
  }

  async availableJobs(email)
  {
    const modal = await this.modal.create({
      component: JobsAvailableComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'userId': email
      }
    });
   await modal.present();
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
            this.recruitment.removeCandidate(email);
          }
        }
      ]
    });
    await alert.present();
  }

  addShortlist(email)
  {
   this.recruitment.getform(email).subscribe((val:recruitment) =>
   {
     this.form = val;
     console.log(this.form);
     this.recruitment.addformS(this.form).then(data => {
      this.recruitment.removeCandidate(this.form.email);
     })
   })
  }

  declineCandidate(email)
  {
    this.recruitment.getform(email).subscribe((val:recruitment) =>
    {
      this.form = val;
      console.log(this.form);
      this.recruitment.addformD(this.form).then(data => {
       this.recruitment.removeCandidate(this.form.email);
      })
    })
  }
}
