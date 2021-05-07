import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { returnWorkForm, returnWorkService } from '../../forms/return-work-form/returnWork.service';

@Component({
  selector: 'app-return-work-form',
  templateUrl: './return-work-form.page.html',
  styleUrls: ['./return-work-form.page.scss'],
})
export class ReturnWorkFormPage implements OnInit {


  form : returnWorkForm = {
    userId: '',
    formtype: '',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    department: '',
    Iabsence: '',
    Esituation: '',
    position: '',
    status: '',
    sdate: ''
  }

  constructor(private retunW: returnWorkService, private route: Router,
     private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.retunW.getformEmployee(id).subscribe(work => {
        this.form = work;   
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
    this.retunW.deleteIdeaEmployee(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.retunW.addform(this.form).then(() => {
      this.retunW.deleteIdeaEmployee(this.form.id)
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.retunW.addform(this.form).then(() => {
      this.retunW.deleteIdeaEmployee(this.form.id)
      this.route.navigateByUrl('managers/documents');
    })
  }


  close(){
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.Eemail = '';
    this.form.phone = '';
    this.form.department = '';
    this.form.Iabsence = '';
    this.form.Esituation =  '';
    this.form.position = '';
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('managers/documents');
  }

}
