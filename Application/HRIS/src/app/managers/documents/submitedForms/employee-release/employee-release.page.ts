import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { employeereleaseForm, EmployeeReleaseService } from '../../forms/employee-release-form/employeeRelease.service';

@Component({
  selector: 'app-employee-release',
  templateUrl: './employee-release.page.html',
  styleUrls: ['./employee-release.page.scss'],
})
export class EmployeeReleasePage implements OnInit {

  form : employeereleaseForm={
    userId: '',
    formtype: '',
    EFname: '',
    ELname: '',
    Eemail: '',
    department: '',
    position: '',
    MFname: '',
    MLname: '',
    Memail: '',
    LWdate: '',
    LPdate: '',
    release: '',
    comments: '',
    sdate: ''
  }

  constructor(private release: EmployeeReleaseService, private activatedroute : ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.release.getform(id).subscribe(accident => {
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
    this.form.position = '';
    this.form.MFname = '';
    this.form.MLname = '';
    this.form.Memail = '';
    this.form.LWdate = '';
    this.form.LPdate = '';
    this.form.release = '';
    this.form.comments = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }

}
