import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface complainForm {
  id?: string,
  userId: any;
  formtype: string;
  EFname: string,
  ELname: string;
  Eemail: string;
  Edepartment: string;
  Eposition: string;
  CFname: string,
  CLname: string;
  Cdepartment: string;
  Cposition: string;
  Rcomplain: string;
  Idate: any;
  location: any;
  witness: string;
  comments: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  private leave: Observable<complainForm[]>;
  private leaveCollection: AngularFirestoreCollection<complainForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<complainForm>('documents/managers/forms');
    this.leave = this.leaveCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addform(compl : complainForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(compl);
    }

//to get the form data with each id
  getform(id: string): Observable<complainForm> {
      return this.leaveCollection.doc<complainForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }
}