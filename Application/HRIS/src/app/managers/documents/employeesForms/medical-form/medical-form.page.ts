import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { medicalForm, MedicalService } from '../../forms/medical-form/medical.service';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.page.html',
  styleUrls: ['./medical-form.page.scss'],
})
export class MedicalFormPage implements OnInit {


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
        this.medical.getformEmployee(id).subscribe(accident => {
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
      this.medical.deleteIdeaEmployee(this.form.id).then(() => {
        this.route.navigateByUrl('managers/documents');
        this.succesToast();
      }, err => {
        this.failToast();
      });
    }
  
    updateA()
    {
      this.form.status="Accepted";
      this.medical.addform(this.form).then(() => {
        this.medical.deleteIdeaEmployee(this.form.id)
        this.route.navigateByUrl('managers/documents');
      })
    }
  
    updateD()
    {
      this.form.status="Decline";
      this.medical.addform(this.form).then(() => {
        this.medical.deleteIdeaEmployee(this.form.id)
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
      this.form.department = '';
      this.form.address = '';
      this.form.HCName = '';
      this.form.HCNumber = '';
      this.form.recovery = '';
      this.form.limits = '';
      this.form.status = '';
      this.form.sdate = '';
      this.nav.navigateRoot('managers/documents')
    }
  
}