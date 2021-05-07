import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { complainForm, ComplainService } from '../../forms/complain-form/complain.service';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.page.html',
  styleUrls: ['./complain-form.page.scss'],
})
export class ComplainFormPage implements OnInit {

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
      this.complain.getformEmployee(id).subscribe(accident => {
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
    this.complain.deleteIdeaEmployee(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.complain.addform(this.form).then(() => {
      this.complain.deleteIdeaEmployee(this.form.id)
      this.route.navigateByUrl('managers/documents');
    })
  }
 
  updateD()
  {
    this.form.status="Decline";
    this.complain.addform(this.form).then(() => {
      this.complain.deleteIdeaEmployee(this.form.id)
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
