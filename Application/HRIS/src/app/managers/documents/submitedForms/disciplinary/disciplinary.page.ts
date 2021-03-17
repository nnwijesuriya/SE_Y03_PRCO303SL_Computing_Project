import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { diciplinaryForm, disService } from '../../forms/disciplinary-form/dis.service';

@Component({
  selector: 'app-disciplinary',
  templateUrl: './disciplinary.page.html',
  styleUrls: ['./disciplinary.page.scss'],
})
export class DisciplinaryPage implements OnInit {

  form : diciplinaryForm = {
    userId: '',
    formtype: '',
    Fname: '',
    Lname: '',
    Eemail: '',
    Department: '',
    position: '',
    MFname: '',
    MLname: '',
    Idetails: '',
    infraction: '',
    Idate: '',
    Ainfration: '',
    saction: '',
    comments: '',
    status: '',
    sdate: ''
  }

  constructor(private dis: disService,private route: Router, private activatedroute : ActivatedRoute, private nav: NavController, private toastCtrl: ToastController) { }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.dis.getform(id).subscribe(disciplinary => {
        this.form = disciplinary;   
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
    this.dis.deleteIdea(this.form.id).then(() => {
      this.route.navigateByUrl('managers/documents');
      this.succesToast();
    }, err => {
      this.failToast();
    });
  }

  updateA()
  {
    this.form.status="Accepted";
    this.dis.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }

  updateD()
  {
    this.form.status="Decline";
    this.dis.updateIdea(this.form).then(() => {
      this.route.navigateByUrl('managers/documents');
    })
  }
  
  close()
  {
    this.form.userId = '',
    this.form.formtype = '',
    this.form.Fname = '',
    this.form.Lname = '',
    this.form.Eemail = '',
    this.form.Department = '',
    this.form.position = '',
    this.form.MFname = '',
    this.form.MLname = '',
    this.form.Idetails ='',
    this.form.infraction = '',
    this.form.Idate = '',
    this.form.Ainfration = '',
    this.form.saction = '',
    this.form.comments = '',
    this.form.status= '';
    this.form.sdate = ''
    this.nav.navigateRoot('managers/documents')
  }

  ngOnInit() {
  }

}
