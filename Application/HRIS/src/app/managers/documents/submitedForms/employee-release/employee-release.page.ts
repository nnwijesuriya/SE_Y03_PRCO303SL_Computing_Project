import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    status: '',
    sdate: ''
  }

  constructor(private release: EmployeeReleaseService, private route:Router, private activatedroute : ActivatedRoute, private nav: NavController,private toastCtrl:ToastController ) { }

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
    this.release.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.release.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.release.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
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
    this.form.status= '';
    this.form.sdate = '';
    this.nav.navigateRoot('managers/documents');
  }

}
