import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { recruitForm, RecruitService } from '../../forms/recruitment-form/recruit.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.page.html',
  styleUrls: ['./recruitment.page.scss'],
})
export class RecruitmentPage implements OnInit {

  form :  recruitForm={
    userId: '',
    formtype: '',
    Fname: '',
    Mname: '',
    Lname: '',
    dbirth: '',
    email: '',
    phone: '',
    Lphone: '',
    address: '',
    sdate: ''
  }

  constructor(private recruit: RecruitService,private activatedroute : ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.recruit.getform(id).subscribe(pto => {
        this.form = pto;   
      });
    }
  }

  close()
  {
    this.form.userId = '',
    this.form.formtype = '',
    this.form.Fname = '',
    this.form.Mname = '',
    this.form.Lname = '',
    this.form.dbirth = '',
    this.form.email = '',
    this.form.phone = '',
    this.form.Lphone = '',
    this.form.address = '',
    this.form.sdate =  ''
    this.nav.navigateRoot('documents')
  }

}
