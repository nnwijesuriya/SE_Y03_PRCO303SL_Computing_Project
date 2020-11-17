import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { complainForm, ComplainService } from '../../forms/complain-form/complain.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.page.html',
  styleUrls: ['./complain.page.scss'],
})
export class ComplainPage implements OnInit {

  form: complainForm={
    userId: '',
    formtype: '',
    EFname: '',
    ELname: '',
    Eemail: '',
    Edepartment: '',
    Eposition: '',
    CFname: '',
    CLname: '',
    Cdepartment: '',
    Cposition: '',
    Rcomplain: '',
    Idate: '',
    location: '',
    witness: '',
    comments: '',
    sdate: '',
  }

  constructor(private complain: ComplainService, private activatedroute : ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.complain.getform(id).subscribe(accident => {
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
    this.form.Edepartment = '';
    this.form.Eposition = '';
    this.form.CFname = '';
    this.form.CLname = '';
    this.form.Cdepartment = '';
    this.form.Cposition = '';
    this.form.Rcomplain = '';
    this.form.Idate = '';
    this.form.location = '';
    this.form.witness = '';
    this.form.comments= '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
