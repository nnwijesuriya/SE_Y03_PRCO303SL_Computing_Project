import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-jobs-available',
  templateUrl: './jobs-available.component.html',
  styleUrls: ['./jobs-available.component.scss'],
})
export class JobsAvailableComponent implements OnInit {
  public jobs : Observable<jobs[]>;
  constructor(private modal: ModalController, private recruitment: RecruitmentService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getusers();
  }

  cancel()
  {
   this.modal.dismiss();
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

}
