import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.scss'],
})
export class DocumentTypesComponent implements OnInit {

  constructor(private modals: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    await this.modals.dismiss();
  }

}
