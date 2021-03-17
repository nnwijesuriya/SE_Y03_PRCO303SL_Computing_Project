import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.scss'],
})
export class DocumentTypesComponent implements OnInit {

  constructor(private modals: ModalController, private nav: NavController, private route: Router) { }

  ngOnInit() {}

  async closeModal(){
    await this.modals.dismiss();
  }

  async leave(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/leave-request')
      });
  }

  async accident(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/accidentreport-form')
      });
  }

  async disiplinary(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/disciplinary-form')
      });
  }

  async employeeReview(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/employee-review-form')
      });
  }
  async recruitment(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/recruitment-form')
      });
  }

  async medicalform(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/medical-form')
      });
  }
  
  async complain(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/complain-form')
      });
  }

  async disciplinary(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/disciplinary-form')
      });
  }

  async returnwork(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/return-work-form')
      });
  }

  async ptorequest(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/ptorequest-form')
      });
  }

  async release(){
    await this.modals.dismiss().then(nav=>
      {
      this.route.navigateByUrl('managers/documents/employee-release-form')
      });
  }
}
