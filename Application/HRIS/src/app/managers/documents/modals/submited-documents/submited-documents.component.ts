import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-submited-documents',
  templateUrl: './submited-documents.component.html',
  styleUrls: ['./submited-documents.component.scss'],
})
export class SubmitedDocumentsComponent implements OnInit {

  constructor(private modals: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    await this.modals.dismiss();
  }

}
