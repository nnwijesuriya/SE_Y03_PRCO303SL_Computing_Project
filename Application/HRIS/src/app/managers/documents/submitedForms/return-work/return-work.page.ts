import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { returnWorkForm, returnWorkService } from '../../forms/return-work-form/returnWork.service';

@Component({
  selector: 'app-return-work',
  templateUrl: './return-work.page.html',
  styleUrls: ['./return-work.page.scss'],
})
export class ReturnWorkPage implements OnInit {

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
    sdate: ''
  }

  constructor(private retunW: returnWorkService, private activatedroute : ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.retunW.getform(id).subscribe(work => {
        this.form = work;   
      });
    }
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
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
