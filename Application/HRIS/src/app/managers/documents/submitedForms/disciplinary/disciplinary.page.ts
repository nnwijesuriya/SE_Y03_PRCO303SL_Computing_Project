import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { diciplinaryForm, disService } from '../../forms/disciplinary-form/dis.service';

@Component({
  selector: 'app-disciplinary',
  templateUrl: './disciplinary.page.html',
  styleUrls: ['./disciplinary.page.scss'],
})
export class DisciplinaryPage implements OnInit {

  form : diciplinaryForm = {
    userId: '',
    formtype: '',
    Fname: '',
    Lname: '',
    Eemail: '',
    Department: '',
    position: '',
    MFname: '',
    MLname: '',
    Idetails: '',
    infraction: '',
    Idate: '',
    Ainfration: '',
    saction: '',
    comments: '',
    sdate: ''
  }

  constructor(private dis: disService, private activatedroute : ActivatedRoute, private nav: NavController) { }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.dis.getform(id).subscribe(disciplinary => {
        this.form = disciplinary;   
      });
    }
  }
  
  close()
  {
    this.form.userId = '',
    this.form.formtype = '',
    this.form.Fname = '',
    this.form.Lname = '',
    this.form.Eemail = '',
    this.form.Department = '',
    this.form.position = '',
    this.form.MFname = '',
    this.form.MLname = '',
    this.form.Idetails ='',
    this.form.infraction = '',
    this.form.Idate = '',
    this.form.Ainfration = '',
    this.form.saction = '',
    this.form.comments = '',
    this.form.sdate = ''
    this.nav.navigateRoot('documents')
  }

  ngOnInit() {
  }

}
