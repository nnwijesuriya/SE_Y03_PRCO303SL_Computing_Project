import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ptoForm, PTOService } from '../../forms/ptorequest-form/pto.service';

@Component({
  selector: 'app-pto-request',
  templateUrl: './pto-request.page.html',
  styleUrls: ['./pto-request.page.scss'],
})
export class PtoRequestPage implements OnInit {

  form : ptoForm ={
    userId: '',
   formtype: '',
    Fname: '',
   Lname: '',
   email: '',
   phone: '',
   Sname: '',
   department: '',
   PTstart: '',
   PTend: '',
   comments: '',
   status: '',
   sdate: ''
  }

  constructor(private ptoser: PTOService,private route:Router, private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.ptoser.getform(id).subscribe(pto => {
        this.form = pto;   
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
    this.ptoser.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.ptoser.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.ptoser.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }


  close()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.email = '';
    this.form.phone = '';
    this.form.Sname = '';
    this.form.department = '';
    this.form.PTstart = '';
    this.form.PTend = '';
    this.form.comments = '';
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('managers/documents');
  }
}
