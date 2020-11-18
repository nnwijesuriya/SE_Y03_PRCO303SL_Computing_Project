import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    status: '',
    sdate: ''
  }

  constructor(private employr: employeeReviewService,private route: Router, private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl: ToastController ) { }

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

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your document has been deleted',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem deleting your document',
      duration: 2000
    });
    toast.present();  
  } 

  delete()
  {
    this.employr.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.employr.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.employr.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('documents');
    })
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
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('documents');
  }
}
