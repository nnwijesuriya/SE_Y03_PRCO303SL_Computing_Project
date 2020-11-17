import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface recruitForm {
  id?: string,
  userId: any;
  formtype: string;
  Fname: string,
  Mname: string,
  Lname: string;
  dbirth: any;
  email: string;
  phone: any;
  Lphone: any;
  address: any;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class RecruitService {

  private leave: Observable<recruitForm[]>;
  private leaveCollection: AngularFirestoreCollection<recruitForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<recruitForm>('documents/managers/forms');
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

  addform(recru : recruitForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(recru);
    }

//to get the form data with each id
  getform(id: string): Observable<recruitForm> {
      return this.leaveCollection.doc<recruitForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }
}