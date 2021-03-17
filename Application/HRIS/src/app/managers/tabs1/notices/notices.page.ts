import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { notice, noticesService } from './notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {

  pipe = new DatePipe('en-US'); 

  constructor(private noticeService: noticesService, private router : Router, private toastCtrl: ToastController) { }

  notice : notice ={
    heading: '',
    description: '',
    priority: '',
    date: ''
  };


  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.notice.date= myFormattedDate;
  }

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your notice has been added',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem adding your notice',
      duration: 2000
    });
    toast.present();  
  } 

  submit()
  {
    this.noticeService.addnotice(this.notice, this.notice.priority).then(() => {
      this.router.navigateByUrl('managers/dashboard');
      this.succesToast();
    }, err => {
      this.failToast();
    });
    console.log(this.notice);
  }

  cancel()
  {
   this.notice.heading="";
   this.notice.description=""
   this.notice.priority=""
  }

}
