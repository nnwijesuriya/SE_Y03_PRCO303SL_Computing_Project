import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { employeeReviewService, reviewForm } from '../../forms/employee-review-form/employeeReview.service';

@Component({
  selector: 'app-employee-review',
  templateUrl: './employee-review.page.html',
  styleUrls: ['./employee-review.page.scss'],
})
export class EmployeeReviewPage implements OnInit {

  form : reviewForm={
    userId: '',
    formtype: '',
    EFname: '',
    ELname: '',
    Eemail: '',
    MFname: '',
    MLname: '',
    department: '',
    position: '',
    job: '',
    quality: '',
    attendanceP: '',
    productivity: '',
    communicationL: '',
    dependability: '',
    Orating: '',
    comments: '',
    sdate: ''
  }

  constructor(private employr: employeeReviewService, private activatedroute : ActivatedRoute, private nav: NavController ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.employr.getform(id).subscribe(review => {
        this.form = review;   
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
    this.form.position = '';
    this.form.job = '';
    this.form.quality = '';
    this.form.attendanceP = '';
    this.form.productivity = '';
    this.form.communicationL = '';
    this.form.dependability = '';
    this.form.Orating = '';
    this.form.comments = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }
}
