import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  form : recruitment = {
    firstName: '',
    middleName: '',
    lastName: '',
    DOB: '',
    address: '',
    email: '',
    phone: '',
    skills: '',
    certificates: '',
    experience: '',
    applingJob: '',
    requestingBenefits: '', 
    HROpinion: '',
    addedDate: ''
  }


  pipe = new DatePipe('en-US'); 
  constructor(private modal: ModalController, private recruitment: RecruitmentService) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'mediumDate');
    let formatedDate= myFormattedDate;
    this.form.addedDate = formatedDate;
  }

  submit()
  {
    console.log(this.form);
    this.recruitment.addformA(this.form);
    this.cancel();
  }

  cancel()
  {
   this.modal.dismiss();
  }

}
