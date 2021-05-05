import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { RecruitmentService } from '../recruitment.service';

@Component({
  selector: 'app-short-listed',
  templateUrl: './short-listed.page.html',
  styleUrls: ['./short-listed.page.scss'],
})
export class ShortListedPage implements OnInit {
  
  public form : recruitment = {
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

  term;
  selectedDate
  formatedDate

  public users : Observable<recruitment[]>;

  pipe = new DatePipe('en-US'); 
  constructor(private recruitment: RecruitmentService, private modal: ModalController, private alertCtrl: AlertController) { }


  ngOnInit() {
    this.getusers();
  }

  getusers()
  {
    this.users = this.recruitment.getShortListedUsers();
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.users = this.recruitment.getDateCollectionShortListed(this.formatedDate);
  }

  removedate()
  {
    this.selectedDate = null;
  }

  filterusers(evt)
  {  
  this.term = evt.srcElement.value;
  }

  addDeclinelist(email)
  {
   this.recruitment.getformShortListed(email).subscribe((val:recruitment) =>
   {
     this.form = val;
     console.log(this.form);
     this.recruitment.addformD(this.form).then(data => {
      this.recruitment.removeCandidateShortListed(this.form.email);
     })
   })
  }

  addApprovedlist(email)
  {
   this.recruitment.getformShortListed(email).subscribe((val:recruitment) =>
   {
     this.form = val;
     console.log(this.form);
     this.recruitment.addformApproved(this.form).then(data => {
      this.recruitment.removeCandidateShortListed(this.form.email);
     })
   })
  }
}
