import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    sdate: ''
  }

  constructor(private acc: AccidentService,private activatedroute : ActivatedRoute, private nav: NavController) { }

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
    this.form.sdate ='';
    this.nav.navigateRoot('documents')
  }
}
