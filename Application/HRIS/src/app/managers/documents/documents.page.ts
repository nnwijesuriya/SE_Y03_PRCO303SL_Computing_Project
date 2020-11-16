import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DocumentTypesComponent} from '../documents/modals/document-types/document-types.component'
import {SubmitedDocumentsComponent} from '../documents/modals/submited-documents/submited-documents.component';
import { documents, DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(private menuctrl: MenuController,private modals: ModalController, private noticedoc: DocumentsService, private navctrl: NavController) { }

  ngOnInit() {
    this.menuctrl.enable(true, 'documents');
    this.menuctrl.enable(true, 'submited documents');

    this.getdocs()
  }

  public docs : Observable<documents[]>;

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

  getdocs()
  {
    this.docs = this.noticedoc.getdocuments();
    this.navctrl.navigateRoot('documents');
  }

}
