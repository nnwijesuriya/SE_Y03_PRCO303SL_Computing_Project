import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
   sdate: ''
  }

  constructor(private ptoser: PTOService, private activatedroute : ActivatedRoute, private nav: NavController) { }

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
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }
}
