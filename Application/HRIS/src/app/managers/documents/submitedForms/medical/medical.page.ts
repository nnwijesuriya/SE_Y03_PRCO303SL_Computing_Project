import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  sdate: ''
}

  constructor(private medical: MedicalService,  private activatedroute : ActivatedRoute, private nav: NavController) { }

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
    this.form.sdate = '';
    this.nav.navigateRoot('documents')
  }

}
