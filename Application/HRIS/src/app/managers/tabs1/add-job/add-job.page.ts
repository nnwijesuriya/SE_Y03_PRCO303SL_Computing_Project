import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecruitmentService } from '../../recruitment/recruitment.service';
import { noticesService, notice } from '../notices/notices.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
})
export class AddJobPage implements OnInit {

  public jobs : Observable<jobs[]>;
  constructor(private noticeService: noticesService, private router : Router,private alertCtrl:AlertController, private modal: ModalController, private toastCtrl: ToastController, private recruitment: RecruitmentService) { }

  job : jobs ={
    position: '',
    qualification: '',
    Experience: '',
    Level: '',
    salary: '',
    skill: '', 
    workingHours: '',
    description: '',
    numberOfVacencies: '',
    requestedDate: '',
    finalDate: ''
  };


  ngOnInit() {
   this.getusers();
  }

  
  getusers()
  {
    this.jobs = this.recruitment.getJobs();
  }

  async alertConfirm(id) {
    console.log(id);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: '<strong>Are you sure you want to delete this job vacency</strong>',
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
            this.recruitment.removejob(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async addjob()
  {
    const modal = await this.modal.create({
      component: FormComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

}
