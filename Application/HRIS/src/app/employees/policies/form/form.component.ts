import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { policies, policiesService } from 'src/app/managers/policies/policies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public user : Observable<policies[]>;

  id;
  form : policies = {
    PName: '',
    Pstart: '',
    Cdate: '',
    purpose: '',
    Intro: '',
    Pstatements: '',
    Pdetails: '',
    Pstatus: ''
  }

  acvtiveBTN:boolean;
  deactiveBTN: boolean;

  constructor(private activatedroute : ActivatedRoute, private policy: policiesService,
     private route: Router, private alert: AlertController, private modal: ModalController) { 

     }

  ngOnInit() {
    console.log(this.id);
  }

  ionViewWillEnter() {
    if (this.id) {
      this.policy.getform(this.id).subscribe(policy => {
        this.form = policy; 
          if(this.form.Pstatus == "Deactive")
           {
            this.deactiveBTN = true;
           }else
           {
           this.acvtiveBTN = true;
          }  
        });
      }
  }

  cancel()
  {
  this.form.PName = "",
  this.form.Pstart = "",
  this.form.Cdate = "",
  this.form.purpose = "",
  this.form.Intro = "",
  this.form.Pstatements = "",
  this.form.Pdetails = "",
  this.form.Pstatus = ""
  this.modal.dismiss();
  }

}
