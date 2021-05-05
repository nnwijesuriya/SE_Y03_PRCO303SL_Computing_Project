import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { RecruitmentService } from 'src/app/managers/recruitment/recruitment.service';
import { noticesService } from '../../notices/notices.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  pipe = new DatePipe('en-US'); 

  constructor(private noticeService: noticesService, private router : Router, private toastCtrl: ToastController, private recruitment: RecruitmentService, private modal: ModalController) { }

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
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.job.requestedDate= myFormattedDate;
  }

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your job vacency has been added',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem adding your job vacencey',
      duration: 2000
    });
    toast.present();  
  } 

  submit()
  {
    this.recruitment.addformJ(this.job).then(() => {
      this.cancel();
      this.succesToast();
    }, err => {
      this.failToast();
    });
    console.log(this.job);
  }

  cancel()
  {
    this.job.position="";
    this.job.qualification="";
    this.job.Experience="";
    this.job.Level="";
    this.job.salary="";
    this.job.skill="";
    this.job.workingHours="";
    this.job.description="";
    this.job.numberOfVacencies= "";
    this.job.requestedDate="";
    this.job.finalDate="";
    this.modal.dismiss();
  }
}
