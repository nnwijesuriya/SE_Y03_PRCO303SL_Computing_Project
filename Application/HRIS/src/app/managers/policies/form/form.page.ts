import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { policies, policiesService } from '../policies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form : policies ={
    PName: '',
    Pstart: '',
    Cdate: '',
    purpose: '',
    Intro: '',
    Pstatements: '',
    Pdetails: '',
    Pstatus: ''
  } 

  pipe = new DatePipe('en-US'); 
  constructor(private route: Router, private polices: policiesService) { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.form.Cdate= myFormattedDate;
    this.form.Pstatus = "Active";
  }

  addform()
  {
  this.polices.addform(this.form).then(after =>{
    this.cancel();
  });
  }

  cancel()
  {
    this.form.PName = "";
    this.form.Cdate = "";
    this.form.Pstart = "";
    this.form.purpose = "";
    this.form.Intro = "";
    this.form.Pstatements = "";
    this.form.Pdetails = "";
    this.form.Pstatus = "";
   this.route.navigateByUrl('managers/policies');
  }

}
