import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ptoForm, PTOService } from '../../forms/ptorequest-form/pto.service';

@Component({
  selector: 'app-pto-request-form',
  templateUrl: './pto-request-form.page.html',
  styleUrls: ['./pto-request-form.page.scss'],
})
export class PtoRequestFormPage implements OnInit {

  form : ptoForm ={
    userId: '',
   formtype: '',
    Fname: '',
   Lname: '',
   Eemail: '',
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
      this.ptoser.getformEmployee(id).subscribe(pto => {
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
    this.ptoser.deleteIdeaEmployee(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.ptoser.addform(this.form).then(() => {
      this.ptoser.deleteIdeaEmployee(this.form.id);
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.ptoser.addform(this.form).then(() => {
      this.ptoser.deleteIdeaEmployee(this.form.id)
      this.route.navigateByUrl('managers/documents');
    })
  }


  close()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.Eemail = '';
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
