import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { leaveForm, LeaveService } from '../../forms/leave-request/leave.service';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.page.html',
  styleUrls: ['./leave-request-form.page.scss'],
})
export class LeaveRequestFormPage implements OnInit {


  leave : leaveForm = {
    userId: '',
    formtype: '',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    position: '',
    Ldate: '',
    Edate: '',
    Ltype: '',
    comments: '',
    status: '',
    sdate: ''
  }

  constructor(private leaveservice: LeaveService,private toastCtrl: ToastController, private activatedroute : ActivatedRoute, private nav: NavController, private route: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.leaveservice.getformEmployee(id).subscribe(leave => {
        this.leave = leave;   
      });
    }
  }

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your document has been deleted',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem deleting your document',
      duration: 2000
    });
    toast.present();  
  } 

  delete()
  {
    this.leaveservice.deleteIdeaEmployee(this.leave.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.leave.status="Accepted";
    this.leaveservice.addform(this.leave).then(() => {
    this.leaveservice.deleteIdeaEmployee(this.leave.id);
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.leave.status="Decline";
    this.leaveservice.addform(this.leave).then(() => {
      this.leaveservice.deleteIdeaEmployee(this.leave.id);
      this.route.navigateByUrl('managers/documents');
    })
  }

  close(){
   this.leave.userId = '';
   this.leave.formtype = '';
   this.leave.Fname = '';
   this.leave.Lname = '';
   this.leave.Eemail = '';
   this.leave.phone = '';
   this.leave.position = '';
   this.leave.Ldate = '';
   this.leave.Edate = '';
   this.leave.Ltype = '';
   this.leave.comments = '';
   this.leave.status = '';
   this.leave.sdate = '';
   this.nav.navigateRoot('managers/documents');
  }
}
