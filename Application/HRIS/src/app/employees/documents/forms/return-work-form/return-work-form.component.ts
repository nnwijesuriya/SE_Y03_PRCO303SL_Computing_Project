import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { returnWorkForm, returnWorkService } from 'src/app/managers/documents/forms/return-work-form/returnWork.service';

@Component({
  selector: 'app-return-work-form',
  templateUrl: './return-work-form.component.html',
  styleUrls: ['./return-work-form.component.scss'],
})
export class ReturnWorkFormComponent implements OnInit {

  form : returnWorkForm={
    userId: '',
    formtype: 'Return To Work Form',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    department: '',
    Iabsence: '',
    Esituation: '',
    position: '',
    status: 'Pending',
    sdate: ''
  }

  pipe = new DatePipe('en-US'); 

  constructor(private rworkService: returnWorkService, private auth: AngularFireAuth, private nav: NavController, private modal: ModalController) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.sdate= myFormattedDate;

    this.auth.authState.subscribe(data=> {
      this.form.Eemail = data.email;
      if(data.uid)
        {
          this.form.userId = data.uid;
          console.log( this.form.userId)
        } else
        {
           this.nav.navigateRoot('login');
        }
      });
  }

  addform()
  {
    this.rworkService.addformEmployee(this.form).then(f =>{
      this.cancel();
    })
  }

  cancel()
  {
    this.form.userId = '';
    this.form.formtype = '';
    this.form.Fname = '';
    this.form.Lname = '';
    this.form.Eemail = '';
    this.form.phone = '';
    this.form.department = '';
    this.form.Iabsence = '';
    this.form.Esituation =  '';
    this.form.position = '';
    this.form.sdate = '';
    this.form.status = '';
    this.modal.dismiss();
  }
}
