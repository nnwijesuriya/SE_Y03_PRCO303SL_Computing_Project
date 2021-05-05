import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {

  form : recruitment = {
    firstName: '',
    middleName: '',
    lastName: '',
    DOB: '',
    address: '',
    email: '',
    phone: '',
    linkedinProfile: '', 
    skills: '',
    certificates: '',
    experience: '',
    applingJob: '',
    requestingBenefits: '', 
    HROpinion: '',
    addedDate: ''
  }
  userEmail = this.navprams.get('userId')
  DOB;

  pipe = new DatePipe('en-US'); 
  constructor(private modal: ModalController, private recruitment: RecruitmentService, public navprams: NavParams) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile()
  {
    console.log(this.userEmail);
    this.recruitment.getform(this.userEmail).subscribe(profiles => {
    this.form = profiles;
    console.log(profiles);
    const myFormattedDate = this.pipe.transform(this.form.DOB, 'mediumDate');
    let formatedDate= myFormattedDate;
    this.DOB = formatedDate;
    console.log(this.form);   
    });
  }

  update()
  {
    console.log(this.form);
    this.recruitment.updateuser(this.form);
    this.cancel();
  }

  cancel()
  {
   this.modal.dismiss();
  }

}
