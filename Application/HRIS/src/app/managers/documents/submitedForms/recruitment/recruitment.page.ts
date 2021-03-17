import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    Eemail: '',
    phone: '',
    Lphone: '',
    address: '',
    status: '',
    sdate: ''
  }

  constructor(private recruit: RecruitService,private activatedroute : ActivatedRoute,private route:Router, private nav: NavController,  private toastCtrl:ToastController) { }

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
    this.recruit.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.recruit.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.recruit.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  close()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Mname = '';
    this.form.Lname = '';
    this.form.dbirth = '';
    this.form.Eemail = '';
    this.form.phone = '';
    this.form.Lphone = '';
    this.form.address = '';
    this.form.status = '';
    this.form.sdate =  '';
    this.nav.navigateRoot('managers/documents')
  }

}
