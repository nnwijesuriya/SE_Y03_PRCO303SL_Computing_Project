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
      this.route.navigateByUrl('documents/leave-request')
      });
  }
}
