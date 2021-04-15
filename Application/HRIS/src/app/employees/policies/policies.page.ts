import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { policiesService, policies } from 'src/app/managers/policies/policies.service';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {


  constructor(private policies: policiesService, private route: Router, private modal: ModalController) { }

  ngOnInit() {

    let active = "Active";
    this.searchpolicyactive(active);
  }

  public policiesA : Observable<policies[]>;

  searchpolicyactive(status)
  {
    this.policiesA = this.policies.getCollectionWithIDs(status);
  }

  async returnWorkFormmodal()
  {
    
  }
  async getdocument(id)
  {
    const modal = await this.modal.create({
      component: FormComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        id: id
      }
    });
   await modal.present();
  }
}
