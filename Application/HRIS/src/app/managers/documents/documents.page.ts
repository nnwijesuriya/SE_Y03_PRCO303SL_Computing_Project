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

    let acc = "Accepted";
    this.searchDocumnetaccepted(acc);

    let pen = "Pending";
    this.searchDocumnetpending(pen);

    let dec="Decline"
    this.searchDocumnetdecline(dec);
  }

  public docsA : Observable<documents[]>;

  public docsD : Observable<documents[]>;

  public docsP : Observable<documents[]>;

  public doc : Observable<documents[]>;

  async openModalDT(){
    const modal = await this.modals.create({
      component: DocumentTypesComponent,
      cssClass: 'my-documentSelect-modal-css'
    });
    return await modal.present();
  }

  searchDocument(id)
  {
  this.doc = this.noticedoc.getCollectionWithIDs(id);
  }
 
  searchDocumnetaccepted(status){
  this.docsA = this.noticedoc.getCollection(status);
  }

  searchDocumnetpending(status){
    this.docsP = this.noticedoc.getCollectionEmployees(status);
  }

  searchDocumnetdecline(status){
    this.docsD = this.noticedoc.getCollection(status);
  }

  getdocument(id, type)
  {
    console.log(id);
   if(type=="Leave Request")
   {
     this.router.navigate(['/managers/documents/request-leaves',id]);
   }else if(type == "Diciplinary Form")
   {
    this.router.navigate(['/managers/documents/disciplinary',id]);
   }else if(type == "Employee Review Form")
   {
    this.router.navigate(['/managers/documents/employee-review',id]);
   }else if(type == "Accident Report")
   {
    this.router.navigate(['/managers/documents/accident-form',id]);
   }else if(type == "Medical Form")
   {
    this.router.navigate(['/managers/documents/medical',id]);
   }else if(type == "Release Form")
   {
    this.router.navigate(['/managers/documents/employee-release',id]);
   }else if(type == "Complain Form")
   {
    this.router.navigate(['/managers/documents/complain',id]);
   }else if(type == "PTO Request")
   {
    this.router.navigate(['/managers/documents/pto-request',id]);
   }else if(type == "Recruitment Form")
   {
    this.router.navigate(['/managers/documents/recruitment',id]);
   }else if(type == "Return To Work Form")
   {
    this.router.navigate(['/managers/documents/return-work',id]);
   }
  }

  getdocumentemployee(id, type)
  {
    console.log(id);
   if(type=="Leave Request")
   {
     this.router.navigate(['/managers/documents/leave-request-form-employee',id]);
   }else if(type == "Medical Form")
   {
    this.router.navigate(['/managers/documents/medical-form-employee',id]);
   }else if(type == "Complain Form")
   {
    this.router.navigate(['/managers/documents/complain-form-employee',id]);
   }else if(type == "PTO Request")
   {
    this.router.navigate(['/managers/documents/pto-request-form-employee',id]);
   }else if(type == "Return To Work Form")
   {
    this.router.navigate(['/managers/documents/return-work-form-employee',id]);
   }
  }
}
