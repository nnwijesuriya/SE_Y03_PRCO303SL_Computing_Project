import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { medicalForm, MedicalService } from '../../forms/medical-form/medical.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.page.html',
  styleUrls: ['./medical.page.scss'],
})
export class MedicalPage implements OnInit {

form : medicalForm ={
  userId: '',
  formtype: '',
  EFname: '',
  ELname: '',
  Eemail: '',
  department: '',
  address: '',
  HCName: '',
  HCNumber: '',
  recovery: '',
  limits: '',
  status: '',
  sdate: ''
}

  constructor(private medical: MedicalService,  private activatedroute : ActivatedRoute, 
    private nav: NavController, private toastCtrl:ToastController,
     private route: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.medical.getform(id).subscribe(accident => {
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
    this.medical.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.medical.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.medical.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('documents');
    })
  }


  close()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.EFname = '';
    this.form.ELname = '';
    this.form.Eemail = '';
    this.form.department = '';
    this.form.address = '';
    this.form.HCName = '';
    this.form.HCNumber = '';
    this.form.recovery = '';
    this.form.limits = '';
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents')
  }

}
