import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { policies, policiesService } from '../policies.service';

@Component({
  selector: 'app-sub-form',
  templateUrl: './sub-form.page.html',
  styleUrls: ['./sub-form.page.scss'],
})
export class SubFormPage implements OnInit {

  public user : Observable<policies[]>;

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

  constructor(private activatedroute : ActivatedRoute, private policy: policiesService, private route: Router, private alert: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.policy.getform(id).subscribe(policy => {
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

  update()
  {
    console.log(this.form);
     this.policy.updatepolicy(this.form);
     this.cancel();
  }

  deactive()
  {
    this.form.Pstatus = "Deactive";
    this.policy.updatepolicy(this.form);
    this.cancel();
  }

  active()
  {
    this.form.Pstatus = "Active";
    this.policy.updatepolicy(this.form);
    this.cancel();
  }

  remove()
  {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    this.policy.deletepolicy(id);
    this.cancel();
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
  this.route.navigateByUrl('policies');
  }
}
