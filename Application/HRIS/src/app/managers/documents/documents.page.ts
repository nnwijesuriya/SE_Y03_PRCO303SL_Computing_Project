import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { DocumentTypesComponent} from '../documents/modals/document-types/document-types.component'
import {SubmitedDocumentsComponent} from '../documents/modals/submited-documents/submited-documents.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(private menuctrl: MenuController,private modals: ModalController) { }

  ngOnInit() {
    this.menuctrl.enable(true, 'documents');
    this.menuctrl.enable(true, 'submited documents');
  }

  async openModalDT(){
    const modal = await this.modals.create({
      component: DocumentTypesComponent
    });
    return await modal.present();
  }

  async openModal(){
    const modal = await this.modals.create({
      component: SubmitedDocumentsComponent
    });
    return await modal.present();
  }
}
