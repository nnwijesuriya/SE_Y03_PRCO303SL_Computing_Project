import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface documents {
  id?: string,
  userId: any;
  formtype: string;
  Eemail: string;
  sdate:any;
}
 
@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private docs: Observable<documents[]>;
  private docsCollection: AngularFirestoreCollection<documents>;

  constructor(private afs : AngularFirestore){
    this.docsCollection = this.afs.collection<documents>('documents/managers/forms');
    this.docs = this.docsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getdocuments(): Observable<documents[]> {
      return this.docs;
  }

  getCollectionWithIDs(value) {
    return this.afs.collection<documents>('documents/managers/forms', ref => 
        ref.where(
            'userId', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
}

}