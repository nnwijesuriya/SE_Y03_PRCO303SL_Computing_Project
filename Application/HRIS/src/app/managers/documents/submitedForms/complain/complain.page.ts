import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
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
    status: '',
    sdate: '',
  }

  constructor(private complain: ComplainService,private route: Router, private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl: ToastController) { }

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
    this.complain.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.complain.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }
 
  updateD()
  {
    this.form.status="Decline";
    this.complain.updateIdea(this.form).then(() => {
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
    this.form.status = '';
    this.form.sdate = '';
    this.nav.navigateRoot('managers/documents');
  }

}
