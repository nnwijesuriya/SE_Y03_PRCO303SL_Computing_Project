import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DocumentTypesComponent} from '../documents/modals/document-types/document-types.component'
import { documents, DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(private menuctrl: MenuController,private modals: ModalController,
     private noticedoc: DocumentsService, private navctrl: NavController,
      private firestore : AngularFirestore, private auth: AngularFireAuth, private router: Router) 
     { }

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
          let id;
          id = data.uid;
          this.searchDocument(id);
  })
    
    this.menuctrl.enable(true, 'documents');
    this.menuctrl.enable(true, 'submited documents');

    this.getdocs()
  }

  public docs : Observable<documents[]>;

  public doc : Observable<documents[]>;

  async openModalDT(){
    const modal = await this.modals.create({
      component: DocumentTypesComponent
    });
    return await modal.present();
  }

  getdocs()
  {
    this.docs = this.noticedoc.getdocuments();
    this.navctrl.navigateRoot('documents');
  }

  searchDocument(id)
  {
  this.doc = this.noticedoc.getCollectionWithIDs(id);
  }

  getdocument(id, type)
  {
   if(type=="Leave Request")
   {
     this.router.navigate(['/documents/request-leaves',id]);
   }
  }
}
