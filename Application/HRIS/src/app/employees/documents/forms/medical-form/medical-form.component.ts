import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { medicalForm, MedicalService } from 'src/app/managers/documents/forms/medical-form/medical.service';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.scss'],
})
export class MedicalFormComponent implements OnInit {

  form : medicalForm={
    userId: '',
    formtype: 'Medical Form',
    EFname: '',
    ELname: '',
    Eemail: '',
    department: '',
    address: '',
    HCName: '',
    HCNumber: '',
    recovery: '',
    limits: '',
    status: 'Pending',
    sdate: ''
  }
  
  pipe = new DatePipe('en-US'); 
  
    constructor(private auth: AngularFireAuth, private nav: NavController, private modal: ModalController, private medicalser: MedicalService) { }
  
    ngOnInit() {
      const now = Date.now();
      const myFormattedDate = this.pipe.transform(now, 'short');
      this.form.sdate= myFormattedDate;
  
      this.auth.authState.subscribe(data=> {
        if(data.uid)
          {
            this.form.userId = data.uid;
            console.log( this.form.userId)
          } else
          {
             this.nav.navigateRoot('login');
          }
        });
    }
  
    addform()
    {
      this.medicalser.addform(this.form).then(f =>{
        this.nav.navigateRoot('managers/documents');
      })
    }
  
    cancel()
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
      this.form.sdate = '';
      this.form.status = '';
      this.modal.dismiss();
    }
  
}
