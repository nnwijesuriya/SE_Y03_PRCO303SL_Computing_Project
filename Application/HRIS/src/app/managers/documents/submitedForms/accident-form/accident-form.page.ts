import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { accidentForm, AccidentService } from '../../forms/accidentreport-form/accident.service';

@Component({
  selector: 'app-accident-form',
  templateUrl: './accident-form.page.html',
  styleUrls: ['./accident-form.page.scss'],
})
export class AccidentFormPage implements OnInit {

  form : accidentForm = {
    userId: '',
    formtype: '',
    EFname: '',
    ELname: '',
    Eemail: '',
    MFname: '',
    MLname: '',
    department: '',
    Idate: '',
    Wemail: '',
    Eexplain: '',
    location: '',
    Idetails: '',
    status: '',
    sdate: ''
  }

  constructor(private acc: AccidentService,private route: Router, private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.acc.getform(id).subscribe(accident => {
        this.form = accident;   
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
    this.acc.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.acc.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.acc.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }
 

  close()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.EFname = '';
    this.form.ELname = '';
    this.form.Eemail = '';
    this.form.MFname = '';
    this.form.MLname = '';
    this.form.department = '';
    this.form.Idate = '';
    this.form.Wemail = '';
    this.form.Eexplain = '';
    this.form.location = '';
    this.form.Idetails = '';
    this.form.status = '';
    this.form.sdate ='';
    this.nav.navigateRoot('managers/documents')
  }
}
